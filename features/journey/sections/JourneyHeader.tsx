import React from 'react'
import { Box, Typography } from '@mui/material'

export function JourneyHeader() {
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Box sx={{ width: 30, height: '1px', bgcolor: 'text.secondary', opacity: 0.5 }} />
        <Typography 
          variant="overline" 
          sx={{ letterSpacing: '0.2em', color: 'text.secondary', fontSize: '0.7rem' }}
        >
          歩み · THE JOURNEY
        </Typography>
      </Box>
      
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 400, 
          fontFamily: '"Playfair Display", "Lora", serif',
          fontSize: { xs: '2.2rem', md: '3.2rem' },
          lineHeight: 1.1,
          mb: 3,
          letterSpacing: '-0.02em'
        }}
      >
        A quiet record of<br />
        <Box component="span" sx={{ color: 'secondary.main', fontStyle: 'italic' }}>
          work
        </Box> and study.
      </Typography>

      <Typography 
        variant="body1" 
        sx={{ 
          color: 'text.secondary', 
          maxWidth: 480, 
          lineHeight: 1.8,
          fontSize: '1rem' 
        }}
      >
        A record of time spent learning, building, and slowly refining what it means to make software with care.
      </Typography>
    </Box>
  )
}

