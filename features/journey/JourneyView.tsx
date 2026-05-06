'use client'

import React from 'react'
import { Box } from '@mui/material'
import { useJourney } from './hooks/useJourney'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { JourneyHeader, JourneyTimeline } from './sections'

export function JourneyView() {
  const { data: journeyData = [] } = useJourney()
  const sortedBio = [...journeyData]; 

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