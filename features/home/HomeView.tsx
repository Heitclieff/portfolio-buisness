import React from 'react'
import { Box } from '@mui/material'
import { 
  HeroSection, 
  SelectedWorksSection, 
  JourneyPreviewSection, 
  AboutSection, 
  ContactSection 
} from './sections'

function Divider() {
  return (
    <Box sx={{
      height: '1px',
      background: 'linear-gradient(to right, transparent, rgba(245,244,239,0.12), transparent)',
      my: 2,
    }} />
  );
}

export function HomeView() {
  return (
    <Box sx={{ position: 'relative', color: 'text.primary', overflow: 'hidden' }}>
      <HeroSection />
      <Divider />
      <SelectedWorksSection />
      <Divider />
      <AboutSection />
      <Divider />
      <JourneyPreviewSection />
      <ContactSection />
    </Box>
  );
}

