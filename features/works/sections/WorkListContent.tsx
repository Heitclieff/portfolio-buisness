'use client'

import React, { useState, useMemo } from 'react'
import { Box } from '@mui/material'
import { useWorks } from '../hooks/useWorks'
import type { Work } from '../types'
import { WorkListFilters } from './WorkListFilters'
import { WorkListGrid } from './WorkListGrid'

export function WorkListContent() {
   const { data: workData = [] } = useWorks();
   const [keywords, setKeywords] = useState<string>("");
   const [frameworks, setFrameWorks] = useState<string>("")

   const filteredData = useMemo(() => {
      return workData.filter((item: any) => {
         const matchesKeyword = !keywords || item.title.toLowerCase().includes(keywords.toLowerCase());
         const matchesFramework = !frameworks || item.filter?.includes(frameworks);
         return matchesKeyword && matchesFramework;
      });
   }, [keywords, frameworks, workData]);

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
