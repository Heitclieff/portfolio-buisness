'use client'

import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import type { Work } from '../types'
import { LiteYouTube } from '@/components/LiteYouTube'


interface VisualsSectionProps {
  work: Work
}

export function VisualsSection({ work }: VisualsSectionProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 8 }}>
      {work.thumbnail && (
        <Box sx={{
          width: '100%',
          height: { xs: 300, sm: 500, md: 700 },
          borderRadius: 4,
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)'
        }}>
          <LiteYouTube url={work.thumbnail} title={work.title} />
        </Box>
      )}

      {work.cover && !work.thumbnail && (
        <Box sx={{
          width: '100%',
          maxWidth: '1000px', // Smaller size
          mx: 'auto', // Centered
          borderRadius: 4,
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)',
          bgcolor: 'rgba(255,255,255,0.02)',
        }}>
          <img
            src={work.cover}
            alt={work.title || "Project Cover"}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </Box>
      )}
    </Box>
  )
}

