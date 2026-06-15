import { motion } from 'motion/react';
import type { PageProps } from '../../types';

const skillGroups = [
  {
    category: 'Frontend',
    emoji: 'UI',
    skills: ['Next.js', 'React.js', 'Tailwind CSS', 'Shadcn UI', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    emoji: 'API',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Better Auth'],
  },
  {
    category: 'Database',
    emoji: 'DB',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma ORM'],
  },
  {
    category: 'State & Validation',
    emoji: 'SV',
    skills: ['Zustand', 'TanStack Query', 'Zod'],
  },
  {
    category: 'Tools & DevOps',
    emoji: 'DV',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Cloudinary'],
  },
  {
    category: 'Languages & Core CS',
    emoji: 'CS',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'Data Structures & Algorithms'],
  },
];

const proficiency = [
  { skill: 'React / Next.js', level: 90 },
  { skill: 'Node.js / Express', level: 86 },
  { skill: 'MongoDB', level: 84 },
  { skill: 'PostgreSQL / Prisma', level: 78 },
  { skill: 'TypeScript', level: 82 },
  { skill: 'JavaScript', level: 88 },
  { skill: 'Java / Python', level: 72 },
  { skill: 'DSA', level: 76 },
];

export function SkillsPage({ tokens }: PageProps) {
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
          Skills
        </h2>
        <p style={{ fontSize: '13.5px', color: textMuted }}>
          Technologies and tools I work with.
        </p>
      </div>

      <div className="grid grid-cols-[1fr,220px] gap-8">
        {/* Skill groups */}
        <div className="space-y-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="p-5 rounded-2xl"
              style={{ backgroundColor: card2, border: `1px solid ${border}` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span style={{ fontSize: '15px' }}>{group.emoji}</span>
                <h3 style={{ fontSize: '13.5px', fontWeight: 600, color: textPrimary }}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.04 }}
                    className="px-3 py-1.5 rounded-xl text-[12px] font-medium cursor-default select-none"
                    style={{ backgroundColor: border, color: textSecondary }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div>
          <h3
            className="mb-5"
            style={{ fontSize: '13.5px', fontWeight: 600, color: textPrimary }}
          >
            Proficiency
          </h3>
          <div className="space-y-4">
            {proficiency.map((p, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <span style={{ fontSize: '12px', color: textSecondary }}>{p.skill}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: "'JetBrains Mono', monospace",
                      color: textMuted,
                    }}
                  >
                    {p.level}%
                  </span>
                </div>
                <div
                  className="h-1 rounded-full overflow-hidden"
                  style={{ backgroundColor: border }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${p.level}%` }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
