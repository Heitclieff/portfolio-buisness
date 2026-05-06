import React from 'react'
import { Box, Typography, Stack, Chip, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import type { Work } from '../types'

interface InfoSectionProps {
  work: Work
}

export function InfoSection({ work }: InfoSectionProps) {
  return (
    <Box sx={{ mb: 10, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 6 }}>
      {/* Left: Title & Description */}
      <Box sx={{ flex: '1 1 60%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ width: 32, height: '1px', bgcolor: 'text.secondary', opacity: 0.5 }} />
          <Typography
            variant="overline"
            sx={{ letterSpacing: '0.25em', color: 'text.secondary', fontSize: '0.65rem' }}
          >
            PROJECT OVERVIEW
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontWeight: 400,
            fontStyle: 'italic',
            fontFamily: '"Playfair Display", "Lora", serif',
            fontSize: { xs: '1.2rem', md: '3rem' },
            lineHeight: 1.1,
            mb: 3,
            color: 'text.primary'
          }}
        >
          {work.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: 600,
            lineHeight: 1.8,
            fontSize: '1rem'
          }}
        >
          {work.description}
        </Typography>
      </Box>

      {/* Right: Metadata & Actions */}
      <Box sx={{ flex: '1 1 35%', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box>
          <Typography variant="overline" sx={{ letterSpacing: '0.15em', color: 'text.secondary', display: 'block', mb: 1.5 }}>
            Platform & Stack
          </Typography>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {work.projectDetail?.stack?.split(',').map((tech: string, i: number) => (
              <Chip 
                key={i} 
                label={tech.trim()} 
                variant="outlined" 
                size="small" 
                sx={{ fontSize: '0.75rem', color: 'text.secondary', borderColor: 'rgba(255,255,255,0.1)' }} 
              />
            ))}
            {work.projectDetail?.platform && (
              <Chip 
                label={work.projectDetail.platform} 
                variant="outlined" 
                size="small" 
                sx={{ fontSize: '0.75rem', color: 'text.secondary', borderColor: 'rgba(255,255,255,0.1)' }} 
              />
            )}
          </Stack>
        </Box>

        <Box>
          <Typography variant="overline" sx={{ letterSpacing: '0.15em', color: 'text.secondary', display: 'block', mb: 1.5 }}>
            Links
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            component="a"
            href={work.source || '#'}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: 50,
              borderColor: 'divider',
              color: 'text.primary',
              px: 3,
              py: 1,
              '&:hover': { borderColor: 'text.primary', bgcolor: 'rgba(255,255,255,0.03)' }
            }}
          >
            View Source Code
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

