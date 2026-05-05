import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import { bioData } from '../constants';
import Link from 'next/link';

export function JourneyPreviewSection() {
  const previewItems = [...bioData].slice(0, 3); // bioData is already descriptive enough

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }} id="journey">
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Box sx={{ width: 30, height: '1px', bgcolor: 'text.secondary', opacity: 0.5 }} />
        <Typography
          variant="overline"
          sx={{ letterSpacing: '0.2em', color: 'text.secondary', fontSize: '0.7rem' }}
        >
          歩み · THE JOURNEY
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
        A quiet record of <Box component="span" sx={{ color: 'secondary.main', fontStyle: 'italic', fontFamily: 'serif' }}>work</Box> and study.
      </Typography>

      <Box sx={{ position: 'relative' }}>
        <Box sx={{
          overflow: 'hidden',
          maxHeight: 400,
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        }}>
          <Stack spacing={6} sx={{ pb: 12 }}>
            {previewItems.map((item) => (
              <Box key={item.title} sx={{ display: 'flex', position: 'relative' }}>
                <Box sx={{
                  width: { xs: 80, md: 140 },
                  flexShrink: 0,
                  textAlign: 'right',
                  pr: { xs: 2, md: 4 },
                  pt: 0.5
                }}>
                  <Typography variant="body2" sx={{ color: 'secondary.main', fontSize: '0.85rem' }}>
                    {item.years}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.1em', fontSize: '0.65rem', mt: 0.5, display: 'block', textTransform: 'uppercase' }}>
                    {item.location || 'Bangkok'}
                  </Typography>
                </Box>

                <Box sx={{
                  position: 'absolute',
                  left: { xs: 80, md: 140 },
                  top: 0,
                  bottom: -48,
                  width: '1px',
                  bgcolor: 'rgba(255,255,255,0.05)'
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    boxShadow: '0 0 0 4px #22211f'
                  }} />
                </Box>

                <Box sx={{ flex: 1, pl: { xs: 3, md: 6 } }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 400, 
                      fontSize: '1.1rem', 
                      mb: 0.5, 
                      color: 'text.primary',
                      fontFamily: '"Playfair Display", "Lora", serif'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, maxWidth: 500 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          pb: 2,
          pt: 4,
          zIndex: 2,
        }}>
          <Link href="/journey" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              component="span"
              sx={{
                borderRadius: 50,
                px: 4,
                py: 1.2,
                bgcolor: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderColor: 'rgba(255,255,255,0.1)',
                color: 'text.primary',
                fontSize: '0.85rem',
                textTransform: 'none',
                letterSpacing: '0.05em',
                transition: '0.3s',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.3)', transform: 'translateY(-2px)' }
              }}
            >
              Continue reading the journey
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

