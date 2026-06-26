import React from 'react'
import { personalInfo, contactLinks } from '@/features/home/constants'
import { Box, Typography, Container } from '@mui/material'
import { Navigation } from "@/layouts/navigation";
import ClientShell from "@/layouts/main/ClientShell";
import { BackgroundManager } from "@/components/BackgroundManager";

/**
 * Simplified Layout without Sidebar to match 'Midnight Zen' aesthetic
 */
export default function DashboardLayout({
  children
}: {
  readonly children: React.ReactNode
}) {
  return (
    <>
      <BackgroundManager />
      <Navigation />

      <Container
        maxWidth="lg"
        component="main"
        sx={{
          pt: { xs: 12, md: 16 },
          px: { xs: 3, md: 6 },
          minHeight: '100vh'
        }}
      >
        <ClientShell>
          <Box component="section" sx={{ width: '100%' }}>
            {/* Main Content Area */}
            <Box sx={{ minHeight: '80vh' }}>
              {children}
            </Box>

            {/* Footer */}
            <Box
              component="footer"
              sx={{
                mt: 12,
                pb: 6,
                borderTop: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                pt: 4
              }}
            >
              <Typography variant="caption" sx={{ letterSpacing: '0.15em', color: 'text.secondary', textTransform: 'uppercase' }}>
                © {new Date().getFullYear()} {personalInfo.name}
              </Typography>

              <Box sx={{ display: 'flex', gap: 4 }}>
                {contactLinks
                  .filter((link) => ['Github', 'LinkedIn'].includes(link.iconKey))
                  .map((link) => (
                    <Typography
                      key={link.iconKey}
                      component="a"
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="caption"
                      sx={{
                        letterSpacing: '0.15em',
                        color: 'text.secondary',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      {link.iconKey}
                    </Typography>
                  ))}
              </Box>
            </Box>
          </Box>
        </ClientShell>
      </Container>
    </>
  )
}
