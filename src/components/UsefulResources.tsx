import React from 'react';
import { C1_RESOURCES, UsefulResource } from '../data/resourcesData';
import { ExternalLink, BookOpen, Globe, Award, Sparkles } from 'lucide-react';

export const UsefulResources: React.FC = () => {
  return (
    <div style={{ padding: '2rem 2.5rem', maxWidth: '950px', margin: '0 auto' }}>
      {/* Banner */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', borderLeft: '5px solid var(--accent-violet)' }}>
        <h2 style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <ExternalLink color="#8b5cf6" />
          Curated C1 Useful Resources & Tools
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.3rem' }}>
          Hand-picked official Cambridge materials, practice platforms, automated writing evaluators, and authentic reading outlets.
        </p>
      </div>

      {/* Resource Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {C1_RESOURCES.map((res) => (
          <div key={res.id} className="glass-card animate-fade-in" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span className="badge badge-indigo">{res.category}</span>
                <span className="badge badge-amber">{res.badgeText}</span>
              </div>

              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                {res.title}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.5' }}>
                {res.description}
              </p>

              <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', background: 'var(--bg-primary)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem' }}>
                <strong>Recommended for:</strong> {res.recommendedFor}
              </div>
            </div>

            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', textDecoration: 'none', fontSize: '0.85rem' }}
            >
              <span>Visit Resource</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
