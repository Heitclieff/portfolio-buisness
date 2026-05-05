'use client'

import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import { personalInfo, contactLinks } from '../constants';

export function ContactSection() {
  const [emailData, setEmailData] = useState({ link: '#', text: 'Loading...' });

  useEffect(() => {
    if (personalInfo.emailBase64) {
      try {
        const decoded = atob(personalInfo.emailBase64);
        setEmailData({ link: `mailto:${decoded}`, text: decoded });
      } catch (e) {
        console.error("Failed to decode email");
      }
    }
  }, []);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }} id="contact">
      <Typography
        variant="overline"
        sx={{ letterSpacing: '0.2em', color: 'text.secondary', fontSize: '0.65rem' }}
      >
        お茶でも · Get in touch
      </Typography>
      <Typography
        variant="h3"
        sx={{
          my: 3,
          fontFamily: '"Playfair Display", "Lora", serif',
          fontWeight: 400,
          fontSize: { xs: '1.6rem', md: '2.2rem' },
          letterSpacing: '-0.01em'
        }}
      >
        Have a project that deserves a<br /> slower, better build?
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 4, fontSize: '0.85rem' }}
      >
        Send a note — I read every message.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ borderRadius: 50, px: 5, py: 1.5, fontSize: '0.85rem' }}
        component="a"
        href={emailData.link}
      >
        {emailData.text}
      </Button>

      <Stack direction="row" spacing={4} sx={{ justifyContent: 'center', mt: 5 }}>
        {contactLinks.map((link) => (
          <Typography
            key={link.iconKey}
            component="a"
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="caption"
            aria-label={`Visit my ${link.iconKey}`}
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              '&:hover': { color: 'text.primary' },
            }}
          >
            {link.iconKey}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

