'use client'

import React from 'react'
import { Box, Typography, Link as MUILink } from '@mui/material'
import Link from 'next/link'

type BreadcrumbItem = {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1.5, 
        mb: 6,
        opacity: 0.8
      }}
    >
      <MUILink 
        component={Link}
        href="/"
        underline="none" 
        sx={{ 
          fontSize: '0.65rem', 
          color: 'text.secondary', 
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          transition: 'color 0.2s',
          cursor: 'pointer',
          '&:hover': { color: 'text.primary' }
        }}
      >
        Home
      </MUILink>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <Typography 
            sx={{ 
              fontSize: '0.6rem', 
              color: 'text.secondary', 
              opacity: 0.3 
            }}
          >
            /
          </Typography>
          
          {item.path ? (
            <MUILink 
              component={Link}
              href={item.path}
              underline="none" 
              sx={{ 
                fontSize: '0.65rem', 
                color: 'text.secondary', 
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
                cursor: 'pointer',
                '&:hover': { color: 'text.primary' }
              }}
            >
              {item.label}
            </MUILink>
          ) : (
            <Typography 
              sx={{ 
                fontSize: '0.65rem', 
                color: 'text.primary', 
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500,
                opacity: 0.6
              }}
            >
              {item.label}
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Box>
  )
}

