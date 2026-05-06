import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import type { Work } from '../types'

interface GallerySectionProps {
  work: Work
}

export function GallerySection({ work }: { work: Work }) {
  // Use gallery if available, otherwise fallback to cover image to ensure something is displayed
  const imagesToShow = work.gallery && work.gallery.length > 0
    ? work.gallery
    : (work.cover ? [work.cover] : []);

  if (imagesToShow.length === 0) return null;

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

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
        gap: { xs: 4, md: 6 },
        maxWidth: '1000px', // Constrain width
        mx: 'auto' // Center it
      }}>
        {imagesToShow.map((imgUrl, idx) => {
          const isWide = idx % 3 === 0 || imagesToShow.length === 1;
          const span = isWide ? 12 : 6;

          return (
            <Box
              key={idx}
              sx={{
                gridColumn: { xs: 'span 1', md: `span ${span}` },
                borderRadius: { xs: 2, md: 4 },
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(255,255,255,0.02)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                '& img': { transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)' },
                '&:hover img': { transform: 'scale(1.02)' }
              }}
            >
              <img
                src={imgUrl}
                alt={`${work.title} gallery ${idx + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
