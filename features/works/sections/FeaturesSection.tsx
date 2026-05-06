import React from 'react'
import { Box, Typography, Tooltip, TooltipProps } from '@mui/material'
import type { Work } from '../types'

interface FeaturesSectionProps {
  work: Work
}

export function FeaturesSection({ work }: FeaturesSectionProps) {
  if (!work.features || work.features.length === 0) return null;

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ width: 24, height: '1px', bgcolor: 'text.secondary', opacity: 0.5 }} />
          <Typography
            variant="overline"
            sx={{ letterSpacing: '0.2em', color: 'text.secondary', fontSize: '0.65rem' }}
          >
            CAPABILITIES · CORE FEATURES
          </Typography>
        </Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 400,
            fontFamily: '"Playfair Display", "Lora", serif',
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            lineHeight: 1.2,
            color: 'text.primary'
          }}
        >
          Key features and<br />
          <span style={{ fontStyle: 'italic', color: '#e6dcc8', fontWeight: 400 }}>functionalities.</span>
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, sm: 3, md: 4 }, rowGap: 3 }}>
        {work.features.map((feature, idx) => (
          <Tooltip
            key={idx}
            arrow
            placement="bottom-start"
            slotProps={{
              tooltip: {
                sx: {
                  backgroundColor: '#141010ff',
                  color: '#f5f4ef',
                  maxWidth: 280,
                  fontSize: '0.85rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
                }
              },
              arrow: {
                sx: {
                  color: '#0a0a0a',
                }
              }
            }}
            title={
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#e6dcc8', mb: 0.5, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  {feature.title.toUpperCase()}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, fontSize: '0.75rem' }}>
                  {feature.description}
                </Typography>
              </Box>
            }
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'help',
                transition: '0.2s',
                '&:hover': {
                  opacity: 1,
                  transform: 'translateY(-2px)'
                },
                '&:hover .dot': {
                  transform: 'scale(1.5)',
                  bgcolor: '#e6dcc8'
                }
              }}
            >
              <Box
                className="dot"
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255,255,255,0.3)',
                  opacity: 0.8,
                  transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  borderBottom: '1px solid transparent',
                  transition: '0.3s',
                  '&:hover': { color: 'text.primary' }
                }}
              >
                {feature.title}
              </Typography>
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Box>
  )
}

