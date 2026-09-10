import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { GrammarGuide } from './components/GrammarGuide';
import { WritingGuide } from './components/WritingGuide';
import { LearningPath } from './components/LearningPath';
import { SectionQuizModal } from './components/SectionQuizModal';
import { TransformationTrainer } from './components/TransformationTrainer';
import { QuizHub } from './components/QuizHub';
import { FlashcardTrainer } from './components/FlashcardTrainer';
import { ComparisonTool } from './components/ComparisonTool';
import { UsefulResources } from './components/UsefulResources';
import { GRAMMAR_SECTIONS } from './data/grammarData';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<string>('path');
  const [activeSectionId, setActiveSectionId] = useState<string>('tenses');
  const [activeQuizModalId, setActiveQuizModalId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Persistence in localStorage
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('cae_bookmarks');
    return saved ? JSON.parse(saved) : ['tenses', 'conditionals'];
  });

  const [completedTransformations, setCompletedTransformations] = useState<string[]>(() => {
    const saved = localStorage.getItem('cae_transformations');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedSections, setCompletedSections] = useState<string[]>(() => {
    const saved = localStorage.getItem('cae_completed_sections');
    return saved ? JSON.parse(saved) : [];
  });

  const [xp, setXp] = useState<number>(() => {
    const saved = localStorage.getItem('cae_xp');
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('cae_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('cae_transformations', JSON.stringify(completedTransformations));
  }, [completedTransformations]);

  useEffect(() => {
    localStorage.setItem('cae_completed_sections', JSON.stringify(completedSections));
  }, [completedSections]);

  useEffect(() => {
    localStorage.setItem('cae_xp', String(xp));
  }, [xp]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => (prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]));
  };

  const markTransformationCompleted = (id: string) => {
    if (!completedTransformations.includes(id)) {
      setCompletedTransformations(prev => [...prev, id]);
    }
  };

  const handlePassSection = (secId: string, earnedXp: number) => {
    if (!completedSections.includes(secId)) {
      setCompletedSections(prev => [...prev, secId]);
      setXp(prev => prev + earnedXp);
    }
  };

  const handleOpenSectionGuide = (secId: string) => {
    setActiveSectionId(secId);
    setActiveView('guide');
  };

  const handleOpenSectionQuiz = (secId: string) => {
    setActiveQuizModalId(secId);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-main)' }}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeView={activeView}
        setActiveView={setActiveView}
        theme={theme}
        toggleTheme={toggleTheme}
        bookmarkedCount={bookmarks.length}
        completedTransformationsCount={completedTransformations.length}
        xp={xp}
      />

      <div className="layout-container">
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          activeSectionId={activeSectionId}
          setActiveSectionId={setActiveSectionId}
        />

        <main style={{ minWidth: 0, paddingBottom: '3rem' }}>
          {activeView === 'path' && (
            <LearningPath
              completedSections={completedSections}
              xp={xp}
              onOpenSectionGuide={handleOpenSectionGuide}
              onOpenSectionQuiz={handleOpenSectionQuiz}
            />
          )}

          {activeView === 'writing' && <WritingGuide />}

          {activeView === 'guide' && (
            <GrammarGuide
              activeSectionId={activeSectionId}
              searchTerm={searchTerm}
              bookmarks={bookmarks}
              completedSections={completedSections}
              toggleBookmark={toggleBookmark}
              setActiveView={setActiveView}
              onOpenSectionQuiz={handleOpenSectionQuiz}
            />
          )}

          {activeView === 'transformations' && (
            <TransformationTrainer
              completedIds={completedTransformations}
              markCompleted={markTransformationCompleted}
            />
          )}

          {activeView === 'quizzes' && <QuizHub />}

          {activeView === 'flashcards' && <FlashcardTrainer />}

          {activeView === 'compare' && <ComparisonTool />}

          {activeView === 'resources' && <UsefulResources />}

          {activeView === 'bookmarks' && (
            <div style={{ padding: '2rem 2.5rem', maxWidth: '850px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Saved Bookmarks ({bookmarks.length})</h2>
              {bookmarks.length === 0 ? (
                <p style={{ color: 'var(--text-muted)' }}>No saved rules yet. Click the bookmark icon on any grammar card to save it here!</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {GRAMMAR_SECTIONS.filter(s => bookmarks.includes(s.id)).map(sec => (
                    <div key={sec.id} className="glass-card" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)' }}>{sec.title}</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{sec.description}</p>
                      </div>
                      <button className="btn btn-secondary" onClick={() => { setActiveSectionId(sec.id); setActiveView('guide'); }}>
                        Read Rule
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Section Quiz Modal Drawer */}
      {activeQuizModalId && (
        <SectionQuizModal
          sectionId={activeQuizModalId}
          onClose={() => setActiveQuizModalId(null)}
          onPassSection={handlePassSection}
        />
      )}
    </div>
  );
};
