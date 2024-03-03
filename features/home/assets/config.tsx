export const Personal_Information = {
     name : "Kittituch Pulprasert",
     introduction : "I’m Kittituch pulprasert , I’m looking for an organization to become an apprentice to increase my skill. I’m interested in experience for work with other people in the organization and in field study experiences.",
     profile_image : "./profile.jpg",
     roles : "Fullstack Developer",
     link : "https://github.com/Heitclieff",

}

export const BioData = [{
     years : 2020, 
     title :"BANGKOK UNIVERSITY",
     description : "Bachelor's degree in Information Technology and Innovation Information Technology at Bangkok University. GPA 3.08",
},
{
     years : 2014, 
     title : "SAIPANYA RANGSIT SCHOOL",
     description : "Students in Thai Society and English Majors in Senior High School.\nStudents in Junior High School without majors. GPA 3.26",
},
{
     years : 2023 , 
     title : "BUMIT",
     description : "Join BUMIT lab as part of Aircraft Recognition learning program at Bangkok University.",
}]

const ICON_SIZE = 35;

import { InstagramLogoIcon , GitHubLogoIcon , LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaReact, FaHtml5 , FaCss3 , FaNodeJs , FaPython ,FaSwift} from "react-icons/fa";
import { TbBrandNextjs , TbBrandReactNative  } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";

export const Contact = [{
     icon : <GitHubLogoIcon scale={ICON_SIZE}/>,
     title : "@HeitCleiff",
     link : "https://github.com/Heitclieff",
},
{
     icon : <LinkedInLogoIcon scale={ICON_SIZE}/>,
     title : "@Kittituch Pulprasert",
     link : "https://www.linkedin.com/in/kittituch-pulprasert-75aa95292/",
},
{
     icon : <InstagramLogoIcon scale={ICON_SIZE}/>,
     title : "@ice.zk",
     link : "https://www.instagram.com/ice.zk/",
}]



export const SkillData = [{
     title : "React",
     color : "text-cyan-400",
     icon : <FaReact size= {ICON_SIZE}/>
},
{
     title : "NextJS",
     color : "text-slate-50",
     icon : <TbBrandNextjs size= {ICON_SIZE}/>
},
{
     title : "HTML",
     color : "text-red-500",
     icon : <FaHtml5 size= {ICON_SIZE}/>
},
{
     title : "Javascript",
     color : "text-[#fcd34d]",
     icon : <RiJavascriptFill size= {ICON_SIZE}/>
},
{
     title : "CSS",
     color : "text-[#0284c7]",
     icon : <FaCss3 size= {ICON_SIZE}/>
},
{
     title : "NodeJS",
     color : "text-[#059669]",
     icon : <FaNodeJs size= {ICON_SIZE}/>
},
{
     title : "Python",
     color : "text-[#0ea5e9]",
     icon : <FaPython size= {ICON_SIZE}/>
},
{
     title : "SwiftUI",
     color : "text-[#fb923c]",
     icon : <FaSwift size= {ICON_SIZE}/>
}]
