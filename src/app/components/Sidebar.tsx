import { Mail, MapPin, Linkedin, Instagram, Facebook, Github, FileText, MailIcon, TwitterIcon } from 'lucide-react';
import type { Tokens } from '../types';
import userIMg from '../../imports/img.png'


const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface SidebarProps {
  tokens: Tokens;
}

export function Sidebar({ tokens }: SidebarProps) {
  const { card, textPrimary, textSecondary, textMuted, border, accent, accentBg, isDark } = tokens;

  const socialLinks = [
    { icon: <Linkedin size={15} />, label: 'LinkedIn', href: 'https://linkedin.com/in/dev~harsh' },
    { icon: <Github size={15} />, label: 'GitHub', href: 'https://github.com/harshitgarg-03' },
    { icon: <TwitterIcon size={15} />, label: 'Twitter', href: 'https://x.com/harshit_jsx' },
    {
  icon: <MailIcon size={18} />,
  label: "Mail",
  href: "mailto:gargh2120@gmail.com?subject=Job Opportunity",
},
    { icon: <Instagram size={15} />, label: 'Instagram', href: 'https://www.instagram.com/harshitgarg7878/' },
    // { icon: <FileText size={15} />, label: 'Resume', href: '#' },
  ];

  return (
    <div
      className="rounded-[18px] px-[30px] py-[40px] sticky top-[34px] transition-all duration-500"
      style={{
        backgroundColor: card,
        border: `1px solid ${border}`,
        boxShadow: isDark
          ? '0 24px 70px rgba(0,0,0,0.32)'
          : '0 1px 4px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06)',
      }}
    >
      {/* Avatar */}
      <div className="flex justify-center mb-[24px]">
        <div
          aria-label="Harshit Garg"
          className="h-[170px] w-[170px] rounded-[12px] flex items-center justify-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(112,223,241,0.22), rgba(255,255,255,0.04)), #252628',
            border: `1px solid ${border}`,
            color: textPrimary,
          }}
        >
          <img src={userIMg} className='h-full w-full object-cover rounded-[12px]'/>
        </div>
      </div>

      {/* Name + role */}
      <div className="text-center mb-[32px]">
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '26px',
            fontWeight: 700,
            color: textPrimary,
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            marginBottom: '15px',
            fontStyle: 'italic',
          }}
        >
          Harshit Garg
        </h1>
        <p
          className="inline-flex items-center justify-center rounded-[7px] px-[18px] py-[7px]"
          style={{
            backgroundColor: textPrimary === '#F7F7F5' ? '#2E2E30' : '#F0F0F2',
            fontSize: '12.5px',
            color: textSecondary,
            letterSpacing: '0',
            fontWeight: 400,
          }}
        >
          Full Stack Developer
        </p>
      </div>

      {/* Divider */}
      <div className="h-px mb-[31px]" style={{ backgroundColor: border }} />

      {/* Info rows */}
      <div className="space-y-[31px] mb-[31px]">
        <InfoRow
          icon={<Mail size={13} />}
          label="Email"
          value="gargh2120@gmail.com"
          tokens={tokens}
        />
        <InfoRow
          icon={<MapPin size={13} />}
          label="Location"
          value="Noida, IN"
          tokens={tokens}
        />
      </div>

      {/* Divider */}
      {/* Socials */}
      <div className="flex gap-[18px] justify-center">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            title={link.label}
            className="rounded-md transition-all duration-200"
            target={link.href === '#' ? undefined : '_blank'}
            rel={link.href === '#' ? undefined : 'noreferrer'}
            style={{ color: textPrimary, display: 'flex', alignItems: 'center' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = accent;
              (e.currentTarget as HTMLElement).style.backgroundColor = accentBg;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = textPrimary;
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  tokens,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tokens: Tokens;
}) {
  const { textPrimary, textMuted, accent } = tokens;
  return (
    <div className="flex items-center gap-[15px]">
      <div
        className="shrink-0 w-[48px] h-[48px] rounded-[11px] flex items-center justify-center"
        style={{
          backgroundColor: '#222326',
          color: accent,
          boxShadow: '0 16px 28px rgba(0,0,0,0.18)',
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: '11.5px',
            color: textMuted,
            letterSpacing: '0',
            textTransform: 'uppercase',
            marginBottom: '5px',
            fontWeight: 400,
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: '14.5px', color: textPrimary }}>{value}</div>
      </div>
    </div>
  );
}
