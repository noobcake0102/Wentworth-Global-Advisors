export const colors = {
  bg: '#09090f',
  surface: '#0f0f18',
  card: '#131320',
  gold: '#c9a84c',
  goldLight: '#e8c97a',
  goldSubtle: 'rgba(201,168,76,0.08)',
  borderGold: 'rgba(201,168,76,0.12)',
  borderHover: 'rgba(201,168,76,0.28)',
  ink: '#f0ece6',
  muted: '#8a899a',
  dim: '#52515f',
  success: '#4caf82',
  danger: '#e05c5c',
  warning: '#e8a84c',
} as const;

export const fonts = {
  serif: '"Cormorant Garamond", Georgia, serif',
  sans:  '"DM Sans", system-ui, sans-serif',
} as const;

export const belt = {
  yellow: { bg: '#c9a84c', text: '#09090f', label: 'Yellow Belt' },
  green:  { bg: '#4caf82', text: '#09090f', label: 'Green Belt' },
  black:  { bg: '#f0ece6', text: '#09090f', label: 'Black Belt' },
} as const;
