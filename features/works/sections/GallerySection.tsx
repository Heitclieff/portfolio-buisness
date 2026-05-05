import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import type { Work } from '../types'

interface GallerySectionProps {
  work: Work
}

export function GallerySection({ work }: { work: Work }) {
  if (!work.image || work.image.length === 0) return null;

  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)', mb: 8 }} />

      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ width: 24, height: '1px', bgcolor: 'text.secondary', opacity: 0.5 }} />
          <Typography
            variant="overline"
            sx={{ letterSpacing: '0.2em', color: 'text.secondary', fontSize: '0.65rem' }}
          >
            VISUALS · GALLERY
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
          Project <span style={{ fontStyle: 'italic', color: '#e6dcc8', fontWeight: 400 }}>gallery.</span>
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        {work.image.map((imgUrl, idx) => (
          <Box key={idx} sx={{
            position: 'relative',
            aspectRatio: '16/10',
            borderRadius: 4,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            bgcolor: 'var(--charcoal)',
            '& img': { transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' },
            '&:hover img': { transform: 'scale(1.03)' }
          }}>
            <Image
              loading="lazy"
              src={imgUrl}
              fill
              alt={`${work.title} gallery ${idx + 1}`}
              quality={80}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

