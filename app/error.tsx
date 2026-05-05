'use client'

import React, { useEffect } from 'react'
import { Box, Typography, Button, Container } from '@mui/material'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          gap: 3
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: 'serif' }}>
          Something went quiet.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          An unexpected error occurred. We've logged the details and are looking into it.
        </Typography>
        <Button
          variant="outlined"
          onClick={() => reset()}
          sx={{ borderRadius: 50, px: 4 }}
        >
          Try again
        </Button>
      </Box>
    </Container>
  )
}
