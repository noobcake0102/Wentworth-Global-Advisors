/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:         '#09090f',
        surface:    '#0f0f18',
        card:       '#131320',
        gold:       '#c9a84c',
        'gold-light':'#e8c97a',
        'gold-subtle':'rgba(201,168,76,0.08)',
        'border-gold':'rgba(201,168,76,0.12)',
        'border-hover':'rgba(201,168,76,0.28)',
        ink:        '#f0ece6',
        muted:      '#8a899a',
        dim:        '#52515f',
        success:    '#4caf82',
        danger:     '#e05c5c',
        warning:    '#e8a84c',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
      boxShadow: {
        gold: '0 8px 32px rgba(201,168,76,0.18)',
        'gold-lg': '0 16px 48px rgba(201,168,76,0.22)',
        card: '0 2px 16px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
