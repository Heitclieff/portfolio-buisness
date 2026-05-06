'use client';

import { createTheme } from '@mui/material/styles';

// Hex equivalents of design-ref OKLCH palette
const colors = {
  obsidian: '#1a1b21',
  charcoal: '#2a2c33',
  sumi: '#363840',
  moon: '#f5f4ef',
  moonSoft: '#c2c0b8',
  inkSoft: '#9c9a92',
  oak: '#c7b198',
  oakDeep: '#a88d6f',
  border: 'rgba(255, 255, 255, 0.08)',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.moon,
      contrastText: colors.obsidian,
    },
    secondary: {
      main: colors.oak,
    },
    background: {
      default: 'transparent', // Let globals.css handle body bg
      paper: colors.sumi,
    },
    text: {
      primary: colors.moon,
      secondary: colors.inkSoft,
    },
    divider: colors.border,
  },
  typography: {
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
    h1: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '8px 16px',
        },
        outlined: {
          borderColor: colors.border,
          color: colors.moon,
          '&:hover': {
            borderColor: colors.moon,
            background: 'rgba(255, 255, 255, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: colors.sumi,
          border: `1px solid ${colors.border}`,
          boxShadow:
            'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 30px 60px -30px rgba(0,0,0,0.8)',
        },
      },
    },
  },
});
