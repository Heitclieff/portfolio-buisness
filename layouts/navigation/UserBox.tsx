'use client'

import React from 'react'
import { Avatar as MuiAvatar, Chip, Box, Typography } from '@mui/material'
import { personalInfo } from '@/features/home/constants'
import { usePathname } from 'next/navigation'

const UserBox: React.FC = () => {
  const pathname = usePathname();
  
  return (
    <Box sx={{ 
      display: { xs: pathname === '/' ? 'flex' : 'none', md: 'flex' },
      flexDirection: { xs: 'row', md: 'column' },
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      p: 2
    }}>
      <MuiAvatar 
        src={personalInfo.profileImage} 
        sx={{ width: { xs: 110, md: 130 }, height: { xs: 110, md: 130 } }}
      />
      <Box sx={{ textAlign: { md: 'center' }, p: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {personalInfo.name}
        </Typography>
        <Chip label={personalInfo.roles} size="small" sx={{ mt: 0.5 }} />
      </Box>
    </Box>
  )
}
export default UserBox;