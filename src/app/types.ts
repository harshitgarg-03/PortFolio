export interface Tokens {
  bg: string;
  card: string;
  card2: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  accent: string;
  accentBg: string;
  isDark: boolean;
}

export interface PageProps {
  tokens: Tokens;
}
