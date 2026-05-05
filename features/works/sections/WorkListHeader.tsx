import React from 'react'
import { Box, Typography, Divider } from '@mui/material'

export function WorkListHeader() {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Box sx={{ width: 40, height: '1px', bgcolor: 'text.secondary', opacity: 0.5 }} />
        <Typography 
          variant="overline" 
          sx={{ letterSpacing: '0.25em', color: 'text.secondary', fontSize: '0.65rem' }}
        >
          作品 · SELECTED WORKS
        </Typography>
      </Box>

      <Typography 
        variant="h1" 
        sx={{ 
          fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' }, 
          lineHeight: 1.1,
          mb: 4,
          fontWeight: 400,
          fontFamily: '"Playfair Display", "Lora", serif',
          color: 'text.primary',
          letterSpacing: '-0.02em'
        }}
      >
        A small gallery of<br/>
        <Box component="span" sx={{ color: 'secondary.main' }}>recent</Box> projects.
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          color: '#8a8a8a', 
          lineHeight: 1.7, 
          maxWidth: 600,
          mb: 4,
          fontFamily: '"Inter", "Outfit", sans-serif',
          fontSize: '1.05rem',
        }}
      >
        A quiet collection of work spanning various disciplines. Use the filters below to explore by project name or technical stack.
      </Typography>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 4 }} />
    </Box>
  )
}

