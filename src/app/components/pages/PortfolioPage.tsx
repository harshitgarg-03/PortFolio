import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { PageProps } from '../../types';
import { projects } from '../../data/projects';
import { ProjectPreview } from '../ProjectPreview';

export function PortfolioPage({ tokens }: PageProps) {
  const { textPrimary, textSecondary, textMuted, card2, border, accent, accentBg } = tokens;

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
          Project
        </h2>
        <p style={{ fontSize: '13.5px', color: textMuted }}>
          Selected full-stack projects from my resume.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            className="group grid overflow-hidden rounded-2xl cursor-pointer md:grid-cols-[340px,1fr]"
            style={{
              backgroundColor: card2,
              border: `1px solid ${border}`,
            }}
          >
            {/* Thumbnail */}
            <div
               className="overflow-hidden p-3"
               style={{ backgroundColor: border, minHeight: '284px' }}
             >
               <div
                 className="overflow-hidden rounded-xl"
                 style={{
                   backgroundColor: p.previewTone,
                   boxShadow: '0 16px 30px rgba(0,0,0,0.24)',
                 }}
               >
                 <ProjectPreview project={p} height={350} zoom={0.34} viewportWidth={2480} />
               </div>
             </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: accent,
                        fontFamily: "'JetBrains Mono', monospace",
                        marginBottom: '3px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {`${p.url}`}
                    </div>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: textPrimary,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {p.featured && (
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                        style={{ backgroundColor: accentBg, color: accent }}
                      >
                        Featured
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: '11.5px',
                        color: textMuted,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {p.year}
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: accent }}
                    />
                  </div>
                </div>
                <p style={{ fontSize: '13px', color: textMuted, lineHeight: '1.65', marginBottom: '10px' }}>
                  {p.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium"
                    style={{ backgroundColor: border, color: textSecondary }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
