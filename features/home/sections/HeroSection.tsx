import React from 'react'
import { Box, Typography, Button, Avatar, Stack } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { personalInfo } from '../constants';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        gap: { xs: 5, md: 10 },
        pt: { xs: 10, md: 16 },
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* Left: Text Content */}
      <Box sx={{ flex: 1, maxWidth: 700 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
          <Box sx={{ width: 40, height: '1px', bgcolor: 'text.secondary', opacity: 0.5 }} />
          <Typography
            variant="overline"
            sx={{ letterSpacing: '0.25em', color: 'text.secondary', fontSize: '0.65rem' }}
          >
            SOFTWARE DEVELOPER · BANGKOK / REMOTE
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.2rem', sm: '3.5rem', md: '4.5rem' },
            lineHeight: 1.1,
            mb: 4,
            fontWeight: 400,
            fontFamily: '"Playfair Display", "Lora", serif',
            color: 'text.primary',
            letterSpacing: '-0.02em'
          }}
        >
          Quiet software,<br /> built under the <Box component="span" sx={{ color: 'secondary.main' }}>moon</Box>.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            color: '#8a8a8a',
            lineHeight: 1.7,
            mb: 6,
            fontFamily: '"Inter", "Outfit", sans-serif',
            fontWeight: 400,
            maxWidth: 520
          }}
        >
          I'm {personalInfo.name.split(' ')[0]} — an independent developer crafting digital products that feel calm, considered, and honest. Less noise. More room to breathe.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ alignItems: { xs: 'stretch', sm: 'center' } }}>
          <Link href="/works" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="large"
              component="span"
              sx={{ borderRadius: 50, px: 3.5, py: 1.2, fontSize: '0.85rem' }}
            >
              View selected work
            </Button>
          </Link>
          <Link href="/#about" style={{ textDecoration: 'none' }}>
            <Button
              variant="text"
              color="inherit"
              component="span"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
              sx={{ fontSize: '0.85rem', color: 'text.secondary' }}
            >
              About me
            </Button>
          </Link>
        </Stack>
      </Box>

        <Avatar
          variant="circular"
          sx={{
            width: { xs: 100, sm: 140, md: 260 },
            height: { xs: 100, sm: 140, md: 260 },
            border: '2px solid rgba(255, 255, 255, 0.08)',
            boxShadow: `
              inset 0 1px 0 0 rgba(245,244,239,0.06),
              0 0 60px 10px rgba(245,244,239,0.04),
              0 30px 60px -20px rgba(0,0,0,0.6)
            `,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </Avatar>
    </Box>
  );
};

