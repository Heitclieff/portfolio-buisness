import { InstagramLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaPython, FaSwift } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";

import { ICON_SIZE } from "@/lib/constants";

export const skillIcons: Record<string, React.ReactNode> = {
  React: <FaReact size={ICON_SIZE} />,
  NextJS: <TbBrandNextjs size={ICON_SIZE} />,
  HTML: <FaHtml5 size={ICON_SIZE} />,
  Javascript: <RiJavascriptFill size={ICON_SIZE} />,
  CSS: <FaCss3 size={ICON_SIZE} />,
  NodeJS: <FaNodeJs size={ICON_SIZE} />,
  Python: <FaPython size={ICON_SIZE} />,
  SwiftUI: <FaSwift size={ICON_SIZE} />,
};

export const contactIcons: Record<string, React.ReactNode> = {
  Github: <GitHubLogoIcon scale={ICON_SIZE} />,
  LinkedIn: <LinkedInLogoIcon scale={ICON_SIZE} />,
  Instagram: <InstagramLogoIcon scale={ICON_SIZE} />,
};
