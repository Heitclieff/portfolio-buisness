import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { personalInfo } from '@/features/home/constants'
import { useRouter } from 'next/router'

const UserBox: React.FC = () => {
  const router = useRouter();
  return (
    <div className={`min-[870px]:flex w-full ${router.asPath && router.asPath === '/' ? "flex" : "hidden"} pt-4 pl-4 pr-4 min-[870px]:flex-col  items-center justify-center gap-5`}>
      <div>
        <Avatar className='w-[110px] h-[110px] min-[870px]:w-[130px] min-[870px]:h-[130px] object-cover'>
          <AvatarImage className='object-cover w-[200px] h-[150px]' src={personalInfo.profileImage} />
          <AvatarFallback>KP</AvatarFallback>
        </Avatar>
      </div>
      <div className='min-[870px]:text-center p-2 text-white'>
        <h1 className='min-[870px]:text-xl min-[400px]:text-xl font-semibold'>{personalInfo.name}</h1>
        <Badge>
          <p>{personalInfo.roles}</p>
        </Badge>
      </div>

    </div>
  )
}
export default UserBox;