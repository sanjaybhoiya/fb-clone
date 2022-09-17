import { FaFacebook } from "react-icons/fa";
import {
   
    
    FlagIcon,
    PlayIcon,
    ShoppingCartIcon,
    MagnifyingGlassIcon,
    UserGroupIcon,
    
} from "@heroicons/react/24/outline";

import {
    BellIcon,
    ChatBubbleBottomCenterIcon,
    ChevronDownIcon,
    HomeIcon,
   
    Squares2X2Icon,
   
} from "@heroicons/react/20/solid";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
      <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
          
          
          {/* headerLeft */}
          {/* logo */}
          <div className="flex items-center">
              <FaFacebook className="text-blue-600 h-10 w-10"/>           
            

          {/* search */}

          <div className=" p-2 ml-2 flex items-center rounded-full bg-gray-100">
              <MagnifyingGlassIcon className=" h-6 text-gray-500" />

              <input type="text"
                  placeholder="Search"
                  className="hidden md:inline-flex bg-transparent ml-2 items-center outline-none placeholder-gray-500 flex-shrink"
              
                  />
                  
             </div>
          </div>
          


          {/* headerCenter */}

          <div className="flex justify-center flex-grow">
              <div className="flex space-x-6 md:space-x-2 text-gray-400">
                  <HeaderIcon Icon={HomeIcon } />
                  <HeaderIcon Icon={ FlagIcon } />
                  <HeaderIcon Icon={PlayIcon } />
                  <HeaderIcon Icon={ ShoppingCartIcon } />
                  <HeaderIcon Icon={UserGroupIcon } />
                  

              </div>
          </div>

          {/* header Right */}

          <div className="flex items-center sm:space-x-2 justify-end">
              <div className="flex space-x-8 md:space-x-2">
                  
                 
                  <Squares2X2Icon className="icon"/>
                <ChatBubbleBottomCenterIcon className="icon"/>
                  <BellIcon className="icon"/>
                  <ChevronDownIcon className="icon"/>
                  
          </div>
          </div>
    </div>
  )
}

export default Header