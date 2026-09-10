import React, { useState } from 'react';
import { Split, ArrowRightLeft, Check, AlertCircle } from 'lucide-react';

interface ComparisonItem {
  id: string;
  title: string;
  category: string;
  optionA: { name: string; meaning: string; example: string };
  optionB: { name: string; meaning: string; example: string };
  examTip: string;
}

const COMPARISON_DATA: ComparisonItem[] = [
  {
    id: "comp-1",
    title: "Needn't have V3 vs Didn't need to",
    category: "Modals (Past)",
    optionA: {
      name: "needn't have + V3",
      meaning: "Зробив дію у минулому, яка згодом виявилася непотрібною (марно витрачений час/зусилля).",
      example: "I needn't have brought an umbrella — it didn't rain at all."
    },
    optionB: {
      name: "didn't need to + inf",
      meaning: "Не було необхідності щось робити у минулому, тому людина (зазвичай) цього НЕ робила.",
      example: "I didn't need to buy tickets because Mark already had free passes."
    },
    examTip: "У Part 4 трансформаціях шукайте контекст: якщо людина вже щось зробила і про це пошкодувала/усвідомила марність — обирайте 'needn't have V3'."
  },
  {
    id: "comp-2",
    title: "Remember doing vs Remember to do",
    category: "Gerunds & Infinitives",
    optionA: {
      name: "remember + -ing (Gerund)",
      meaning: "Пам'ятати про дію, яка ВЖЕ відбулася у минулому (спогад про дію).",
      example: "I remember locking the front door before leaving this morning."
    },
    optionB: {
      name: "remember + to-infinitive",
      meaning: "Пам'ятати зробити щось у майбутньому / не забути виконати доручення.",
      example: "Remember to lock the door when you leave!"
    },
    examTip: "Пастка CAE: remember/forget + -ing стосується МИНУЛОГО досвіду, тоді як + to-infinitive стосується ОБОВ'ЯЗКУ в майбутньому."
  },
  {
    id: "comp-3",
    title: "Must vs Have to",
    category: "Modals (Obligation)",
    optionA: {
      name: "Must",
      meaning: "Суб'єктивний обов'язок, що виходить від самого мовця (особисте відчуття/переконання).",
      example: "I must visit grandma this weekend; I really miss her."
    },
    optionB: {
      name: "Have to",
      meaning: "Об'єктивний обов'язок, що накладається ззовні (закон, правило компанії, домовленість).",
      example: "I have to wear a security badge at work every day."
    },
    examTip: "У минулому часі для ОБЕДВОХ виразів використовується ТІЛЬКИ 'had to'!"
  },
  {
    id: "comp-4",
    title: "Used to vs Would",
    category: "Past Habits",
    optionA: {
      name: "used to + inf",
      meaning: "Минула звичка АБО минулий СТАН (stative verbs: reside, have, like), яких більше немає.",
      example: "I used to live in Berlin. I used to hate spinach."
    },
    optionB: {
      name: "would + inf",
      meaning: "Минула повторювана ДІЯ (repeated action). НІКОЛИ не вживається зі станами!",
      example: "Every summer, we would swim in the lake for hours."
    },
    examTip: "Якщо в реченні є дієслово стану (be, live, own, have, like), 'would' використовувати ЗАБОРОНЕНО — вживайте 'used to'."
  }
];

export const ComparisonTool: React.FC = () => {
  const [selectedId, setSelectedId] = useState(COMPARISON_DATA[0].id);

  const selected = COMPARISON_DATA.find(c => c.id === selectedId) || COMPARISON_DATA[0];

  return (
    <div style={{ padding: '2rem 2.5rem', maxWidth: '900px', margin: '0 auto' }}>
      {/* Banner */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', borderLeft: '5px solid var(--accent-rose)' }}>
        <h2 style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Split color="#f43f5e" />
          CAE Contrast Rule Comparer
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.3rem' }}>
          Side-by-side breakdown of the most frequently tested contrast structures in the C1 exam.
        </p>
      </div>

      {/* Selector Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {COMPARISON_DATA.map(item => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`btn ${selectedId === item.id ? 'btn-primary' : 'btn-secondary'}`}
            style={{ fontSize: '0.85rem' }}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Active Comparison Display */}
      <div className="glass-card animate-fade-in" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>{selected.title}</h3>
          <span className="badge badge-amber">{selected.category}</span>
        </div>

        {/* 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {/* Option A */}
          <div style={{
            background: 'var(--bg-primary)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            borderTop: '4px solid var(--accent-primary)'
          }}>
            <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              {selected.optionA.name}
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              {selected.optionA.meaning}
            </p>
            <div style={{ fontSize: '0.88rem', color: 'var(--accent-emerald)', fontStyle: 'italic', background: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem 0.75rem', borderRadius: '4px' }}>
              "{selected.optionA.example}"
            </div>
          </div>

          {/* Option B */}
          <div style={{
            background: 'var(--bg-primary)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            borderTop: '4px solid var(--accent-cyan)'
          }}>
            <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              {selected.optionB.name}
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              {selected.optionB.meaning}
            </p>
            <div style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontStyle: 'italic', background: 'rgba(6, 182, 212, 0.08)', padding: '0.5rem 0.75rem', borderRadius: '4px' }}>
              "{selected.optionB.example}"
            </div>
          </div>
        </div>

        {/* CAE Exam Tip Alert */}
        <div className="alert-box alert-warning" style={{ fontSize: '0.9rem' }}>
          <AlertCircle size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
          <div>
            <strong>CAE Exam Strategy Tip:</strong> {selected.examTip}
          </div>
        </div>
      </div>
    </div>
  );
};
