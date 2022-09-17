import { 
ChevronDownIcon,
ShoppingBagIcon,
UserGroupIcon,
} from '@heroicons/react/24/outline';

import {
    CalendarIcon,
    ClockIcon,
    ComputerDesktopIcon,
    UsersIcon,

} from '@heroicons/react/20/solid';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
      <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
          
          <SidebarRow Icon={UsersIcon} title="friends" />
          <SidebarRow Icon={UserGroupIcon} title="Groups" />
          <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
          <SidebarRow Icon={ComputerDesktopIcon} title="watch" />
          <SidebarRow Icon={CalendarIcon} title="Events" />
          <SidebarRow Icon={ClockIcon} title="Memories" />
          <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  )
}

export default Sidebar