'use client'

import React from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, TextField, Divider, Typography } from '@mui/material'
import { menuOptions } from './nav-config'
import { menuIcons } from './nav-icons'
import { useRouter, usePathname } from 'next/navigation'

const CommandNavigate: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' }, px: 1 }}>
      <TextField 
        placeholder="Type a command or search..." 
        variant="outlined" 
        size="small" 
        fullWidth
        sx={{ 
          mb: 1,
          '& .MuiOutlinedInput-root': {
            borderColor: 'divider',
            fontSize: '0.85rem'
          }
        }}
      />
      <Typography variant="caption" color="text.secondary" sx={{ px: 1, mb: 0.5, display: 'block' }}>
        Suggestions
      </Typography>
      <List dense>
        {menuOptions?.map((item, key) => {
          const isActive = pathname === item.path;
          return (
            <ListItemButton 
              key={key} 
              selected={isActive}
              onClick={() => router.push(item.path)}
              sx={{ borderRadius: 1 }}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                {menuIcons[item.title]}
              </ListItemIcon>
              <ListItemText primary={item.title} slotProps={{ primary: { sx: { fontSize: '0.85rem' } } }} />
              {isActive && (
                <Typography variant="caption" color="text.secondary">⌘N</Typography>
              )}
            </ListItemButton>
          );
        })}
      </List>
      <Divider sx={{ mt: 1 }} />
    </Box>
  )
}

export default CommandNavigate;
