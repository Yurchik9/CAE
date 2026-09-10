import React, { useState } from 'react';
import { MULTIPLE_CHOICE_QUESTIONS } from '../data/quizData';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizHub: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    MULTIPLE_CHOICE_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    if (score === MULTIPLE_CHOICE_QUESTIONS.length) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();

  return (
    <div style={{ padding: '2rem 2.5rem', maxWidth: '850px', margin: '0 auto' }}>
      {/* Quiz Banner */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', borderLeft: '5px solid var(--accent-cyan)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <HelpCircle color="#06b6d4" />
              CAE C1 Multiple-Choice Practice
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.3rem' }}>
              Test your knowledge across all 16 C1 grammar modules with instant explanation feedback.
            </p>
          </div>

          {submitted && (
            <div style={{ textAlign: 'right' }}>
              <span className="badge badge-emerald" style={{ fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}>
                Score: {score} / {MULTIPLE_CHOICE_QUESTIONS.length} ({Math.round((score / MULTIPLE_CHOICE_QUESTIONS.length) * 100)}%)
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Question Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {MULTIPLE_CHOICE_QUESTIONS.map((q, idx) => {
          const selected = selectedAnswers[q.id];
          const isCorrect = selected === q.correctAnswer;

          return (
            <div key={q.id} className="glass-card animate-fade-in" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className="badge badge-indigo">Question {idx + 1} • {q.category}</span>
                {submitted && (
                  isCorrect ? (
                    <span className="badge badge-emerald" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <CheckCircle2 size={14} /> Correct
                    </span>
                  ) : (
                    <span className="badge badge-rose" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <XCircle size={14} /> Incorrect
                    </span>
                  )
                )}
              </div>

              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 600 }}>
                {q.question}
              </h3>

              {/* Options */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {q.options.map((opt, optIdx) => {
                  let btnStyle = {
                    background: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-main)'
                  };

                  if (selected === optIdx) {
                    btnStyle = {
                      background: 'rgba(99, 102, 241, 0.2)',
                      borderColor: 'var(--accent-primary)',
                      color: 'var(--accent-primary)'
                    };
                  }

                  if (submitted) {
                    if (optIdx === q.correctAnswer) {
                      btnStyle = {
                        background: 'rgba(16, 185, 129, 0.2)',
                        borderColor: 'var(--accent-emerald)',
                        color: '#34d399'
                      };
                    } else if (selected === optIdx && !isCorrect) {
                      btnStyle = {
                        background: 'rgba(244, 63, 94, 0.2)',
                        borderColor: 'var(--accent-rose)',
                        color: '#f87171'
                      };
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className="btn"
                      style={{
                        ...btnStyle,
                        justifyContent: 'flex-start',
                        padding: '0.75rem 1rem',
                        fontSize: '0.9rem',
                        textAlign: 'left'
                      }}
                    >
                      <span style={{ opacity: 0.6, marginRight: '0.4rem' }}>{String.fromCharCode(65 + optIdx)}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submit */}
              {submitted && (
                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--accent-cyan)' }}>Explanation:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit / Reset Footer */}
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="btn btn-primary"
            style={{ flex: 1, padding: '0.8rem' }}
          >
            Submit Quiz Answers
          </button>
        ) : (
          <button onClick={handleReset} className="btn btn-secondary" style={{ flex: 1, padding: '0.8rem' }}>
            <RotateCcw size={16} /> Retake Quiz
          </button>
        )}
      </div>
    </div>
  );
};
