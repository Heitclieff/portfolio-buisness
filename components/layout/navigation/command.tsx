'use client'
import React from 'react'
import {
Command,
CommandDialog,
CommandEmpty,
CommandGroup,
CommandInput,
CommandItem,
CommandList,
CommandSeparator,
CommandShortcut,
} from "@/components/ui/command"
import { MenuOptions } from './assets/config'
import { useRouter } from 'next/router'
type containerProps = { 

}

const CommandNavigate : React.FC <containerProps> = () => {
     const router = useRouter();
  return (
     <div className={`pl-2 pr-2 min-[870px]:block hidden`}>
          <Command>
               <CommandInput placeholder="Type a command or search..." />
               <CommandList>
               <CommandEmpty>No results found.</CommandEmpty>
               <CommandGroup heading="Suggestions" >
                    {MenuOptions?.map((item , key) => {
                         const cursor = router.pathname && router.pathname == item.path ? "⌘N"  : null
                         return(
                              <CommandItem onSelect={() => router.push(`${item.path}`)} key = {key}>            
                                   {item.icon}
                                   <p>{item.title}</p>
                                   {cursor &&
                                        <CommandShortcut>
                                           {cursor}
                                         </CommandShortcut>
                                   }       
                           
                              </CommandItem>
                         )
                         
                    })}
               </CommandGroup>
               <CommandSeparator />
               </CommandList>
          </Command>
     </div>
    
  )
}

export default CommandNavigate;
