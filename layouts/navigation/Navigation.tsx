'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { HamburgerMenuIcon, RocketIcon } from '@radix-ui/react-icons'
import { useRouter, usePathname } from 'next/navigation'
import { menuOptions } from './nav-config'
import { personalInfo } from '@/features/home/constants'

type LayoutProps = {}

type Checked = DropdownMenuCheckboxItemProps["checked"]

const Navigation: React.FC<LayoutProps> = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const router = useRouter();
  const pathname = usePathname();

  return (
    <article className="dark w-full h-[60px] text-white bg-transparent fixed z-10 min-[870px]:hidden backdrop-blur flex justify-between p-5 items-center">
      <div className='flex gap-2 items-center cursor-pointer' onClick={() => router.push("/")}>
        <RocketIcon className="h-4 w-4 hover:rotate-12 delay-75" />
        <p className='font-semibold'>
          {personalInfo.name}
        </p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size={'icon'}>
            <HamburgerMenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={cn("dark w-[150px] mr-2 font-sans bg-zinc-950 text-white border-zinc-800")}>
          {menuOptions.map((item, key) => (
            <DropdownMenuCheckboxItem
              key={key}
              checked={pathname === item.path}
              onCheckedChange={setShowStatusBar}
              onClick={() => router.push(item.path)}
            >
              {item.title}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </article>
  )
}

export default Navigation;
