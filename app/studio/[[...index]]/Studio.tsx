'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'
import { Box } from '@mui/material'

export function Studio() {
  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 99999,
      bgcolor: '#101112'
    }}>
      <NextStudio config={config} />
    </Box>
  )
}
