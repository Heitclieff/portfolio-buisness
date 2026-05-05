import React from 'react'
import Image from 'next/image';
import {
  Box,
  Typography,
  Card,
  CardActionArea,
} from '@mui/material';
import Link from 'next/link';

type containerProps = {
  slug: string
  title: string
  cover: string
  description: string
  projectDetail?: {
    platform?: string
    stack?: string
  }
  year?: string
  role?: string
}

export function WorkCard({ slug, title, cover, description, projectDetail, year = "2024", role }: containerProps) {
  const displayRole = role || projectDetail?.platform?.split(' ')[0] || "Web";
  const displayStack = projectDetail?.stack?.split(',')[0] || "React";

  return (
    <Box
      component="article"
      sx={{
        width: '100%',
        mb: 0,
        '&:hover img': { transform: 'scale(1.02)' }
      }}
    >
      <Link href={`/works?project=${slug}`} style={{ textDecoration: 'none' }}>
        <Card
          sx={{
            bgcolor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            borderRadius: 4,
            overflow: 'hidden',
            cursor: 'pointer',
            backgroundImage: 'none',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <CardActionArea sx={{ borderRadius: 4 }}>
            <Box sx={{
              width: '100%',
              aspectRatio: '16/10',
              bgcolor: 'var(--charcoal)',
              overflow: 'hidden',
              borderRadius: 4,
              border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative'
            }}>
              <Image
                loading="lazy"
                src={cover || ""}
                fill
                alt={title}
                quality={60}
                style={{ objectFit: 'cover', transition: '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Box>
          </CardActionArea>
        </Card>
      </Link>

      <Box sx={{ mt: 2.5, px: 0.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: '1.15rem',
              fontFamily: '"Playfair Display", "Lora", serif',
              color: 'text.primary'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontSize: '0.7rem',
              fontWeight: 400,
              opacity: 0.5
            }}
          >
            {displayRole} · {displayStack} · {year}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            maxWidth: '500px',
            lineHeight: 1.6,
            fontSize: '0.8rem',
            opacity: 0.8
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

