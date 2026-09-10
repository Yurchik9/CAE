import React, { useState } from 'react';
import { FLASHCARDS } from '../data/quizData';
import { Layers, RotateCcw, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const FlashcardTrainer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const card = FLASHCARDS[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < FLASHCARDS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ padding: '2rem 2.5rem', maxWidth: '700px', margin: '0 auto' }}>
      {/* Banner */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', borderLeft: '5px solid var(--accent-emerald)' }}>
        <h2 style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Layers color="#10b981" />
          C1 Flashcard Memory Drill
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.3rem' }}>
          Master key C1 reporting verb patterns, dependent prepositions, and inversion triggers. Click the card to flip!
        </p>
      </div>

      {/* Interactive Flip Card Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="glass-card animate-fade-in"
        style={{
          minHeight: '320px',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          position: 'relative',
          background: isFlipped ? 'rgba(99, 102, 241, 0.08)' : 'var(--bg-card)',
          border: '2px solid',
          borderColor: isFlipped ? 'var(--accent-primary)' : 'var(--border-color)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isFlipped ? '0 0 30px rgba(99, 102, 241, 0.25)' : 'var(--shadow-sm)'
        }}
      >
        <span className="badge badge-emerald" style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
          {card.category}
        </span>

        <span style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontSize: '0.78rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <Eye size={14} /> Click card to flip
        </span>

        {!isFlipped ? (
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem' }}>Question / Expression</span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
              {card.front}
            </h3>
          </div>
        ) : (
          <div className="animate-fade-in">
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-cyan)', display: 'block', marginBottom: '0.5rem' }}>Required C1 Grammar Pattern</span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-emerald)', whiteSpace: 'pre-line', marginBottom: '1rem' }}>
              {card.back}
            </h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', background: 'var(--bg-primary)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)' }}>
              "{card.example}"
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="btn btn-secondary" onClick={handlePrev} disabled={currentIndex === 0}>
          <ChevronLeft size={16} /> Previous
        </button>

        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Card {currentIndex + 1} of {FLASHCARDS.length}
        </span>

        <button className="btn btn-primary" onClick={handleNext}>
          Next Card <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
