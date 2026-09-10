import React, { useState } from 'react';
import { WRITING_FORMATS, WRITING_CRITERIA, MASTER_REGISTER_MATRIX, WritingFormat } from '../data/writingData';
import { BookOpen, Check, Copy, AlertTriangle, Lightbulb, PenTool, Sparkles, FileText, Info, Award, Sliders, CheckCircle } from 'lucide-react';

export const WritingGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('essay');
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null);

  // Drafting Tool State
  const [draftText, setDraftText] = useState<string>('');

  const wordCount = draftText.trim() === '' ? 0 : draftText.trim().split(/\s+/).length;
  const isWordCountOptimal = wordCount >= 220 && wordCount <= 260;

  const handleCopyPhrase = (phrase: string) => {
    navigator.clipboard.writeText(phrase);
    setCopiedPhrase(phrase);
    setTimeout(() => setCopiedPhrase(null), 2000);
  };

  const selectedFormat = WRITING_FORMATS.find(f => f.id === activeTab) || WRITING_FORMATS[0];

  return (
    <div style={{ padding: '2rem 2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Top Banner */}
      <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '2rem', borderLeft: '5px solid var(--accent-violet)', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(6, 182, 212, 0.12))' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-indigo" style={{ marginBottom: '0.4rem' }}>CAE Paper 2</span>
            <h2 style={{ fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <PenTool color="#8b5cf6" />
              CAE C1 Writing Master Guide
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
              Complete preparation guide for Part 1 (Essay) & Part 2 (Letter/Email, Report, Review, Proposal, Article) with register rules, structures, useful phrases, and live word counter.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge badge-amber">Duration: 1h 30m</span>
            <span className="badge badge-cyan">220–260 words per text</span>
            <span className="badge badge-emerald">20% of total score</span>
          </div>
        </div>
      </div>

      {/* 4 Scoring Criteria Cards */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-cyan)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Award size={18} />
          4 Official Assessment Criteria (0–5 Marks Each = 20 Marks Max)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {WRITING_CRITERIA.map((crit, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <strong style={{ color: 'var(--text-main)', fontSize: '1rem' }}>{crit.name}</strong>
                <span className="badge badge-indigo">Max {crit.maxScore} pts</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{crit.description}</p>
              <ul style={{ paddingLeft: '1.1rem', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                {crit.focusPoints.map((fp, fIdx) => (
                  <li key={fIdx} style={{ marginBottom: '0.2rem' }}>{fp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Format Switcher Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.75rem' }}>
        <button
          onClick={() => setActiveTab('essay')}
          className={`btn ${activeTab === 'essay' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
        >
          📝 Part 1: Essay
        </button>

        <button
          onClick={() => setActiveTab('formal_letter')}
          className={`btn ${activeTab === 'formal_letter' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
        >
          ✉️ Letter / Email
        </button>

        <button
          onClick={() => setActiveTab('report')}
          className={`btn ${activeTab === 'report' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
        >
          📊 Report
        </button>

        <button
          onClick={() => setActiveTab('review')}
          className={`btn ${activeTab === 'review' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
        >
          🌟 Review
        </button>

        <button
          onClick={() => setActiveTab('proposal')}
          className={`btn ${activeTab === 'proposal' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
        >
          💡 Proposal
        </button>

        <button
          onClick={() => setActiveTab('matrix')}
          className={`btn ${activeTab === 'matrix' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
        >
          ⚖️ Register Matrix
        </button>

        <button
          onClick={() => setActiveTab('counter')}
          className={`btn ${activeTab === 'counter' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
        >
          ✍️ Word Counter Tool
        </button>
      </div>

      {/* View 1: Register Matrix */}
      {activeTab === 'matrix' && (
        <div className="animate-fade-in">
          <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Master Register & Style Matrix (7 Formats Compared)
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              The single biggest loss of marks in Communicative Achievement occurs from using the wrong register or format (e.g. writing a Report like an Essay, or using informal slang in a Proposal).
            </p>

            <div className="custom-table-container" style={{ marginTop: '1rem' }}>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Text Format</th>
                    <th>Register</th>
                    <th>Personal View ("I think")</th>
                    <th>Headings & Layout</th>
                    <th>Tone</th>
                  </tr>
                </thead>
                <tbody>
                  {MASTER_REGISTER_MATRIX.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>{row.textType}</td>
                      <td>{row.register}</td>
                      <td>{row.personalView}</td>
                      <td style={{ color: row.headings.includes('MANDATORY') ? 'var(--accent-amber)' : 'inherit' }}>{row.headings}</td>
                      <td>{row.tone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* View 2: Word Counter & Drafting Tool */}
      {activeTab === 'counter' && (
        <div className="animate-fade-in">
          <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '1.5rem', borderLeft: '5px solid var(--accent-emerald)' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText color="#10b981" />
              Live CAE 220–260 Word Count & Outline Tool
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Paste or draft your essay, report, proposal, or review below to measure word count accuracy against Cambridge standards.
            </p>

            <textarea
              rows={10}
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              placeholder="Type or paste your draft paragraph here..."
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                outline: 'none'
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className={`badge ${wordCount === 0 ? 'badge-indigo' : (isWordCountOptimal ? 'badge-emerald' : 'badge-amber')}`} style={{ fontSize: '0.9rem', padding: '0.4rem 0.8rem' }}>
                  Word Count: {wordCount} words
                </span>
                {wordCount > 0 && (
                  <span style={{ fontSize: '0.85rem', color: isWordCountOptimal ? 'var(--accent-emerald)' : 'var(--accent-amber)', fontWeight: 600 }}>
                    {isWordCountOptimal ? '✓ Optimal C1 Word Count (220–260 words)' : (wordCount < 220 ? '⚠️ Under minimum (Aim for 220-260 words)' : '⚠️ Over maximum (Keep concise, avoid fluff)')}
                  </span>
                )}
              </div>

              <button className="btn btn-ghost" onClick={() => setDraftText('')} style={{ fontSize: '0.82rem' }}>
                Clear Text
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View 3: Selected Writing Format Breakdown */}
      {activeTab !== 'matrix' && activeTab !== 'counter' && selectedFormat && (
        <div className="animate-fade-in">
          {/* Format Summary Card */}
          <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '1.5rem', borderLeft: '5px solid var(--accent-primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>{selectedFormat.title}</h3>
              <span className="badge badge-indigo">{selectedFormat.part}</span>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              {selectedFormat.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', background: 'var(--bg-primary)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
              <div><strong>Register:</strong> <span style={{ color: 'var(--accent-cyan)' }}>{selectedFormat.register}</span></div>
              <div><strong>Audience:</strong> <span style={{ color: 'var(--accent-emerald)' }}>{selectedFormat.audience}</span></div>
              <div><strong>Word Count:</strong> <span style={{ color: 'var(--accent-amber)' }}>{selectedFormat.wordCount}</span></div>
            </div>
          </div>

          {/* PROMINENT BAND 9 MODEL ANSWER & PARAGRAPH BREAKDOWN SECTION */}
          {selectedFormat.modelExample && (
            <div style={{ marginBottom: '2rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.25rem', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(16, 185, 129, 0.1))', borderLeft: '5px solid #fbbf24' }}>
                <h4 style={{ fontSize: '1.35rem', color: '#fbbf24', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={22} color="#fbbf24" />
                  Band 9 C1 Model Answer & Paragraph Breakdown
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Real Cambridge C1 exam prompt with an exemplar 220–260 word Band 9 answer and paragraph-by-paragraph rationale analysis.
                </p>
              </div>

              {/* Prompt / Theme Box */}
              <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '1.25rem', borderLeft: '4px solid var(--accent-amber)', background: 'rgba(245, 158, 11, 0.06)' }}>
                <span className="badge badge-amber" style={{ marginBottom: '0.4rem' }}>Exam Prompt / Theme</span>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: '1.5' }}>
                  "{selectedFormat.modelExample.promptTheme}"
                </p>
              </div>

              {/* Full Model Answer */}
              <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-emerald)', background: 'var(--bg-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-emerald">Full C1 Model Answer (220–260 words)</span>
                  <button className="btn btn-ghost" onClick={() => handleCopyPhrase(selectedFormat.modelExample!.fullModelAnswer)} style={{ fontSize: '0.8rem' }}>
                    <Copy size={14} /> Copy Full Text
                  </button>
                </div>
                <div style={{ whiteSpace: 'pre-line', fontSize: '0.93rem', lineHeight: '1.7', color: 'var(--text-main)', fontFamily: 'var(--font-sans)' }}>
                  {selectedFormat.modelExample.fullModelAnswer}
                </div>
              </div>

              {/* Paragraph-by-Paragraph Breakdown */}
              <h5 style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Info size={18} />
                Paragraph-by-Paragraph Analysis & Examiner Rationale:
              </h5>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
                {selectedFormat.modelExample.paragraphBreakdown.map((para, pIdx) => (
                  <div key={pIdx} className="glass-card" style={{ padding: '1.25rem', borderLeft: '4px solid var(--accent-primary)' }}>
                    <h6 style={{ fontSize: '0.98rem', color: 'var(--accent-primary)', marginBottom: '0.4rem', fontWeight: 700 }}>
                      {para.paragraphTitle}
                    </h6>

                    {/* Excerpt text */}
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic', background: 'var(--bg-primary)', padding: '0.6rem 0.85rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.65rem' }}>
                      "{para.modelText}"
                    </div>

                    {/* Rationale explanation */}
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '0.5rem', lineHeight: '1.5' }}>
                      💡 <strong>Rationale:</strong> {para.explanation}
                    </p>

                    {/* C1 Features Badges */}
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
                      {para.c1Features.map((feat, fIdx) => (
                        <span key={fIdx} className="badge badge-emerald" style={{ textTransform: 'none', fontSize: '0.75rem' }}>
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Examiner Score Notes */}
              <div className="alert-box alert-tip" style={{ fontSize: '0.88rem' }}>
                <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0 }} />
                <div>
                  <strong>Official Examiner Score Rationale:</strong> {selectedFormat.modelExample.examinerScoreNotes}
                </div>
              </div>
            </div>
          )}

          {/* Structure Breakdown Table */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Info size={18} />
              Recommended Paragraph Structure
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedFormat.structure.map((struct, sIdx) => (
                <div key={sIdx} className="glass-card" style={{ padding: '1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="badge badge-amber" style={{ minWidth: '140px', justifyContent: 'center' }}>{struct.paragraph}</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', margin: 0 }}>{struct.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Rules & Constraints */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-emerald)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lightbulb size={18} color="#10b981" />
              Key Rules & Constraints
            </h4>
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                {selectedFormat.keyRules.map((rule, rIdx) => (
                  <li key={rIdx} style={{ marginBottom: '0.4rem' }}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Useful C1 Phrase Bank */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-violet)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="#8b5cf6" />
              Essential C1 Phrases (Click to Copy)
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {selectedFormat.usefulPhrases.map((cat, cIdx) => (
                <div key={cIdx} className="glass-card" style={{ padding: '1.25rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.6rem' }}>
                    {cat.category}
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {cat.phrases.map((phrase, pIdx) => (
                      <div
                        key={pIdx}
                        onClick={() => handleCopyPhrase(phrase)}
                        style={{
                          padding: '0.5rem 0.85rem',
                          background: 'var(--bg-primary)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.88rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-emerald)',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span>"{phrase}"</span>
                        <button className="btn btn-ghost" style={{ padding: '0.2rem 0.4rem' }}>
                          {copiedPhrase === phrase ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--accent-rose)', fontSize: '1.1rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={18} />
              Common Pitfalls to Avoid in {selectedFormat.title}
            </h4>
            <div className="alert-box alert-important" style={{ flexDirection: 'column', gap: '0.4rem' }}>
              {selectedFormat.commonMistakes.map((m, mIdx) => (
                <div key={mIdx} style={{ fontSize: '0.88rem' }}>
                  ❌ <strong>Pitfall {mIdx + 1}:</strong> {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
