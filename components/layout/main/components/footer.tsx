import React from 'react'
import { personalInfo } from '@/features/home/constants/config'

const Footer :React.FC = () => {
  return (
    <section id = "Footer" className='w-full min-[870px]:h-[30px] h-[60px] flex items-center justify-center'>
          <p className='text-zinc-500  text-sm'>
               © 2024 {personalInfo.name}. All Rights Reserved.
          </p>
     </section>
  )
}

export default Footer;