'use client'

import React from 'react'
import { Box } from '@mui/material'

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <Box 
      component="div" 
      sx={{ 
        position: 'relative', 
        zIndex: 10,
        minHeight: '100vh'
      }}
    >
      {children}
    </Box>
  )
}
