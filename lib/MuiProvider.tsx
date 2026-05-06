'use client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
