import React from 'react'
import { Box, Typography, Stack, Chip } from '@mui/material'

interface BioItem {
  years: string | number
  title: string
  description: string
  location?: string
}

interface JourneyTimelineProps {
  items: any[]
}

export function JourneyTimeline({ items }: JourneyTimelineProps) {
  const educationItems = items.filter(item => item.type === 'education');
  const workItems = items.filter(item => item.type === 'work');

  const renderSection = (title: string, number: string, sectionItems: any[], subtitle: string) => {
    if (sectionItems.length === 0) return null;

    return (
      <Box sx={{ mb: 12 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          mb: { xs: 6, md: 8 },
          gap: { xs: 2, md: 0 }
        }}>
          <Box sx={{ width: { xs: 'auto', md: 200 }, flexShrink: 0, textAlign: { xs: 'left', md: 'right' }, pr: { xs: 0, md: 6 } }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.15em', mb: 0.5, display: { xs: 'none', md: 'block' } }}>
              {number}
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: '"Playfair Display", "Lora", serif', fontWeight: 400, fontSize: { xs: '1.5rem', md: '1.8rem' } }}>
              {title}
            </Typography>
          </Box>
          <Box sx={{
            flex: 1,
            pl: { xs: 0, md: 8 },
            borderLeft: { xs: 'none', md: '1px solid rgba(255,255,255,0.05)' },
            pt: { xs: 1, md: 0 }
          }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 500, lineHeight: 1.7, fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
              {subtitle}
            </Typography>
          </Box>
        </Box>

        <Stack spacing={8}>
          {sectionItems.map((item, idx) => (
            <Box key={item.title} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, position: 'relative' }}>
              <Box sx={{
                width: { xs: 'auto', md: 200 },
                flexShrink: 0,
                textAlign: { xs: 'left', md: 'right' },
                pr: { xs: 0, md: 8 },
                pt: { xs: 0, md: 0.5 },
                mb: { xs: 1, md: 0 }
              }}>
                <Typography variant="body2" sx={{ color: 'secondary.main', fontSize: { xs: '0.9rem', md: '0.85rem' }, fontWeight: 500 }}>
                  {item.years}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.1em', fontSize: '0.65rem', mt: 0.5, display: { xs: 'inline-block', md: 'block' }, textTransform: 'uppercase' }}>
                  {item.location || 'Bangkok'}
                </Typography>
              </Box>

              {/* Vertical Line */}
              <Box sx={{
                position: 'absolute',
                left: { xs: -16, md: 250 },
                top: 0,
                bottom: -64,
                width: '1px',
                display: { xs: 'none', md: 'block' },
                bgcolor: idx === sectionItems.length - 1 ? 'transparent' : 'rgba(255,255,255,0.05)'
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

                }} />
              </Box>

              <Box sx={{ flex: 1, pl: { xs: 0, md: 8 }, borderLeft: { xs: '2px solid rgba(255,255,255,0.05)', md: 'none' }, ml: { xs: 0, md: 0 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    mb: 0.5,
                    color: 'text.primary',
                    fontFamily: '"Playfair Display", "Lora", serif'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2, fontSize: '0.8rem', textTransform: 'capitalize' }}>
                  {item.type}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, maxWidth: 550, mb: 3 }}>
                  {item.description}
                </Typography>

                <Stack direction="row" spacing={1}>
                  <Chip
                    label={item.type ? item.type.charAt(0).toUpperCase() + item.type.slice(1) : 'Education'}
                    variant="outlined"
                    size="small"
                    sx={{ fontSize: '0.7rem', color: 'text.secondary', borderColor: 'rgba(255,255,255,0.1)' }}
                  />
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    );
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {renderSection('Work Experience', '02', workItems, 'Professional journey and freelance projects across various sectors.')}
      {renderSection('Education', '01', educationItems, 'Academic background and specialized research labs.')}
    </Box>
  );
}

