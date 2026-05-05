'use client'

import React, { useState, useMemo } from 'react'
import { Box } from '@mui/material'
import { workData } from '../constants'
import type { Work } from '../types'
import { WorkListFilters } from './WorkListFilters'
import { WorkListGrid } from './WorkListGrid'

export function WorkListContent() {
   const [keywords, setKeywords] = useState<string>("");
   const [frameworks, setFrameWorks] = useState<string>("")

   const filteredData = useMemo(() => {
      return workData.filter((item) => {
         const matchesKeyword = !keywords || item.title.toLowerCase().includes(keywords.toLowerCase());
         const matchesFramework = !frameworks || item.filter.includes(frameworks);
         return matchesKeyword && matchesFramework;
      });
   }, [keywords, frameworks]);

   return (
      <>
         <WorkListFilters 
           keywords={keywords} 
           setKeywords={setKeywords} 
           frameworks={frameworks} 
           setFrameWorks={setFrameWorks} 
         />
         <WorkListGrid works={filteredData as Work[]} />
      </>
   )
}
