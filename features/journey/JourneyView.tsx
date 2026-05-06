import React from 'react'
import { Box, Container } from '@mui/material'
import { bioData } from '@/features/home/constants'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { JourneyHeader, JourneyTimeline } from './sections'

export function JourneyView() {
  const sortedBio = [...bioData]; // bioData is already descriptive enough

  return (
    <Box sx={{ position: 'relative', pt: { xs: 4, md: 8 }, pb: 8 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Journey' }]} />

      {/* Header Section */}
      <JourneyHeader />

      {/* Timeline Section */}
      <JourneyTimeline items={sortedBio} />
    </Box>
  )
}