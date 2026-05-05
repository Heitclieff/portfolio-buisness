"use client"

import * as React from "react"
import CheckIcon from '@mui/icons-material/Check'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import { 
  Button, Box, Typography, Popover, 
  TextField, List, ListItemButton, ListItemText, ListSubheader 
} from '@mui/material'
import { comboboxData } from "@/features/works/constants/config"

type containerProps = {
  value: string
  setValue: any
}

export function FilterPanel({ value, setValue }: containerProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const getLabel = () => {
    const allOptions = [...comboboxData.categories];
    const found = allOptions.find(opt => opt.value === value)
    return found?.label || "Filter"
  }

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        endIcon={<UnfoldMoreIcon sx={{ fontSize: 14, opacity: 0.5 }} />}
        sx={{ 
          width: 140,
          justifyContent: 'space-between', 
          textTransform: 'none',
          borderRadius: 50,
          py: 1.5,
          px: 2.5,
          bgcolor: 'rgba(255,255,255,0.02)',
          borderColor: 'rgba(255,255,255,0.1)',
          color: value ? 'text.primary' : 'text.secondary',
          fontSize: '0.85rem',
          fontWeight: 400,
          transition: '0.2s',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.05)',
            borderColor: 'rgba(255,255,255,0.25)',
          }
        }}
      >
        {getLabel()}
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        slotProps={{ 
          paper: { 
            sx: { 
              width: 180, 
              bgcolor: '#1a1a1a',
              backgroundImage: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 3,
              mt: 1,
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
              overflow: 'hidden'
            } 
          } 
        }}
      >
        <List dense sx={{ py: 1 }}>
          <ListSubheader sx={{ bgcolor: 'transparent', color: 'text.secondary', fontSize: '0.7rem', letterSpacing: '0.1em', pt: 1, pb: 0.5 }}>
            TECHNOLOGIES
          </ListSubheader>
          {comboboxData.categories.map((item) => (
            <ListItemButton
              key={item.value}
              selected={value === item.value}
              onClick={() => { setValue(value === item.value ? "" : item.value); setAnchorEl(null); }}
              sx={{
                mx: 1,
                borderRadius: 1.5,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: 'rgba(255,255,255,0.08)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.12)' }
                }
              }}
            >
              <ListItemText 
                primary={
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: value === item.value ? 600 : 400 }}>
                    {item.label}
                  </Typography>
                } 
              />
              {value === item.value && <CheckIcon sx={{ fontSize: 14, color: 'secondary.main' }} />}
            </ListItemButton>
          ))}
          {value && (
            <ListItemButton 
              onClick={() => { setValue(""); setAnchorEl(null); }}
              sx={{ mx: 1, borderRadius: 1.5, mt: 1, borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              <ListItemText 
                primary={
                  <Typography sx={{ fontSize: '0.75rem', color: 'error.main', textAlign: 'center', width: '100%' }}>
                    Clear filter
                  </Typography>
                } 
              />
            </ListItemButton>
          )}
        </List>
      </Popover>
    </Box>
  )
}

