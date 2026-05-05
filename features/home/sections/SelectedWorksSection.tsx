

import React from 'react'
import { Box, Typography } from '@mui/material'
import { WorkCard } from '@/features/works/components';
import { workData } from '@/features/works/constants/config';

const selectedWorks = workData.slice(0, 4);

export function SelectedWorksSection() {
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
        {selectedWorks.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </Box>
    </Box>
  );
}

