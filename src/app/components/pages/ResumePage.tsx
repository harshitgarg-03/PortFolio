import { Download, GraduationCap, Award, Code2 } from "lucide-react";
import { motion } from "motion/react";
import type { PageProps } from "../../types";

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering (AI/ML)",
    institution: "Accurate Institute of Management & Technology, Greater Noida",
    period: "2023 – 2027",
    location: "Greater Noida, India",
    desc: "Coursework and project work focused on full-stack development, AI/ML foundations, software engineering, data structures, algorithms, databases, and modern web systems.",
    grade: "CGPA: 7.5",
  },
];

const skillRows = [
  {
    name: "Frontend",
    items: "Next.js, React.js, Tailwind CSS, Shadcn UI, HTML5, CSS3",
  },
  { name: "Backend", items: "Node.js, Express.js, REST APIs" },
  { name: "Databases", items: "MongoDB, PostgreSQL, Prisma ORM" },
  { name: "State & Validation", items: "Zustand, TanStack Query, Zod" },
  { name: "Languages", items: "TypeScript, JavaScript, Java, Python" },
  { name: "Tools & DevOps", items: "Git, GitHub, Docker, Vercel, Cloudinary" },
  { name: "Core CS", items: "Data Structures & Algorithms" },
];

const achievements = [
  {
    name: "Hackathon Leadership (SIH)",
    issuer:
      "Led a cross-functional Smart India Hackathon team and delivered functional prototypes under time constraints.",
    year: "SIH",
  },
  {
    name: "Open Source Engagement",
    issuer:
      "Contribute to and review repositories on GitHub to study architecture patterns and software design practices.",
    year: "GitHub",
  },
  {
    name: "Continuous Learning",
    issuer:
      "Track full-stack and AI ecosystem trends, integrating tools like TanStack, Better Auth, and Prisma into projects.",
    year: "Active",
  },
];

export function ResumePage({ tokens }: PageProps) {
  const {
    textPrimary,
    textSecondary,
    textMuted,
    card2,
    border,
    accent,
    accentBg,
  } = tokens;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: textPrimary,
              letterSpacing: "-0.02em",
              marginBottom: "5px",
            }}
          >
            Resume
          </h2>
          <p style={{ fontSize: "13.5px", color: textMuted }}>
            Education, technical skills, and resume highlights.
          </p>
        </div>
        <motion.button
          whileHover={{ y: -1, scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-4 py-2.5 mt-8 rounded-xl font-medium transition-all"
          style={{
            backgroundColor: accent,
            color: "#121212",
            border: "none",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          <a
            href="https://drive.google.com/file/d/1pe-vqZnqubiyf80cCMNZvCtd1E9CQn2p/view?usp=sharing"
            target="_blank"
          >
          Download CV
          </a>
          
        </motion.button>
      </div>

      {/* Education */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-4 h-4" style={{ color: accent }} />
          <h3
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: textPrimary,
              letterSpacing: "-0.01em",
            }}
          >
            Education
          </h3>
        </div>

        <div className="relative">
          <div
            className="absolute left-[6px] top-4 bottom-4 w-px"
            style={{ backgroundColor: border }}
          />
          <div className="space-y-5">
            {education.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="relative shrink-0 mt-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: accent,
                      boxShadow: `0 0 8px ${accent}50`,
                    }}
                  />
                </div>
                <div
                  className="flex-1 rounded-2xl p-5"
                  style={{
                    backgroundColor: card2,
                    border: `1px solid ${border}`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4
                        style={{
                          fontSize: "14.5px",
                          fontWeight: 600,
                          color: textPrimary,
                          marginBottom: "3px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {e.degree}
                      </h4>
                      <div
                        style={{
                          fontSize: "13px",
                          color: accent,
                          fontWeight: 500,
                        }}
                      >
                        {e.institution}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div
                        style={{
                          fontSize: "11.5px",
                          fontFamily: "'JetBrains Mono', monospace",
                          color: textMuted,
                          marginBottom: "2px",
                        }}
                      >
                        {e.period}
                      </div>
                      <div style={{ fontSize: "11px", color: textMuted }}>
                        {e.location}
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: textMuted,
                      lineHeight: "1.65",
                      marginBottom: "10px",
                    }}
                  >
                    {e.desc}
                  </p>
                  <span
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium"
                    style={{ backgroundColor: accentBg, color: accent }}
                  >
                    {e.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-4 h-4" style={{ color: accent }} />
          <h3
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: textPrimary,
              letterSpacing: "-0.01em",
            }}
          >
            Technical Skills
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {skillRows.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-xl"
              style={{ backgroundColor: card2, border: `1px solid ${border}` }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: textPrimary,
                  marginBottom: "7px",
                }}
              >
                {c.name}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: textMuted,
                  lineHeight: "1.55",
                }}
              >
                {c.items}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center gap-2 mb-6">
          <Code2 className="w-4 h-4" style={{ color: accent }} />
          <h3
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: textPrimary,
              letterSpacing: "-0.01em",
            }}
          >
            Achievements & Activities
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {achievements.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-xl"
              style={{ backgroundColor: card2, border: `1px solid ${border}` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: textPrimary,
                      marginBottom: "5px",
                    }}
                  >
                    {c.name}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: textMuted,
                      lineHeight: "1.55",
                    }}
                  >
                    {c.issuer}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    color: accent,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {c.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
