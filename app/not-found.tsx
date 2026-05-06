import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center',
          gap: 3
        }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            fontFamily: '"Playfair Display", serif', 
            fontSize: '6rem', 
            opacity: 0.1,
            position: 'absolute',
            zIndex: -1
          }}
        >
          404
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'serif' }}>
          Lost in the moonlight.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The page or project you're looking for doesn't exist or has moved into the shadows.
        </Typography>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            component="span"
            sx={{ borderRadius: 50, px: 4, mt: 2 }}
          >
            Return Home
          </Button>
        </Link>
      </Box>
    </Container>
  )
}
