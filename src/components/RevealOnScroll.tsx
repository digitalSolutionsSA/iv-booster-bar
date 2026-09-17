import { useEffect, useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsapSetup';

interface Props {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  stagger?: number;
}

export default function RevealOnScroll({ children, className = '', y = 40, delay = 0, stagger = 0.08 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.children.length > 0 ? Array.from(el.children) : [el];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [y, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}
