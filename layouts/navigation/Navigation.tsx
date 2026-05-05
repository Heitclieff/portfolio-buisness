'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  useScrollTrigger,
  Slide
} from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { menuOptions } from './nav-config'
import { personalInfo } from '@/features/home/constants'

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navigation = () => {
  const pathname = usePathname();

  return (
    <HideOnScroll>
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          backdropFilter: 'blur(16px)',
          transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: { xs: 64, md: 80 } }}>
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': { opacity: 0.7 }
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", "Lora", serif',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  color: 'text.primary'
                }}
              >
                氷 · {personalInfo.subname}
              </Typography>
            </Box>

            {/* Desktop Nav - Hidden on mobile, visible on MD and up */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5 }}>
              {menuOptions.map((item) => (
                <Typography
                  key={item.path}
                  component={Link}
                  href={item.path}
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 400,
                    color: pathname === item.path ? 'primary.main' : 'text.secondary',
                    cursor: 'pointer',
                    transition: '0.2s',
                    textDecoration: 'none',
                    letterSpacing: '0.08em',
                    '&:hover': { color: 'text.primary' }
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Box>

            {/* Action Button - Always visible on all screens */}
            <Link href="/#contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                size="small"
                component="span"
                sx={{
                  borderRadius: 50,
                  px: { xs: 2.5, md: 3 },
                  py: 0.8,
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  borderColor: 'rgba(255,255,255,0.15)',
                  color: 'text.primary',
                  '&:hover': { borderColor: 'text.primary', bgcolor: 'rgba(255,255,255,0.05)' }
                }}
              >
                SAY HELLO
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </HideOnScroll>
  )
}

export default Navigation;
