import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { nav } from '../data/siteContent';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenSubmenu(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!panelRef.current || !overlayRef.current) return;
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.set(panelRef.current, { display: 'flex' });
      gsap.set(overlayRef.current, { display: 'block' });
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo(panelRef.current, { xPercent: 100 }, { xPercent: 0, duration: 0.5, ease: 'power3.out' });
      gsap.fromTo(
        panelRef.current.querySelectorAll('.mobile-nav__item'),
        { opacity: 0, x: 24 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.045, delay: 0.15, ease: 'power2.out' },
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(panelRef.current, {
        xPercent: 100,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => gsap.set(panelRef.current, { display: 'none' }),
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => gsap.set(overlayRef.current, { display: 'none' }),
      });
    }
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo">
          <img src="/images/logo.png" alt="The IV Booster Bar – IV Drips in Sandton & the Vaal" decoding="async" />
        </Link>

        <nav className="site-header__nav">
          <ul>
            {nav.map((item) => (
              <li key={item.to} className={item.children ? 'has-children' : ''}>
                <NavLink to={item.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="submenu">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink to={child.to}>{child.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link to="/book-a-consultation" className="btn btn-primary site-header__cta">
            Book Now
          </Link>
          <button
            className="site-header__burger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {createPortal(
        <>
          <div ref={overlayRef} className="mobile-nav-overlay" onClick={() => setMenuOpen(false)} />
          <div ref={panelRef} className="mobile-nav">
            <button className="mobile-nav__close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              ×
            </button>
            <ul className="mobile-nav__list">
              {nav.map((item) => (
                <li key={item.to} className="mobile-nav__item">
                  <div className="mobile-nav__row">
                    <Link to={item.to} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className={`mobile-nav__toggle ${openSubmenu ? 'is-open' : ''}`}
                        onClick={() => setOpenSubmenu((v) => !v)}
                        aria-label="Toggle submenu"
                      >
                        ⌄
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <ul className={`mobile-nav__submenu ${openSubmenu ? 'is-open' : ''}`}>
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <Link to={child.to} onClick={() => setMenuOpen(false)}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/book-a-consultation" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              Book Now
            </Link>
          </div>
        </>,
        document.body,
      )}
    </header>
  );
}
