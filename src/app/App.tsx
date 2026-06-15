import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { User, Layers, FileText, Mail, Image, ChevronDown, Sun, Moon } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { AboutPage } from './components/pages/AboutPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { ResumePage } from './components/pages/ResumePage';
import { ContactPage } from './components/pages/ContactPage';
import { GalleryPage } from './components/pages/GalleryPage';
import type { Tokens } from './types';

type Theme = 'dark' | 'light';
type NavItem = 'About' | 'Resume' | 'Project' | 'Contact' | 'Gallery';

interface NavEntry { id: NavItem; Icon: React.ComponentType<{ size?: number }> }

const NAV: NavEntry[] = [
  { id: 'About',     Icon: User     },
  { id: 'Resume',    Icon: FileText },
  { id: 'Project', Icon: Layers   },
  { id: 'Contact',   Icon: Mail     },
  { id: 'Gallery',   Icon: Image    },
];

function buildTokens(isDark: boolean): Tokens {
  return isDark
    ? {
        bg: '#101010',
        card: '#1F1F21',
        card2: '#242426',
        textPrimary: '#F7F7F5',
        textSecondary: '#E4E4E2',
        textMuted: '#A7A7A7',
        border: '#39393B',
        accent: '#70DFF1',
        accentBg: 'rgba(112,223,241,0.1)',
        isDark: true,
      }
    : {
        bg: '#EBEBED',
        card: '#FFFFFF',
        card2: '#F4F4F6',
        textPrimary: '#0A0A0A',
        textSecondary: '#525252',
        textMuted: '#ACACAC',
        border: '#E0E0E0',
        accent: '#0284C7',
        accentBg: 'rgba(2,132,199,0.08)',
        isDark: false,
      };
}

export default function App() {
  const [theme, setTheme]         = useState<Theme>('dark');
  const [activeNav, setActiveNav] = useState<NavItem>('About');
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDark  = theme === 'dark';
  const tokens  = buildTokens(isDark);
  const navSurface = isDark ? '#292A2C' : '#F2F2F4';
  const hoverPill = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)';

  const renderPage = () => {
    switch (activeNav) {
      case 'About':      return <AboutPage      tokens={tokens} />;
      case 'Project':  return <PortfolioPage  tokens={tokens} />;
      case 'Resume':     return <ResumePage     tokens={tokens} />;
      case 'Contact':    return <ContactPage    tokens={tokens} />;
      case 'Gallery':    return <GalleryPage    tokens={tokens} />;
    }
  };

  const ActiveIcon = NAV.find(n => n.id === activeNav)?.Icon ?? User;

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: tokens.bg, fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1268px] mx-auto px-7 py-[34px]">
        <div className="flex gap-[30px] items-start">

          {/* ── Sidebar ─────────────────────────────────── */}
          <div className="hidden md:block w-[265px] shrink-0">
            <Sidebar tokens={tokens} />
          </div>

          {/* ── Main card ───────────────────────────────── */}
          <main className="flex-1 min-w-0">
            <div
              className="relative min-h-[680px] rounded-[18px] overflow-hidden transition-all duration-500"
              style={{
                backgroundColor: tokens.card,
                border: `1px solid ${tokens.border}`,
                boxShadow: isDark ? '0 24px 70px rgba(0,0,0,0.34)' : '0 12px 48px rgba(0,0,0,0.09)',
              }}
            >

              <div className="hidden sm:flex absolute right-0 top-0 z-20">
                <div
                  className="flex items-center h-[55px] rounded-bl-[18px] transition-colors duration-500"
                  style={{
                    backgroundColor: navSurface,
                    borderLeft: `1px solid ${tokens.border}`,
                    borderBottom: `1px solid ${tokens.border}`,
                  }}
                >
                  {NAV.map(({ id, Icon }) => {
                    const active = activeNav === id;
                    return (
                      <button
                        key={id}
                        onClick={() => setActiveNav(id)}
                        className="group relative flex h-full items-center px-[17px] whitespace-nowrap transition-all duration-150"
                        style={{
                          color: active ? tokens.accent : tokens.textSecondary,
                          fontWeight: active ? 600 : 500,
                          fontSize: '15.5px',
                          letterSpacing: '0',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => {
                          if (!active) (e.currentTarget as HTMLElement).style.color = tokens.textPrimary;
                        }}
                        onMouseLeave={e => {
                          if (!active) (e.currentTarget as HTMLElement).style.color = tokens.textSecondary;
                        }}
                      >
                        {/* Hover ghost */}
                        {!active && (
                          <span
                            className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                            style={{ backgroundColor: hoverPill }}
                          />
                        )}

                        <span className="relative z-10 flex items-center">
                          <span className="sr-only"><Icon size={12} /></span>
                          <span>{id}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* ═══ MOBILE NAV ═══════════════════════════════ */}
              <div className="sm:hidden">
                <div
                  className="flex items-center justify-between px-5 py-3"
                  style={{ borderBottom: `1px solid ${tokens.border}` }}
                >
                  {/* Active item label */}
                  <div className="flex items-center gap-2" style={{ color: tokens.accent }}>
                    <ActiveIcon size={14} />
                    <span style={{ fontSize: '14px', fontWeight: 600, color: tokens.textPrimary }}>
                      {activeNav}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Theme toggle */}
                    <button
                      onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                      className="flex items-center justify-center rounded-xl transition-all"
                      style={{
                        width: 32, height: 32,
                        backgroundColor: navSurface,
                        border: `1px solid ${tokens.border}`,
                        color: tokens.textSecondary,
                        cursor: 'pointer',
                      }}
                    >
                      {isDark ? <Sun size={13} /> : <Moon size={13} />}
                    </button>

                    {/* Menu toggle */}
                    <button
                      onClick={() => setMobileOpen(o => !o)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all"
                      style={{
                        backgroundColor: mobileOpen ? tokens.accentBg : navSurface,
                        border: `1px solid ${mobileOpen ? `${tokens.accent}30` : tokens.border}`,
                        color: mobileOpen ? tokens.accent : tokens.textSecondary,
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 500,
                      }}
                    >
                      <span>Menu</span>
                      <motion.span
                        animate={{ rotate: mobileOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: 'flex' }}
                      >
                        <ChevronDown size={12} />
                      </motion.span>
                    </button>
                  </div>
                </div>

                {/* Mobile dropdown */}
                <AnimatePresence initial={false}>
                  {mobileOpen && (
                    <motion.div
                      key="mob-menu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                      style={{
                        overflow: 'hidden',
                        borderBottom: `1px solid ${tokens.border}`,
                      }}
                    >
                      <div className="grid grid-cols-2 gap-2 p-4">
                        {NAV.map(({ id, Icon }) => {
                          const active = activeNav === id;
                          return (
                            <button
                              key={id}
                              onClick={() => { setActiveNav(id); setMobileOpen(false); }}
                              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-left transition-all"
                              style={{
                                backgroundColor: active ? tokens.accentBg : tokens.card2,
                                border: `1px solid ${active ? `${tokens.accent}28` : tokens.border}`,
                                color: active ? tokens.accent : tokens.textSecondary,
                                fontSize: '13px',
                                fontWeight: active ? 500 : 400,
                                cursor: 'pointer',
                              }}
                            >
                              <Icon size={13} />
                              <span>{id}</span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ═══ PAGE CONTENT ═══════════════════════════ */}
              <div className="px-[30px] sm:px-[30px] pt-[34px] pb-[38px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNav}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.16, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {renderPage()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Footer */}
            <footer
              className="mt-4 pb-2 text-center select-none"
              style={{ fontSize: '11.5px', color: tokens.textMuted }}
            >
              © 2026 Harshit Garg · Built with passion
            </footer>
          </main>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
