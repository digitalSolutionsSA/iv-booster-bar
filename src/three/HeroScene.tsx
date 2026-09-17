import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BRAND_COLORS = [0x527359, 0xbed173, 0xfaf5f0, 0x8fae7c, 0x6f8f66];

interface Droplet {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  spin: THREE.Vector3;
}

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const CAMERA_Z = 13;
    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, CAMERA_Z);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.95);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.75);
    dirLight.position.set(4, 6, 8);
    scene.add(ambient, dirLight);

    const group = new THREE.Group();
    scene.add(group);

    const dropletGeometry = new THREE.IcosahedronGeometry(1, 2);
    const droplets: Droplet[] = [];
    const isMobile = window.innerWidth < 720;
    const count = isMobile ? 40 : 80;

    // Bounds sized so the field of droplets fills the whole viewport, edge to edge,
    // computed from the camera's frustum at the droplets' average depth.
    const zMin = -7;
    const zMax = 5;
    const zMid = (zMin + zMax) / 2;
    const distAtMid = CAMERA_Z - zMid;
    const vFov = (camera.fov * Math.PI) / 180;
    const halfHeight = Math.tan(vFov / 2) * distAtMid;
    const halfWidth = halfHeight * camera.aspect;
    const xBound = halfWidth * 1.15;
    const yBound = halfHeight * 1.15;

    const BASE_SPEED = 1.1;
    const MAX_SPEED = 4;
    const JITTER = 1.6;
    const DAMPING = 0.994;

    for (let i = 0; i < count; i++) {
      const color = BRAND_COLORS[i % BRAND_COLORS.length];
      const material = new THREE.MeshStandardMaterial({
        color,
        transparent: true,
        opacity: 0.82,
        roughness: 0.25,
        metalness: 0.1,
      });
      const mesh = new THREE.Mesh(dropletGeometry, material);
      const scale = THREE.MathUtils.randFloat(0.16, 0.58);
      mesh.scale.setScalar(scale);

      mesh.position.set(
        THREE.MathUtils.randFloatSpread(xBound * 2),
        THREE.MathUtils.randFloatSpread(yBound * 2),
        THREE.MathUtils.randFloat(zMin, zMax),
      );

      const velocity = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(BASE_SPEED),
        THREE.MathUtils.randFloatSpread(BASE_SPEED),
        THREE.MathUtils.randFloatSpread(BASE_SPEED * 0.4),
      );
      const spin = new THREE.Vector3(
        THREE.MathUtils.randFloat(0.05, 0.25),
        THREE.MathUtils.randFloat(0.05, 0.25),
        THREE.MathUtils.randFloat(0.02, 0.1),
      );

      group.add(mesh);
      droplets.push({ mesh, velocity, spin });
    }

    // Pointer tracking (mouse + touch) drives a raycaster that repels nearby droplets.
    const raycaster = new THREE.Raycaster();
    const pointerNDC = new THREE.Vector2(10, 10);
    let pointerActive = false;
    let pointerIdleId: number | undefined;

    const setPointer = (clientX: number, clientY: number) => {
      const rect = mount.getBoundingClientRect();
      pointerNDC.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointerNDC.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      pointerActive = true;
      if (pointerIdleId) window.clearTimeout(pointerIdleId);
      pointerIdleId = window.setTimeout(() => {
        pointerActive = false;
      }, 200);
    };

    const onMouseMove = (e: MouseEvent) => setPointer(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) setPointer(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchMove, { passive: true });

    // reusable scratch vectors to avoid per-frame allocations
    const toDroplet = new THREE.Vector3();
    const closestOnRay = new THREE.Vector3();
    const pushDir = new THREE.Vector3();
    const INFLUENCE_RADIUS = 2.8;
    const REPEL_STRENGTH = 5.5;

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.05);

      if (pointerActive) raycaster.setFromCamera(pointerNDC, camera);

      droplets.forEach(({ mesh, velocity, spin }) => {
        // gentle random-walk jitter so every droplet wanders its own unique path
        velocity.x += THREE.MathUtils.randFloatSpread(JITTER) * delta;
        velocity.y += THREE.MathUtils.randFloatSpread(JITTER) * delta;
        velocity.z += THREE.MathUtils.randFloatSpread(JITTER * 0.4) * delta;

        // pointer / touch repulsion
        if (pointerActive) {
          const rayOrigin = raycaster.ray.origin;
          const rayDir = raycaster.ray.direction;
          toDroplet.subVectors(mesh.position, rayOrigin);
          const t = toDroplet.dot(rayDir);
          if (t > 0) {
            closestOnRay.copy(rayDir).multiplyScalar(t).add(rayOrigin);
            pushDir.subVectors(mesh.position, closestOnRay);
            const dist = pushDir.length();
            if (dist < INFLUENCE_RADIUS) {
              pushDir.multiplyScalar(1 / (dist || 0.001));
              const strength = (1 - dist / INFLUENCE_RADIUS) * REPEL_STRENGTH;
              velocity.addScaledVector(pushDir, strength * delta);
            }
          }
        }

        velocity.multiplyScalar(DAMPING);
        if (velocity.length() > MAX_SPEED) velocity.setLength(MAX_SPEED);

        mesh.position.x += velocity.x * delta;
        mesh.position.y += velocity.y * delta;
        mesh.position.z += velocity.z * delta;

        if (mesh.position.x > xBound || mesh.position.x < -xBound) velocity.x *= -1;
        if (mesh.position.y > yBound || mesh.position.y < -yBound) velocity.y *= -1;
        if (mesh.position.z > zMax || mesh.position.z < zMin) velocity.z *= -1;

        mesh.rotation.x += spin.x * delta;
        mesh.rotation.y += spin.y * delta;
        mesh.rotation.z += spin.z * delta;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    // Only run the render loop while the hero is actually on screen and the
    // tab is active — saves CPU/GPU/battery once the user scrolls past it.
    let running = false;
    let inViewport = true;
    const startLoop = () => {
      if (running) return;
      running = true;
      clock.getDelta();
      animate();
    };
    const stopLoop = () => {
      running = false;
      cancelAnimationFrame(frameId);
    };
    const syncLoop = () => {
      if (inViewport && !document.hidden) startLoop();
      else stopLoop();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inViewport = entry.isIntersecting;
        syncLoop();
      },
      { threshold: 0 },
    );
    io.observe(mount);
    document.addEventListener('visibilitychange', syncLoop);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      stopLoop();
      io.disconnect();
      document.removeEventListener('visibilitychange', syncLoop);
      if (pointerIdleId) window.clearTimeout(pointerIdleId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchMove);
      dropletGeometry.dispose();
      droplets.forEach(({ mesh }) => (mesh.material as THREE.Material).dispose());
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hero-scene" aria-hidden="true" />;
}
