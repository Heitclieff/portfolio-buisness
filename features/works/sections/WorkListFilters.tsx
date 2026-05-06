'use client'

import React from 'react'
import { Box, TextField } from '@mui/material'
import { FilterPanel } from '../components'

interface WorkListFiltersProps {
  keywords: string
  setKeywords: (val: string) => void
  frameworks: string
  setFrameWorks: (val: string) => void
}

export function WorkListFilters({ 
  keywords, 
  setKeywords, 
  frameworks, 
  setFrameWorks 
}: WorkListFiltersProps) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', mb: 2 }}>
      <TextField 
        placeholder="Search projects..." 
        size="small" 
        fullWidth
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        sx={{ 
          width: 280,
          '& .MuiOutlinedInput-root': {
            bgcolor: 'rgba(255,255,255,0.02)',
            borderRadius: 50,
            transition: '0.3s',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
            '&:hover': { bgcolor: 'rgba(255,255,255,0.04)' },
            '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
            '&.Mui-focused fieldset': { borderColor: 'secondary.main' },
          },
          '& input': {
            py: 1.5,
            px: 3,
            fontSize: '0.9rem',
            color: 'text.primary',
          }
        }} 
      />
      <FilterPanel value={frameworks} setValue={setFrameWorks} />
    </Box>
  )
}

