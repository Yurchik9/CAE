import React from 'react';
import { RuleSection, GRAMMAR_SECTIONS } from '../data/grammarData';
import { SECTION_QUIZZES } from '../data/sectionQuizzesData';
import { Bookmark, Check, Copy, AlertTriangle, Lightbulb, Info, Tag, ArrowRight, Star, Award, Play } from 'lucide-react';

interface GrammarGuideProps {
  activeSectionId: string;
  searchTerm: string;
  bookmarks: string[];
  completedSections: string[];
  toggleBookmark: (id: string) => void;
  setActiveView: (view: string) => void;
  onOpenSectionQuiz: (sectionId: string) => void;
}

export const GrammarGuide: React.FC<GrammarGuideProps> = ({
  activeSectionId,
  searchTerm,
  bookmarks,
  completedSections,
  toggleBookmark,
  setActiveView,
  onOpenSectionQuiz
}) => {
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Filter sections if search term is active
  const filteredSections = GRAMMAR_SECTIONS.filter((sec) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      sec.title.toLowerCase().includes(term) ||
      sec.titleUk.toLowerCase().includes(term) ||
      sec.description.toLowerCase().includes(term) ||
      sec.signalWords?.some((w) => w.toLowerCase().includes(term)) ||
      sec.keyRules.some((r) => r.title.toLowerCase().includes(term) || r.text.toLowerCase().includes(term)) ||
      sec.traps?.some((t) => t.title.toLowerCase().includes(term) || t.text.toLowerCase().includes(term))
    );
  });

  const activeSection = GRAMMAR_SECTIONS.find((s) => s.id === activeSectionId) || GRAMMAR_SECTIONS[0];
  const displaySections = searchTerm ? filteredSections : [activeSection];

  return (
    <div style={{ padding: '2rem 2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Search Header Note */}
      {searchTerm && (
        <div style={{ marginBottom: '1.5rem', padding: '0.75rem 1.25rem', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid var(--accent-primary)', borderRadius: 'var(--radius-sm)', color: 'var(--text-main)', fontSize: '0.9rem' }}>
          Found <strong>{filteredSections.length}</strong> matching grammar topics for search "{searchTerm}":
        </div>
      )}

      {displaySections.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
          <h3>No grammar topics match your query "{searchTerm}"</h3>
          <p style={{ marginTop: '0.5rem' }}>Try searching for 'inversion', 'wish', 'modals', 'gerund', or clear your search.</p>
        </div>
      ) : (
        displaySections.map((sec) => {
          const isBookmarked = bookmarks.includes(sec.id);

          return (
            <article key={sec.id} className="animate-fade-in" style={{ marginBottom: '3.5rem' }}>
              {/* Module Header Card */}
              <div className="glass-card" style={{ padding: '1.75rem', position: 'relative', marginBottom: '1.5rem', borderLeft: '5px solid var(--accent-primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)' }}>{sec.title}</h2>
                    <p style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', marginTop: '0.2rem', fontWeight: 500 }}>{sec.titleUk}</p>
                  </div>

                  <button
                    onClick={() => toggleBookmark(sec.id)}
                    className="btn btn-ghost"
                    style={{ color: isBookmarked ? '#f59e0b' : 'var(--text-muted)' }}
                    title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this module'}
                  >
                    <Bookmark size={20} fill={isBookmarked ? '#f59e0b' : 'none'} />
                  </button>
                </div>

                <p style={{ marginTop: '0.8rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{sec.description}</p>

                {/* Exam Relevance Badges */}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', alignSelf: 'center', fontWeight: 600 }}>Exam Focus:</span>
                  {sec.examFocus.map((f, idx) => (
                    <span key={idx} className="badge badge-indigo">{f}</span>
                  ))}
                </div>
              </div>

              {/* WHEN & WHY TO USE THIS STRUCTURE CALLOUT CARD */}
              {sec.whenToUse && (
                <div className="glass-card" style={{
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  borderLeft: '5px solid var(--accent-amber)',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(99, 102, 241, 0.08))'
                }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#fbbf24', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Lightbulb size={20} color="#fbbf24" />
                    {sec.whenToUse.title}
                  </h3>

                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                    {sec.whenToUse.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ marginBottom: '0.4rem' }}>{pt}</li>
                    ))}
                  </ul>

                  {sec.whenToUse.exampleContext && (
                    <div style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: 'var(--accent-cyan)', background: 'var(--bg-primary)', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                      <strong>🎯 Primary CAE Application Context:</strong> {sec.whenToUse.exampleContext}
                    </div>
                  )}
                </div>
              )}

              {/* FORM TRANSFORMATION & TENSE SHIFT ENGINE CARD */}
              {sec.formTransformation && (
                <div className="glass-card" style={{
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  borderLeft: '5px solid var(--accent-cyan)',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.08))'
                }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ArrowRight size={20} color="#06b6d4" />
                    {sec.formTransformation.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    {sec.formTransformation.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {sec.formTransformation.shifts.map((shift, sIdx) => (
                      <div key={sIdx} style={{
                        background: 'var(--bg-primary)',
                        padding: '0.85rem 1.1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.4rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
                          <span style={{ color: 'var(--accent-rose)', textDecoration: 'line-through', opacity: 0.85 }}>{shift.original}</span>
                          <ArrowRight size={16} color="#06b6d4" style={{ flexShrink: 0 }} />
                          <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>{shift.transformed}</span>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                          💡 <strong>Rule:</strong> {shift.rule}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Signal Words */}
              {sec.signalWords && sec.signalWords.length > 0 && (
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Tag size={16} color="#06b6d4" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>Signal Words & Triggers:</span>
                  {sec.signalWords.map((word, i) => (
                    <span key={i} className="badge badge-cyan" style={{ textTransform: 'none', fontSize: '0.78rem' }}>{word}</span>
                  ))}
                </div>
              )}

              {/* Rules & Explanations */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {sec.keyRules.map((rule, index) => (
                  <div key={index} className="glass-card" style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Lightbulb size={18} color="#f59e0b" />
                      {rule.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{rule.text}</p>
                    {rule.example && (
                      <div style={{
                        marginTop: '0.65rem',
                        padding: '0.65rem 1rem',
                        background: 'var(--bg-primary)',
                        borderRadius: 'var(--radius-sm)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.88rem',
                        color: 'var(--accent-emerald)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <span>{rule.example}</span>
                        <button
                          onClick={() => handleCopy(rule.example!)}
                          className="btn btn-ghost"
                          style={{ padding: '0.2rem 0.4rem' }}
                          title="Copy example"
                        >
                          {copiedText === rule.example ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Structured Comparison Tables */}
              {sec.tables && sec.tables.map((table, tIndex) => (
                <div key={tIndex} style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Info size={18} />
                    {table.title}
                  </h4>
                  <div className="custom-table-container">
                    <table className="custom-table">
                      <thead>
                        <tr>
                          {table.headers.map((h, hIdx) => (
                            <th key={hIdx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {/* Traps & Pitfalls */}
              {sec.traps && sec.traps.length > 0 && (
                <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                  <h4 style={{ color: 'var(--accent-rose)', fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertTriangle size={18} />
                    CAE Exam Traps & Pitfalls to Avoid
                  </h4>
                  {sec.traps.map((trap, trIdx) => (
                    <div key={trIdx} className="alert-box alert-important" style={{ flexDirection: 'column', gap: '0.4rem' }}>
                      <strong>{trap.title}</strong>
                      <p style={{ fontSize: '0.9rem' }}>{trap.text}</p>
                      {trap.correct && (
                        <div style={{ marginTop: '0.4rem', fontSize: '0.88rem' }}>
                          <span style={{ color: '#34d399', fontWeight: 600 }}>✅ Correct:</span> {trap.correct}
                        </div>
                      )}
                      {trap.incorrect && (
                        <div style={{ fontSize: '0.88rem' }}>
                          <span style={{ color: '#f87171', fontWeight: 600 }}>❌ Incorrect:</span> {trap.incorrect}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Practice Shortcut & Duolingo Section Quiz */}
              <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(6, 182, 212, 0.12))' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-main)' }}>Revise {sec.title} with a Section Mini-Test</h4>
                    {completedSections.includes(sec.id) && (
                      <span className="badge badge-emerald"><Star size={12} fill="#34d399" /> Passed</span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Take the 3-question revision quiz for this section to test your knowledge and earn +50 XP on the Duolingo Path.
                  </p>
                </div>
                
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  {SECTION_QUIZZES[sec.id] && (
                    <button className="btn btn-primary" onClick={() => onOpenSectionQuiz(sec.id)}>
                      <Play size={16} />
                      <span>{completedSections.includes(sec.id) ? 'Retake Section Quiz' : 'Take Section Test (+50 XP)'}</span>
                    </button>
                  )}
                  <button className="btn btn-secondary" onClick={() => setActiveView('transformations')}>
                    <span>Part 4 Practice</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          );
        })
      )}
    </div>
  );
};
