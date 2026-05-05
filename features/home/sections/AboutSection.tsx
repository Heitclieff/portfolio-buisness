'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography, Chip } from '@mui/material'
import { personalInfo } from '../constants';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Box sx={{ width: '100%', height: { xs: 350, md: 450 } }} />
});

const TOOLKIT = ['TypeScript', 'React', 'Node.js', 'Express.js', 'Next.js', 'React Native', 'Python', 'Nest.js', 'TailwindCSS', 'PostgreSQL', 'MongoDB', 'SQL', 'Git'];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={sectionRef} sx={{ py: { xs: 8, md: 12 } }} id="about">
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: { xs: 6, md: 10 }
      }}>
        {/* Left: Bio & Toolkit */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: '0.2em', color: 'text.secondary', display: 'block', mb: 2, fontSize: '0.65rem' }}
          >
            About
          </Typography>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontFamily: '"Playfair Display", "Lora", serif',
              fontWeight: 400,
              fontSize: { xs: '1.6rem', md: '2rem' },
              maxWidth: 600,
              letterSpacing: '-0.01em'
            }}
          >
            I believe in software that respects your attention.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', lineHeight: 1.9, maxWidth: 640, mb: 6, fontSize: '0.95rem' }}
          >
            {personalInfo.introduction}
          </Typography>

          <Typography
            variant="overline"
            sx={{ letterSpacing: '0.2em', color: 'text.secondary', display: 'block', mb: 2, fontSize: '0.65rem' }}
          >
            Toolkit
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {TOOLKIT.map((tool) => (
              <Chip
                key={tool}
                label={tool}
                variant="outlined"
                size="medium"
                sx={{
                  borderRadius: 50,
                  px: 0.5,
                  fontSize: '0.75rem',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'text.primary',
                  '&:hover': { borderColor: 'secondary.main', color: 'text.primary' }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Right: Spline 3D Character */}
        <Box 
          aria-label="Decorative 3D character animation"
          sx={{
          flexShrink: 0,
          width: { xs: '100%', md: 450 },
          height: { xs: 350, md: 450 },
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: 350, md: 450 }
        }}>
          {isVisible && (
            <Spline scene="https://prod.spline.design/r-kX8xwR5XkF0MWI/scene.splinecode" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

