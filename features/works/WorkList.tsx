import React from 'react'
import { Box } from '@mui/material'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { WorkListHeader, WorkListContent } from './sections'

export function WorkList() {
   return (
      <Box sx={{ position: 'relative', display: 'flex', gap: 2 }}>
         <Box sx={{ width: '100%', pt: { xs: 4, md: 8 }, pb: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Breadcrumbs items={[{ label: 'Works' }]} />
            <WorkListHeader />
            <WorkListContent />
         </Box>
      </Box>
   )
}

