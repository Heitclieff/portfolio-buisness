import PersonIcon from '@mui/icons-material/Person'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { MENU_ICON_CLASS } from '@/lib/constants'

export const menuIcons: Record<string, React.ReactNode> = {
  Profile: <PersonIcon sx={{ fontSize: 16 }} />,
  Works: <ViewInArIcon sx={{ fontSize: 16 }} />,
  Posts: <RocketLaunchIcon sx={{ fontSize: 16 }} />,
};
