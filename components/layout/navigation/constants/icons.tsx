import { RocketIcon, PersonIcon, CubeIcon } from '@radix-ui/react-icons'
import { MENU_ICON_CLASS } from '@/lib/constants'

export const menuIcons: Record<string, React.ReactNode> = {
  Profile: <PersonIcon className={MENU_ICON_CLASS} />,
  Works: <CubeIcon className={MENU_ICON_CLASS} />,
  Posts: <RocketIcon className={MENU_ICON_CLASS} />,
};
