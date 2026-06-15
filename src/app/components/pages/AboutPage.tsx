import { Star, Folder, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import type { PageProps } from '../../types';
import { projects } from '../../data/projects';
import { ProjectPreview } from '../ProjectPreview';

function SectionHeader({
  title,
  icon,
  tokens,
}: {
  title: string;
  icon?: React.ReactNode;
  tokens: PageProps['tokens'];
}) {
  const { textPrimary, accent } = tokens;
  return (
    <div>
      <div className="flex items-center gap-[10px] mb-[13px]">
        {icon}
        <h2
          style={{
            fontSize: icon ? '25px' : '32px',
            fontWeight: 700,
            color: textPrimary,
            letterSpacing: '-0.02em',
            lineHeight: 1.18,
          }}
        >
          {title}
        </h2>
      </div>
      <div
        className="h-[5px] w-[69px] rounded-full"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}

export function AboutPage({ tokens }: PageProps) {
  const { textPrimary, textSecondary, textMuted, card2, border, accent } = tokens;

  const stats = [
    { value: '10+', label: 'PROJECTS BUILT' },
    { value: '12+', label: 'CORE TECH STACKS' },
    { value: '2', label: 'HACKATHON LED' },
  ];

  const portfolios = projects.slice(0, 2);

  return (
    <div className="space-y-[48px]">
      {/* Digital Identity */}
      <section>
        <SectionHeader title="Digital Identity" tokens={tokens} />
        <div className="mt-[23px] space-y-[17px] max-w-[830px]">
          <p style={{ color: textSecondary, fontSize: '15.8px', lineHeight: '1.5' }}>
            I'm Harshit Garg, a Full Stack Developer and MERN Stack Developer based in Noida,
            Uttar Pradesh, India. I build responsive web applications, REST APIs, and scalable
            product experiences using React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.
          </p>
          <p style={{ color: textSecondary, fontSize: '15.8px', lineHeight: '1.5' }}>
            I'm pursuing a B.Tech in Computer Science and Engineering with AI/ML at Accurate
            Institute of Management & Technology. My work includes learning management systems,
            finance dashboards, URL shorteners, AI quiz platforms, and API-driven web apps.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section>
        <SectionHeader
          title="Highlights & Successes"
          icon={<Star className="w-[22px] h-[22px]" style={{ color: textPrimary }} />}
          tokens={tokens}
        />
        <div className="mt-[32px] grid grid-cols-3 gap-[62px] max-w-[760px]">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="cursor-default select-none"
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '31px',
                  fontWeight: 700,
                  color: textPrimary,
                  lineHeight: 1,
                  marginBottom: '17px',
                  letterSpacing: '-0.03em',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: '10px',
                  letterSpacing: '0',
                  textTransform: 'uppercase',
                  color: textSecondary,
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Portfolios */}
      <section>
        <SectionHeader
          title="Featured Portfolios"
          icon={<Folder className="w-[22px] h-[22px]" style={{ color: textPrimary }} />}
          tokens={tokens}
        />
        <p className="mt-[4px] mb-[23px] ml-[8px]" style={{ fontSize: '15.5px', color: textSecondary }}>
          A glimpse into my professional journey.
        </p>
        <div className="grid grid-cols-2 gap-[30px]">
          {portfolios.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="group rounded-[10px] overflow-hidden cursor-pointer"
              style={{
                backgroundColor: card2,
                border: 'none',
              }}
            >
              {/* Image */}
              <div className="relative aspect-[2.16/1] overflow-hidden" style={{ backgroundColor: border }}>
                <ProjectPreview project={p} height={186} zoom={0.22} showChrome={false} />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                >
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.12)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                    <span className="text-white text-xs font-medium">Visit site</span>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="px-[24px] py-[23px]">
                <div
                  style={{
                    fontSize: '16px',
                    color: textMuted,
                    marginBottom: '4px',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.02em',
                  }}
                >
                  {p.url}
                </div>
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: textPrimary,
                    marginBottom: '5px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {p.shortTitle}
                </h3>
                <p style={{ fontSize: '12.5px', color: textMuted, lineHeight: '1.6' }}>
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
