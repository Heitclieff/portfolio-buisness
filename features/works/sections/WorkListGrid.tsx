import React from 'react'
import { Box } from '@mui/material'
import { WorkCard } from '../components'
import type { Work } from '../types'

interface WorkListGridProps {
  works: Work[]
}

export function WorkListGrid({ works }: WorkListGridProps) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 6, rowGap: { xs: 4, md: 8 } }}>
      {works.map((item) => (
        <WorkCard key={item.title} {...item} />
      ))}
    </Box>
  )
}

