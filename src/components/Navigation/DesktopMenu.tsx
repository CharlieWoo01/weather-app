import { FaCity, FaCloudSun, FaCog, FaHome } from "react-icons/fa";
import { NavigationItem } from "./NavigationItem";

export function DesktopNavigation() {
  return (
    <div className="h-screen w-20 bg-gray-800 flex flex-col items-center py-5">
      <NavigationItem
        icon={<FaHome className="text-gray-400 text-3xl" />}
        label="Home"
      />
      <div className="flex flex-col items-center space-y-6 mt-5">
        <NavigationItem
          icon={<FaCloudSun className="text-gray-400 text-3xl" />}
          label="Weather"
        />
        <NavigationItem
          icon={<FaCity className="text-gray-400 text-3xl" />}
          label="Favourites"
        />
        <NavigationItem
          icon={<FaCog className="text-gray-400 text-3xl" />}
          label="Settings"
        />
      </div>
    </div>
  );
}
