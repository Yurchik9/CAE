import React, { useState } from 'react';
import { TRANSFORMATION_QUESTIONS, TransformationQuestion } from '../data/quizData';
import { Award, CheckCircle, HelpCircle, RefreshCw, AlertCircle, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TransformationTrainerProps {
  completedIds: string[];
  markCompleted: (id: string) => void;
}

export const TransformationTrainer: React.FC<TransformationTrainerProps> = ({
  completedIds,
  markCompleted
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQ: TransformationQuestion = TRANSFORMATION_QUESTIONS[currentIndex];

  // Word count helper (must be 3 to 6 words according to CAE Part 4 rules)
  const wordCount = userInput.trim() === '' ? 0 : userInput.trim().split(/\s+/).length;
  const isWordLimitValid = wordCount >= 3 && wordCount <= 6;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Normalize strings for check
    const normalizedInput = userInput.trim().toLowerCase().replace(/\s+/g, ' ');
    const isCorrect = currentQ.acceptedAnswers.some(ans => ans.toLowerCase() === normalizedInput);

    if (isCorrect) {
      setFeedback({ isCorrect: true, message: '🎉 Perfect! Correct CAE Part 4 Transformation!' });
      markCompleted(currentQ.id);
      setShowExplanation(true);
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    } else {
      setFeedback({
        isCorrect: false,
        message: wordCount < 3 || wordCount > 6
          ? `⚠️ Word count rule warning: CAE Part 4 requires between 3 and 6 words (you wrote ${wordCount} words).`
          : '❌ Incorrect answer. Check your grammar structure and key word usage.'
      });
    }
  };

  const handleNext = () => {
    setUserInput('');
    setFeedback(null);
    setShowHint(false);
    setShowExplanation(false);
    if (currentIndex < TRANSFORMATION_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setUserInput('');
    setFeedback(null);
    setShowHint(false);
    setShowExplanation(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ padding: '2rem 2.5rem', maxWidth: '850px', margin: '0 auto' }}>
      {/* Top Banner */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', borderLeft: '5px solid var(--accent-amber)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Award color="#fbbf24" />
              CAE Reading & Use of English — Part 4 Simulator
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.3rem' }}>
              Complete the second sentence so that it has a similar meaning to the first sentence using the <strong>KEY WORD</strong>.
              Do NOT change the key word. You must use between <strong>3 and 6 words</strong>.
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span className="badge badge-amber">Question {currentIndex + 1} of {TRANSFORMATION_QUESTIONS.length}</span>
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="glass-card animate-fade-in" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span className="badge badge-indigo">{currentQ.category}</span>
          {completedIds.includes(currentQ.id) && (
            <span className="badge badge-emerald"><CheckCircle size={12} /> Solved</span>
          )}
        </div>

        {/* First Sentence */}
        <div style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-main)', background: 'var(--bg-primary)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
          "{currentQ.firstSentence}"
        </div>

        {/* Key Word Box */}
        <div style={{ textAlign: 'center', margin: '1.25rem 0' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', display: 'block', marginBottom: '0.3rem' }}>Required Key Word</span>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.75rem',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-violet))',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '0.1em',
            borderRadius: 'var(--radius-sm)',
            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
          }}>
            {currentQ.keyword}
          </div>
        </div>

        {/* Second Sentence Form */}
        <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
          <div style={{ fontSize: '1.05rem', lineHeight: '2.2', color: 'var(--text-main)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span>{currentQ.secondSentenceStart}</span>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="type your 3-6 word answer..."
              className={`transformation-input ${feedback ? (feedback.isCorrect ? 'correct' : 'incorrect') : ''}`}
            />
            <span>{currentQ.secondSentenceEnd}</span>
          </div>

          {/* Live Word Count Indicator */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem' }}>
            <span style={{
              fontSize: '0.8rem',
              color: wordCount === 0 ? 'var(--text-dim)' : (isWordLimitValid ? 'var(--accent-emerald)' : 'var(--accent-rose)'),
              fontWeight: 600
            }}>
              Word count: {wordCount} {wordCount > 0 && (isWordLimitValid ? '✓ (Valid 3-6 words)' : '✕ (Must be 3-6 words)')}
            </span>

            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setShowHint(!showHint)}
              style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)' }}
            >
              <HelpCircle size={14} /> {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          </div>

          {showHint && (
            <div className="alert-box alert-tip animate-fade-in" style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
              💡 <strong>Hint:</strong> Focus on grammar category <em>{currentQ.category}</em>. Make sure to keep <em>{currentQ.keyword}</em> unchanged.
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
              <CheckCircle size={18} /> Submit Answer
            </button>
          </div>
        </form>

        {/* Feedback Message */}
        {feedback && (
          <div className={`alert-box ${feedback.isCorrect ? 'alert-tip' : 'alert-important'} animate-fade-in`} style={{ marginTop: '1.25rem' }}>
            {feedback.message}
          </div>
        )}

        {/* Explanation Popup / Display */}
        {(showExplanation || feedback?.isCorrect) && (
          <div className="glass-card animate-fade-in" style={{ marginTop: '1.25rem', padding: '1.25rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid var(--accent-emerald)' }}>
            <h4 style={{ color: 'var(--accent-emerald)', fontSize: '1rem', marginBottom: '0.4rem' }}>Grammar Explanation:</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{currentQ.explanation}</p>
            <div style={{ marginTop: '0.6rem', fontSize: '0.88rem', color: 'var(--accent-cyan)' }}>
              <strong>Accepted answers:</strong> {currentQ.acceptedAnswers.map(a => `"${currentQ.secondSentenceStart} ${a} ${currentQ.secondSentenceEnd}"`).join(' OR ')}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="btn btn-secondary" onClick={handlePrev} disabled={currentIndex === 0}>
          <ChevronLeft size={16} /> Previous
        </button>

        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Completed {completedIds.length} of {TRANSFORMATION_QUESTIONS.length}
        </span>

        <button className="btn btn-primary" onClick={handleNext}>
          Next Question <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
