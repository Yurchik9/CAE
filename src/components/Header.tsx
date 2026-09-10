import React from 'react';
import { Search, Sun, Moon, GraduationCap, Bookmark, CheckCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeView: string;
  setActiveView: (view: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  bookmarkedCount: number;
  completedTransformationsCount: number;
  xp: number;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  activeView,
  setActiveView,
  theme,
  toggleTheme,
  bookmarkedCount,
  completedTransformationsCount,
  xp,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  return (
    <header style={{
      height: '65px',
      borderBottom: '1px solid var(--border-color)',
      background: 'var(--bg-secondary)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1rem'
    }}>
      {/* Left: Mobile Menu Button & Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn btn-ghost mobile-menu-toggle"
          style={{ padding: '0.4rem', minHeight: '36px' }}
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X size={22} color="var(--accent-cyan)" /> : <Menu size={22} color="var(--text-main)" />}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }} onClick={() => { setActiveView('path'); setMobileMenuOpen(false); }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
            flexShrink: 0
          }}>
            <GraduationCap size={20} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.05rem', lineHeight: '1.2' }}>CAE C1 Master</h1>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Cambridge Prep</span>
          </div>
        </div>
      </div>

      {/* Global Search Bar */}
      <div style={{ flex: 1, maxWidth: '380px', margin: '0 0.75rem', position: 'relative' }}>
        <Search size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input
          type="text"
          placeholder="Search rules..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '0.4rem 0.8rem 0.4rem 2rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            fontSize: '0.82rem',
            outline: 'none'
          }}
        />
      </div>

      {/* Stats & Theme Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <div className="badge badge-amber" style={{ cursor: 'pointer', padding: '0.3rem 0.6rem', fontWeight: 700 }} onClick={() => { setActiveView('path'); setMobileMenuOpen(false); }} title="Duolingo Path XP">
          <span>⚡ {xp}</span>
        </div>

        <button
          onClick={toggleTheme}
          className="btn btn-ghost"
          style={{ padding: '0.4rem', borderRadius: '50%', minHeight: '36px' }}
          title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        >
          {theme === 'dark' ? <Sun size={18} color="#fbbf24" /> : <Moon size={18} color="#6366f1" />}
        </button>
      </div>
    </header>
  );
};
