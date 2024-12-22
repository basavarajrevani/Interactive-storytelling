/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        background: 'var(--background)',
        text: 'var(--text)',
        'nav-bg': 'var(--nav-bg)',
        'card-bg': 'var(--card-bg)',
        border: 'var(--border)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--text)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary-hover)',
              },
            },
            h1: {
              color: 'var(--text)',
            },
            h2: {
              color: 'var(--text)',
            },
            h3: {
              color: 'var(--text)',
            },
            strong: {
              color: 'var(--text)',
            },
            code: {
              color: 'var(--text)',
            },
            blockquote: {
              color: 'var(--text)',
              borderLeftColor: theme('colors.gray.300'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};