import React from 'react'
import { Box, Container } from '@mui/material'
import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { Work } from './types';

import {
  VisualsSection,
  InfoSection,
  FeaturesSection,
  GallerySection
} from './sections'

interface WorkDetailProps {
  work: Work
}

export function WorkDetail({ work }: WorkDetailProps) {
  if (!work?.title) return null;

  return (
    <Box sx={{ pb: 12, pt: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Breadcrumbs items={[
          { label: 'Works', path: '/works' },
          { label: work.title }
        ]} />

        <VisualsSection work={work} />

        <InfoSection work={work} />

        <Box sx={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)', mb: 8 }} />

        <FeaturesSection work={work} />

        <GallerySection work={work} />
      </Container>
    </Box>
  )
}


