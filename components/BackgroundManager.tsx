'use client'

import React from 'react'
import { Box } from '@mui/material'
import { usePathname } from 'next/navigation'

export function BackgroundManager() {
  const pathname = usePathname()

  // Define backgrounds for each page
  const getBackgroundConfig = () => {
    if (pathname === '/') {
      return {
        image: '/images/home_bg.png',
        opacity: 0.3,
        mobileOpacity: 0.25,
        type: 'home'
      }
    }
    if (pathname?.startsWith('/works')) {
      return {
        image: '/images/works_bg.png',
        opacity: 0.5,
        mobileOpacity: 0.3,
        type: 'works'
      }
    }
    if (pathname?.startsWith('/journey')) {
      return {
        image: '/images/waterfall.png',
        opacity: 0.3,
        mobileOpacity: 0.2,
        type: 'journey'
      }
    }
    return null
  }

  const config = getBackgroundConfig()

  if (!config) return null

  const isWorks = config.type === 'works'
  const isHome = config.type === 'home'

  return (
    <>
      {/* Scrollable Layer (Absolute) - The Moon for Works */}
      {isWorks && (
        <Box sx={{ position: 'absolute', top: 0, right: 0, width: { xs: '100%', md: '55vw' }, height: '100vh', zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${config.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right 20%',
              opacity: 0.45,
              mixBlendMode: 'screen',
              maskImage: 'radial-gradient(circle at 80% 25%, black 5%, transparent 40%)',
              WebkitMaskImage: 'radial-gradient(circle at 80% 25%, black 5%, transparent 40%)',
              filter: 'brightness(0.9) contrast(120%)',
            }}
          />
        </Box>
      )}

      {/* Fixed Layer */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: isWorks ? -2 : -1,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        {/* Background Image Layer */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: { xs: '100%', md: isHome ? '60vw' : '65vw' },
            height: '100vh',
            backgroundImage: `url(${config.image})`,
            backgroundSize: 'cover',
            backgroundPosition: isWorks ? 'right bottom' : 'right center',
            opacity: { xs: config.mobileOpacity, md: config.opacity },
            mixBlendMode: 'screen',
            maskImage: {
              xs: 'radial-gradient(circle at center, black 10%, transparent 70%)',
              md: isHome
                ? 'linear-gradient(to bottom, transparent, black 25%), linear-gradient(to right, transparent, black 45%)' // Removed bottom fade, kept top and left
                : isWorks
                  ? 'linear-gradient(to right, transparent, black 40%), linear-gradient(to top, black 25%, transparent 50%)'
                  : 'radial-gradient(circle at 80% 20%, black 10%, transparent 80%)'
            },
            WebkitMaskImage: {
              xs: 'radial-gradient(circle at center, black 10%, transparent 70%)',
              md: isHome
                ? 'linear-gradient(to bottom, transparent, black 25%), linear-gradient(to right, transparent, black 45%)'
                : isWorks
                  ? 'linear-gradient(to right, transparent, black 40%), linear-gradient(to top, black 25%, transparent 50%)'
                  : 'radial-gradient(circle at 80% 20%, black 10%, transparent 80%)'
            },
            WebkitMaskComposite: (isWorks || isHome) ? 'source-in, source-in' : 'none',
            maskComposite: (isWorks || isHome) ? 'intersect' : 'none',
            filter: isHome ? 'contrast(125%) brightness(0.75) blur(0.3px)' : 'brightness(0.85) contrast(110%)',
          }}
        />

        {/* Seamless Blending Overlays */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: isHome ? `
              radial-gradient(circle at 90% 40%, transparent 20%, var(--obsidian) 95%),
              linear-gradient(to bottom, var(--obsidian) 0%, transparent 35%),
              linear-gradient(to top, transparent 90%, transparent 100%) // Removed top overlay flood
            ` : isWorks ? `
              linear-gradient(to right, var(--obsidian) 0%, var(--obsidian) 15%, transparent 100%),
              linear-gradient(to bottom, transparent 80%, var(--obsidian) 100%)
            ` : `
              linear-gradient(to left, transparent 0%, var(--obsidian) 95%),
              linear-gradient(to bottom, transparent 70%, var(--obsidian) 100%)
            `,
            opacity: 1,
          }}
        />
      </Box>
    </>
  )
}
