import React from 'react'
import { Box, CircularProgress } from '@mui/material'

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        width: '100%',
      }}
    >
      <CircularProgress size={30} sx={{ color: 'secondary.main', opacity: 0.5 }} />
    </Box>
  )
}
