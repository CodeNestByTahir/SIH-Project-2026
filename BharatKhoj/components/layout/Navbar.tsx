'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/explore', label: 'Explore' },
  { href: '/explore#states', label: 'States' },
  { href: '/profile', label: 'Profile' },
];

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Hide on intro/landing page
  if (pathname === '/') return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg    = dark ? 'rgba(26,15,8,0.96)'    : 'rgba(253,246,238,0.96)';
  const textColor = dark ? '#FDF6EE'               : '#1A0F08';
  const borderCol = dark ? 'rgba(224,177,125,0.15)': '#E8D5BC';
  const logoColor = dark ? '#E0B17D'               : '#AB5419';

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: navBg,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${borderCol}`,
          boxShadow: scrolled ? '0 2px 20px rgba(171,84,25,0.1)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem',
          height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* ==========================================
              ADD / REPLACE WEBSITE LOGO HERE
              Replace the block below with:
              <Link href="/explore">
                <img src="/logo.svg" alt="BharatKhoj" style={{ height: '36px' }} />
              </Link>
              ========================================== */}
          <Link href="/explore" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '36px', height: '36px',
              background: 'linear-gradient(135deg, #AB5419, #E0B17D)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px', fontWeight: '700', color: '#fff',
              fontFamily: 'var(--font-cinzel)',
              flexShrink: 0,
            }}>B</div>
            <span style={{
              fontFamily: 'var(--font-cinzel)', fontWeight: '700',
              fontSize: '1.1rem', color: logoColor, letterSpacing: '0.03em',
            }}>BharatKhoj</span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.875rem', fontWeight: '500',
                  color: pathname === link.href ? '#AB5419' : textColor,
                  borderBottom: pathname === link.href ? '2px solid #AB5419' : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
              >{link.label}</Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="hidden md:flex">
            <Link href="/auth" style={{
              padding: '0.5rem 1.25rem', borderRadius: '9999px',
              border: '1.5px solid #AB5419', color: '#AB5419',
              fontSize: '0.82rem', fontWeight: '600', textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}>Sign In</Link>
            <Link href="/auth?mode=signup" style={{
              padding: '0.5rem 1.25rem', borderRadius: '9999px',
              background: '#AB5419', color: '#fff',
              fontSize: '0.82rem', fontWeight: '600', textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}>Get Started</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(v => !v)}
            style={{
              background: 'none', border: 'none',
              cursor: 'pointer', padding: '0.5rem', color: textColor,
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — SOLID background, no transparency bleed */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '68px', left: 0, right: 0,
              zIndex: 99,
              background: dark ? '#1A0F08' : '#FDF6EE', /* SOLID — no transparency */
              borderBottom: `1px solid ${borderCol}`,
              padding: '1.5rem',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
            }}
          >
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: '#AB5419', fontWeight: '600',
                  fontSize: '1rem', textDecoration: 'none',
                  padding: '0.6rem 0',
                  borderBottom: `1px solid ${borderCol}`,
                }}
              >{link.label}</Link>
            ))}
            <Link
              href="/auth"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', textAlign: 'center', marginTop: '0.5rem',
                padding: '0.75rem', borderRadius: '12px',
                background: '#AB5419', color: '#fff',
                fontWeight: '600', fontSize: '0.875rem', textDecoration: 'none',
              }}
            >Sign In / Get Started</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
