"use client"
 
import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { fontSans } from "@/components/layout/roots/rootlayout"
import { comboboxData } from "@/features/works/assets/config"

type containerProps = { 
  value : string 
  setValue : any
}

const FilterBox : React.FC <containerProps> = ({value , setValue}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="dark">
      <Popover open={open}  onOpenChange={setOpen}>
        <PopoverTrigger asChild >
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="max-w-[200px] justify-between"
          >
            {value
              ? comboboxData.frameworks.find((framework) => framework.value === value)?.label || comboboxData.lang.find((lang) => lang.value === value)?.label
              : "Select framework..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("dark w-[200px] border-zinc-800 rounded-lg font-sans p-0 ", fontSans.variable)}>
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9 " />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup heading = "Languages">
              {comboboxData.lang.map((lang) => (
                <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {lang.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === lang.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading = "Frameworks">
              {comboboxData.frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {framework.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
    
  )
}

export default FilterBox;