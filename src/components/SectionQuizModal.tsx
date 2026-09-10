import React, { useState } from 'react';
import { SECTION_QUIZZES, SectionQuizQuestion } from '../data/sectionQuizzesData';
import { X, CheckCircle, Award, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SectionQuizModalProps {
  sectionId: string;
  onClose: () => void;
  onPassSection: (sectionId: string, earnedXp: number) => void;
}

export const SectionQuizModal: React.FC<SectionQuizModalProps> = ({
  sectionId,
  onClose,
  onPassSection
}) => {
  const quiz = SECTION_QUIZZES[sectionId] || SECTION_QUIZZES['tenses'];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<{ [qId: string]: any }>({});
  const [submitted, setSubmitted] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const currentQ: SectionQuizQuestion = quiz.questions[currentIdx];

  const handleSelectMcq = (optIdx: number) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: optIdx }));
  };

  const handleTransformationInput = (text: string) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: text }));
  };

  const isCurrentAnswered = answers[currentQ.id] !== undefined && String(answers[currentQ.id]).trim() !== '';

  const handleNext = () => {
    if (currentIdx < quiz.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Evaluate whole test
      setSubmitted(true);
      let correctCount = 0;

      quiz.questions.forEach(q => {
        const userAns = answers[q.id];
        if (q.type === 'mcq') {
          if (userAns === q.correctAnswer) correctCount++;
        } else if (q.type === 'transformation') {
          const normalized = String(userAns || '').trim().toLowerCase().replace(/\s+/g, ' ');
          if (q.acceptedAnswers?.some(a => a.toLowerCase() === normalized)) {
            correctCount++;
          }
        }
      });

      if (correctCount >= 2) {
        confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
        onPassSection(sectionId, 50);
        setFeedbackMsg(`🏆 Section Mastered! You got ${correctCount}/${quiz.questions.length} correct and earned +50 XP!`);
      } else {
        setFeedbackMsg(`You scored ${correctCount}/${quiz.questions.length}. Review the section guide and try again!`);
      }
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrentIdx(0);
    setFeedbackMsg(null);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-card animate-fade-in" style={{
        width: '100%',
        maxWidth: '650px',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color-glow)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn btn-ghost"
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', padding: '0.4rem', borderRadius: '50%' }}
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="badge badge-amber" style={{ marginBottom: '0.4rem' }}>Section Revision Quiz</span>
          <h2 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>{quiz.sectionTitle}</h2>
        </div>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              <span>Question {currentIdx + 1} of {quiz.questions.length}</span>
              <span>Earn +50 XP on completion</span>
            </div>

            {/* Question Body */}
            <div style={{ background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {currentQ.question}
              </h3>

              {currentQ.type === 'transformation' ? (
                <div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>"{currentQ.firstSentence}"</p>
                  <div style={{ textAlign: 'center', margin: '0.75rem 0' }}>
                    <span className="badge badge-indigo" style={{ fontSize: '0.9rem', padding: '0.3rem 1rem' }}>KEYWORD: {currentQ.keyword}</span>
                  </div>
                  <div style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
                    <span>{currentQ.secondSentenceStart}</span>
                    <input
                      type="text"
                      value={answers[currentQ.id] || ''}
                      onChange={(e) => handleTransformationInput(e.target.value)}
                      placeholder="type 3-6 words..."
                      className="transformation-input"
                      style={{ maxWidth: '280px', fontSize: '0.9rem', padding: '0.4rem 0.75rem' }}
                    />
                    <span>{currentQ.secondSentenceEnd}</span>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
                  {currentQ.options?.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectMcq(oIdx)}
                      className={`btn ${answers[currentQ.id] === oIdx ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ justifyContent: 'flex-start', textAlign: 'left', fontSize: '0.9rem', padding: '0.65rem 1rem' }}
                    >
                      <span style={{ opacity: 0.6, marginRight: '0.4rem' }}>{String.fromCharCode(65 + oIdx)}.</span>
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Next Question Button */}
            <button
              onClick={handleNext}
              disabled={!isCurrentAnswered}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.75rem' }}
            >
              <span>{currentIdx < quiz.questions.length - 1 ? 'Next Question' : 'Submit Section Test'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="animate-fade-in" style={{ textAlign: 'center', padding: '1rem 0' }}>
            <Award size={48} color="#fbbf24" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{feedbackMsg}</h3>

            {/* Questions Review */}
            <div style={{ marginTop: '1.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {quiz.questions.map((q, idx) => (
                <div key={q.id} style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>Q{idx + 1}: {q.question}</span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    💡 <strong>Explanation:</strong> {q.explanation}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <button className="btn btn-secondary" onClick={handleReset} style={{ flex: 1 }}>
                <RotateCcw size={16} /> Retake Test
              </button>

              <button className="btn btn-primary" onClick={onClose} style={{ flex: 1 }}>
                Done / Continue Path
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
