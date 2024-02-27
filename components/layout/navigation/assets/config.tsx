import { RocketIcon , PersonIcon , CubeIcon } from '@radix-ui/react-icons'

export const MenuOptions = [{
     icon :  <PersonIcon className="mr-2 h-4 w-4"/>,
     title : "Profile",
     path : "/"
},
{
     icon :  <CubeIcon className="mr-2 h-4 w-4"/>,
     title : "Works",
     path : "/works"
},
{
     icon :  <RocketIcon className="mr-2 h-4 w-4"/>,
     title : "Posts",
     path : "/posts"
}
]