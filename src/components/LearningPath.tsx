import React from 'react';
import { GRAMMAR_SECTIONS } from '../data/grammarData';
import { SECTION_QUIZZES } from '../data/sectionQuizzesData';
import { Award, BookOpen, CheckCircle2, Lock, Star, Play, Sparkles, Trophy } from 'lucide-react';

interface LearningPathProps {
  completedSections: string[];
  xp: number;
  onOpenSectionGuide: (sectionId: string) => void;
  onOpenSectionQuiz: (sectionId: string) => void;
}

export const LearningPath: React.FC<LearningPathProps> = ({
  completedSections,
  xp,
  onOpenSectionGuide,
  onOpenSectionQuiz
}) => {
  const totalSections = GRAMMAR_SECTIONS.length;
  const passedCount = completedSections.length;
  const progressPercent = Math.round((passedCount / totalSections) * 100);

  return (
    <div style={{ padding: '2rem 2.5rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Path Dashboard Banner */}
      <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '2.5rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.15))', borderLeft: '5px solid var(--accent-primary)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-indigo" style={{ marginBottom: '0.4rem' }}>Duolingo C1 Journey</span>
            <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Trophy color="#fbbf24" />
              CAE Grammar Learning Path
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.3rem' }}>
              Master each section step-by-step. Read the guide node, then pass the section mini-test to earn +50 XP and unlock stars!
            </p>
          </div>

          {/* XP & Progress Badge */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              padding: '0.6rem 1.2rem',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase' }}>Total XP</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fbbf24' }}>⚡ {xp} XP</div>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '0.6rem 1.2rem',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 700, textTransform: 'uppercase' }}>Mastered</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399' }}>{passedCount} / {totalSections}</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginTop: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.3rem' }}>
            <span>Overall CAE Mastery</span>
            <span>{progressPercent}%</span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'var(--bg-primary)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-cyan))', transition: 'width 0.4s ease' }} />
          </div>
        </div>
      </div>

      {/* Visual Duolingo-style Roadmap Nodes */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
        {/* Central Connecting Line */}
        <div style={{
          position: 'absolute',
          top: '30px',
          bottom: '30px',
          width: '4px',
          background: 'var(--border-color)',
          zIndex: 0
        }} />

        {GRAMMAR_SECTIONS.map((sec, index) => {
          const isPassed = completedSections.includes(sec.id);
          const hasQuiz = !!SECTION_QUIZZES[sec.id];
          const isUnlocked = index === 0 || completedSections.includes(GRAMMAR_SECTIONS[index - 1].id) || isPassed;

          // Offset nodes left/right like Duolingo path
          const offsetStyles = index % 2 === 0 ? { transform: 'translateX(-25px)' } : { transform: 'translateX(25px)' };

          return (
            <div key={sec.id} style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '550px', ...offsetStyles }} className="animate-fade-in">
              <div className="glass-card" style={{
                padding: '1.5rem',
                border: '2px solid',
                borderColor: isPassed ? 'var(--accent-emerald)' : (isUnlocked ? 'var(--border-color-glow)' : 'var(--border-color)'),
                background: isPassed ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-card)',
                boxShadow: isPassed ? '0 0 20px rgba(16, 185, 129, 0.15)' : 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  {/* Node Circle Icon */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: isPassed
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : (isUnlocked ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-violet))' : 'var(--bg-primary)'),
                    border: '2px solid',
                    borderColor: isPassed ? '#34d399' : (isUnlocked ? 'var(--accent-primary)' : 'var(--border-color)'),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    flexShrink: 0,
                    fontWeight: 700,
                    boxShadow: isUnlocked ? '0 4px 14px rgba(99, 102, 241, 0.3)' : 'none'
                  }}>
                    {isPassed ? <Star size={24} fill="#fff" /> : (isUnlocked ? <span>{index + 1}</span> : <Lock size={18} color="var(--text-dim)" />)}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <h3 style={{ fontSize: '1.1rem', color: isUnlocked ? 'var(--text-main)' : 'var(--text-dim)' }}>
                        {sec.title}
                      </h3>
                      {isPassed && (
                        <span className="badge badge-emerald"><CheckCircle2 size={12} /> Mastered ⭐</span>
                      )}
                    </div>

                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                      {sec.description}
                    </p>

                    {/* Node Action Buttons */}
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => onOpenSectionGuide(sec.id)}
                        className="btn btn-secondary"
                        style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}
                      >
                        <BookOpen size={14} /> 📖 Study Guide
                      </button>

                      {hasQuiz && (
                        <button
                          onClick={() => onOpenSectionQuiz(sec.id)}
                          className={`btn ${isPassed ? 'btn-secondary' : 'btn-primary'}`}
                          style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}
                        >
                          <Play size={14} /> {isPassed ? 'Retake Mini-Test' : '📝 Take Section Test (+50 XP)'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
