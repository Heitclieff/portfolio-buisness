import React from 'react'
import { Box, Typography } from '@mui/material'
import type { Work } from '../types'

interface FeaturesSectionProps {
  work: Work
}

export function FeaturesSection({ work }: FeaturesSectionProps) {
  if (!work.features || work.features.length === 0) return null;

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ width: 24, height: '1px', bgcolor: 'text.secondary', opacity: 0.5 }} />
          <Typography
            variant="overline"
            sx={{ letterSpacing: '0.2em', color: 'text.secondary', fontSize: '0.65rem' }}
          >
            CAPABILITIES · CORE FEATURES
          </Typography>
        </Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 400,
            fontFamily: '"Playfair Display", "Lora", serif',
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            lineHeight: 1.2,
            color: 'text.primary'
          }}
        >
          Key features and<br />
          <span style={{ fontStyle: 'italic', color: '#e6dcc8', fontWeight: 400 }}>functionalities.</span>
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, sm: 3, md: 4 }, rowGap: 2 }}>
        {work.features.map((feature, idx) => (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'secondary.main', opacity: 0.8 }} />
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.9rem' }}>
              {feature.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

