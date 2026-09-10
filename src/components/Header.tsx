import React from 'react';
import { Search, Sun, Moon, GraduationCap, Bookmark, CheckCircle } from 'lucide-react';

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
  xp
}) => {
  return (
    <header style={{
      height: '65px',
      borderBottom: '1px solid var(--border-color)',
      background: 'var(--bg-secondary)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5rem'
    }}>
      {/* Logo & Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => setActiveView('path')}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
        }}>
          <GraduationCap size={22} />
        </div>
        <div>
          <h1 style={{ fontSize: '1.15rem', lineHeight: '1.2' }}>CAE C1 Master</h1>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Duolingo C1 Journey</span>
        </div>
      </div>

      {/* Global Search Bar */}
      <div style={{ flex: 1, maxWidth: '420px', margin: '0 1.5rem', position: 'relative' }}>
        <Search size={17} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input
          type="text"
          placeholder="Search grammar rules, signal words, traps (e.g. 'inversion', 'wish', 'used to')..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem 1rem 0.5rem 2.2rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            fontSize: '0.85rem',
            outline: 'none'
          }}
        />
      </div>

      {/* Stats & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        {/* XP Badge */}
        <div className="badge badge-amber" style={{ cursor: 'pointer', padding: '0.35rem 0.75rem', fontWeight: 700 }} onClick={() => setActiveView('path')} title="Duolingo Path XP">
          <span>⚡ {xp} XP</span>
        </div>

        {/* Progress Stats */}
        <div className="badge badge-emerald" style={{ cursor: 'pointer' }} onClick={() => setActiveView('transformations')} title="Completed Key Word Transformations">
          <CheckCircle size={14} />
          <span>{completedTransformationsCount} Solved</span>
        </div>

        <div className="badge badge-indigo" style={{ cursor: 'pointer' }} onClick={() => setActiveView('bookmarks')} title="Bookmarked Rules">
          <Bookmark size={14} />
          <span>{bookmarkedCount} Saved</span>
        </div>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost"
          style={{ padding: '0.5rem', borderRadius: '50%' }}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun size={19} color="#fbbf24" /> : <Moon size={19} color="#6366f1" />}
        </button>
      </div>
    </header>
  );
};
