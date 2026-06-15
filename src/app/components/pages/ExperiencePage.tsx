import { motion } from 'motion/react';
import type { PageProps } from '../../types';

const experiences = [
  {
    role: 'Full Stack Contributor',
    company: 'Path Shala — Learning Management System',
    period: '2025',
    location: 'Remote',
    desc: 'Built multi-role backend workflows for Admin, Instructor, and Student users with JWT authentication, role-based access control, REST APIs, search, filtering, pagination, and Cloudinary media uploads.',
    highlights: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
    current: true,
  },
  {
    role: 'Full Stack Developer',
    company: 'Expense Tracker — Finance Dashboard',
    period: '2026',
    location: 'Remote',
    desc: 'Developed a finance tracker with Better Auth sessions, Prisma ORM on PostgreSQL, RESTful APIs, Zod validation, TanStack Query data flows, Zustand state, and a responsive dashboard UI.',
    highlights: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zustand'],
    current: false,
  },
  {
    role: 'Backend Developer',
    company: 'AI Quiz App — Adaptive Assessment Platform',
    period: '2025',
    location: 'Remote',
    desc: 'Integrated Google Gemini API for dynamic quiz generation and built backend services for attempt tracking, result evaluation, optimized MongoDB schemas, and scalable APIs.',
    highlights: ['Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
    current: false,
  },
];

export function ExperiencePage({ tokens }: PageProps) {
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
          Experience
        </h2>
        <p style={{ fontSize: '13.5px', color: textMuted }}>
          Project roles and development experience from my resume.
        </p>
      </div>

      <div className="relative">
        <div
          className="absolute left-[6px] top-4 bottom-4 w-px"
          style={{ backgroundColor: border }}
        />
        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5"
            >
              {/* Timeline dot */}
              <div className="relative shrink-0 mt-2.5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: exp.current ? accent : 'transparent',
                    border: `2px solid ${exp.current ? accent : border}`,
                    boxShadow: exp.current ? `0 0 10px ${accent}50` : 'none',
                  }}
                />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -2 }}
                className="flex-1 rounded-2xl p-5"
                style={{
                  backgroundColor: card2,
                  border: `1px solid ${exp.current ? `${accent}28` : border}`,
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3
                      style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: textPrimary,
                        marginBottom: '3px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: '13.5px', color: accent, fontWeight: 500 }}>
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    {exp.current && (
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold inline-flex items-center gap-1 mb-1"
                        style={{ backgroundColor: accentBg, color: accent }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Current
                      </span>
                    )}
                    <div
                      style={{
                        fontSize: '11.5px',
                        fontFamily: "'JetBrains Mono', monospace",
                        color: textMuted,
                        marginBottom: '2px',
                      }}
                    >
                      {exp.period}
                    </div>
                    <div style={{ fontSize: '11px', color: textMuted }}>{exp.location}</div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    color: textMuted,
                    lineHeight: '1.68',
                    marginBottom: '12px',
                  }}
                >
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.highlights.map(h => (
                    <span
                      key={h}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium"
                      style={{ backgroundColor: border, color: textSecondary }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
