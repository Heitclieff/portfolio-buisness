

'use client'

import React from 'react'
import { Box, Typography, Skeleton } from '@mui/material'
import { WorkCard } from '@/features/works/components';
import { useWorks } from '@/features/works/hooks/useWorks';

export function SelectedWorksSection() {
  const { data: workData = [], isLoading } = useWorks();
  const selectedWorks = workData.slice(0, 4);
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }} id="work">
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 2 }}>
        <Typography
          variant="overline"
          sx={{ letterSpacing: '0.2em', color: 'text.secondary', fontSize: '0.65rem' }}
        >
          Selected Work · 2023 — 2025
        </Typography>
      </Box>
      <Typography
        variant="h3"
        sx={{
          mb: 6,
          fontFamily: '"Playfair Display", "Lora", serif',
          fontWeight: 400,
          fontSize: { xs: '1.6rem', md: '2rem' },
          letterSpacing: '-0.01em'
        }}
      >
        A small gallery of recent projects.
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: 6,
        rowGap: 8
      }}>
        {isLoading ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <Box key={idx}>
              <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 4, mb: 2 }} />
              <Skeleton width="60%" />
              <Skeleton width="40%" />
            </Box>
          ))
        ) : (
          selectedWorks.map((work) => (
            <WorkCard key={work.title} {...work} />
          ))
        )}
      </Box>
    </Box>
  );
}

