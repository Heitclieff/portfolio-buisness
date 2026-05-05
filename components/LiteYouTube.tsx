'use client'

import React, { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import Image from 'next/image'

interface LiteYouTubeProps {
  url: string
  title: string
}

export function LiteYouTube({ url, title }: LiteYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoId = url.split('/').pop()?.split('?')[0]
  const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg` : ''
  const isYouTubeUrl = url.startsWith('https://www.youtube.com/embed/') || url.startsWith('https://www.youtube-nocookie.com/embed/')

  if (isPlaying) {
    if (!isYouTubeUrl) return <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#000', color: 'error.main' }}>Invalid URL</Box>
    return (
      <iframe
        width="100%"
        height="100%"
        src={`${url}${url.includes('?') ? '&' : '?'}autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{ border: 'none' }}
      />
    )
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'pointer',
        bgcolor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover .play-btn': { transform: 'scale(1.1)', bgcolor: 'secondary.main' }
      }}
      onClick={() => setIsPlaying(true)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsPlaying(true);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${title}`}
    >
      {thumbnailUrl && (
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover', opacity: 0.6 }}
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      )}
      <IconButton
        className="play-btn"
        aria-label="Play video"
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          width: 80,
          height: 80,
          transition: '0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
          backdropFilter: 'blur(4px)',
          '&:hover': { bgcolor: 'secondary.main' }
        }}
      >
        <PlayArrowIcon sx={{ fontSize: 40 }} />
      </IconButton>
    </Box>
  )
}

