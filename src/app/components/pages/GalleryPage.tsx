import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import type { PageProps } from '../../types';
import { projects } from '../../data/projects';
import { ProjectPreview } from '../ProjectPreview';

export function GalleryPage({ tokens }: PageProps) {
  const { textPrimary, textSecondary, textMuted, card2, border, accent } = tokens;

  return (
    <div>
      <div className="mb-8">
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: textPrimary,
            letterSpacing: '-0.02em',
            marginBottom: '5px',
          }}
        >
          Gallery
        </h2>
        <p style={{ fontSize: '13.5px', color: textMuted }}>
          Live visual previews of my deployed projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.url}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            className={project.featured ? 'overflow-hidden rounded-2xl lg:col-span-2' : 'overflow-hidden rounded-2xl'}
            style={{ backgroundColor: card2, border: `1px solid ${border}` }}
          >
            <ProjectPreview project={project} height={project.featured ? 300 : 220} zoom={project.featured ? 0.33 : 0.26} />
            <div className="flex items-start justify-between gap-4 p-5">
              <div className="min-w-0">
                <div
                  style={{
                    color: accent,
                    fontSize: '11px',
                    fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: '5px',
                  }}
                >
                  {project.url}
                </div>
                <h3 style={{ color: textPrimary, fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>
                  {project.shortTitle}
                </h3>
                <p style={{ color: textSecondary, fontSize: '12.5px', lineHeight: 1.6 }}>
                  {project.desc}
                </p>
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{ color: accent, backgroundColor: `${accent}16`, border: `1px solid ${accent}24` }}
                aria-label={`Open ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
