import React from 'react';
import { GRAMMAR_SECTIONS } from '../data/grammarData';
import {
  BookOpen,
  Award,
  HelpCircle,
  Layers,
  Sparkles,
  ExternalLink,
  Bookmark,
  Split,
  PenTool,
  X
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  activeSectionId: string;
  setActiveSectionId: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  setActiveView,
  activeSectionId,
  setActiveSectionId,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const handleNavClick = (view: string, sectionId?: string) => {
    setActiveView(view);
    if (sectionId) {
      setActiveSectionId(sectionId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: '65px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 140
          }}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={mobileMenuOpen ? 'mobile-drawer-open' : 'desktop-sidebar'}
        style={{
          background: 'var(--bg-secondary)',
          borderRight: '1px solid var(--border-color)',
          padding: '1.25rem 1rem',
          flexDirection: 'column',
          gap: '1.5rem',
          height: 'calc(100vh - 65px)',
          overflowY: 'auto',
          position: 'sticky',
          top: '65px',
          zIndex: 150
        }}
      >
        {/* Mobile Drawer Title Header */}
        {mobileMenuOpen && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>Navigation Menu</span>
            <button className="btn btn-ghost" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.2rem', minHeight: 'auto' }}>
              <X size={18} />
            </button>
          </div>
        )}

        {/* Practice Hub Modes */}
        <div>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', paddingLeft: '0.5rem' }}>
            Practice & Hub
          </span>
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <button
              className={`btn ${activeView === 'path' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => handleNavClick('path')}
              style={{ justifyContent: 'flex-start', width: '100%', background: activeView === 'path' ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))' : 'transparent' }}
            >
              <Sparkles size={16} color="#fbbf24" />
              <span>Duolingo Path</span>
            </button>

            <button
              className={`btn ${activeView === 'writing' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => handleNavClick('writing')}
              style={{ justifyContent: 'flex-start', width: '100%', background: activeView === 'writing' ? 'linear-gradient(135deg, var(--accent-violet), var(--accent-primary))' : 'transparent' }}
            >
              <PenTool size={16} color="#8b5cf6" />
              <span>Writing Master</span>
            </button>

            <button
              className={`btn ${activeView === 'guide' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => handleNavClick('guide')}
              style={{ justifyContent: 'flex-start', width: '100%' }}
            >
              <BookOpen size={16} />
              <span>Grammar Guide</span>
            </button>

            <button
              className={`btn ${activeView === 'transformations' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => handleNavClick('transformations')}
              style={{ justifyContent: 'flex-start', width: '100%' }}
            >
              <Award size={16} color="#fbbf24" />
              <span>Part 4 Transformations</span>
            </button>

            <button
              className={`btn ${activeView === 'quizzes' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => handleNavClick('quizzes')}
              style={{ justifyContent: 'flex-start', width: '100%' }}
            >
              <HelpCircle size={16} color="#22d3ee" />
              <span>Grammar Quizzes</span>
            </button>

            <button
              className={`btn ${activeView === 'flashcards' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => handleNavClick('flashcards')}
              style={{ justifyContent: 'flex-start', width: '100%' }}
            >
              <Layers size={16} color="#34d399" />
              <span>C1 Flashcards</span>
            </button>

            <button
              className={`btn ${activeView === 'compare' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => handleNavClick('compare')}
              style={{ justifyContent: 'flex-start', width: '100%' }}
            >
              <Split size={16} color="#f43f5e" />
              <span>Rule Comparer</span>
            </button>

            <button
              className={`btn ${activeView === 'resources' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => handleNavClick('resources')}
              style={{ justifyContent: 'flex-start', width: '100%' }}
            >
              <ExternalLink size={16} color="#818cf8" />
              <span>C1 Useful Resources</span>
            </button>

            <button
              className={`btn ${activeView === 'bookmarks' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => handleNavClick('bookmarks')}
              style={{ justifyContent: 'flex-start', width: '100%' }}
            >
              <Bookmark size={16} color="#f59e0b" />
              <span>Saved Bookmarks</span>
            </button>
          </div>
        </div>

        {/* Grammar Modules Index */}
        {activeView === 'guide' && (
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', paddingLeft: '0.5rem' }}>
              All C1 Modules
            </span>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              {GRAMMAR_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleNavClick('guide', sec.id)}
                  style={{
                    textAlign: 'left',
                    padding: '0.45rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    border: 'none',
                    background: activeSectionId === sec.id ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                    color: activeSectionId === sec.id ? 'var(--accent-primary)' : 'var(--text-muted)',
                    fontWeight: activeSectionId === sec.id ? 600 : 400,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {sec.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
