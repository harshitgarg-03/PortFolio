import { Github, ExternalLink, Code2, Star } from 'lucide-react';
import { motion } from 'motion/react';
import type { PageProps } from '../../types';

const projects = [
  {
    name: 'path-shala-lms',
    desc: 'Learning management system with multi-role access, JWT authentication, REST APIs, Cloudinary uploads, search, filtering, and pagination.',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
    stars: 0,
    lang: 'JavaScript',
    year: '2025',
  },
  {
    name: 'expense-tracker',
    desc: 'Finance dashboard with Better Auth sessions, Prisma ORM, PostgreSQL, TanStack Query, Zustand, Zod validation, and responsive UI.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    stars: 0,
    lang: 'TypeScript',
    year: '2026',
  },
  {
    name: 'shortit-url-shortener',
    desc: 'URL shortener with JWT authentication, HTTP-only cookies, Vercel deployment, personalized dashboard, link tracking, and analytics.',
    tags: ['Node.js', 'Express.js', 'MongoDB'],
    stars: 0,
    lang: 'JavaScript',
    year: '2025',
  },
  {
    name: 'ai-quiz-app',
    desc: 'Adaptive assessment backend using Gemini API for dynamic quiz generation, attempt tracking, result evaluation, and scalable APIs.',
    tags: ['Node.js', 'Express.js', 'Gemini API'],
    stars: 0,
    lang: 'JavaScript',
    year: '2025',
  },
  {
    name: 'recipe-finder-app',
    desc: 'Recipe discovery app with async REST API integration, real-time search and filtering, responsive layouts, and cross-device compatibility.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    stars: 0,
    lang: 'JavaScript',
    year: '2025',
  },
];

const langColors: Record<string, string> = {
  Python: '#3572A5',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
};

export function ProjectsPage({ tokens }: PageProps) {
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
          Open Source & Projects
        </h2>
        <p style={{ fontSize: '13.5px', color: textMuted }}>
          Projects from my resume and portfolio.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -3 }}
            className="group flex flex-col gap-3 p-5 rounded-2xl cursor-pointer"
            style={{
              backgroundColor: card2,
              border: `1px solid ${border}`,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 shrink-0" style={{ color: accent }} />
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: textPrimary,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {p.name}
                </span>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <a
                  href="#"
                  onClick={e => e.preventDefault()}
                  title="GitHub"
                  className="transition-colors"
                  style={{ color: textMuted }}
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  onClick={e => e.preventDefault()}
                  title="Live"
                  className="transition-colors"
                  style={{ color: textMuted }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '12.5px',
                color: textMuted,
                lineHeight: '1.62',
                flex: 1,
              }}
            >
              {p.desc}
            </p>

            {/* Footer */}
            <div>
              <div className="flex flex-wrap gap-1 mb-3">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10.5px] font-medium"
                    style={{ backgroundColor: border, color: textSecondary }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: langColors[p.lang] ?? '#888' }}
                  />
                  <span style={{ fontSize: '11px', color: textMuted }}>{p.lang}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" style={{ color: '#F59E0B' }} />
                  <span
                    style={{
                      fontSize: '11px',
                      color: textMuted,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {p.stars}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
