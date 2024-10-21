import { FaCity, FaCloudSun, FaCog, FaHome } from "react-icons/fa";
import { NavigationItem } from "./NavigationItem";
import { WeatherPath } from "../../constants/routes";

export function MobileNavigation() {
  return (
    <div className="w-full h-16 bg-gray-800 flex items-center justify-around py-5">
      <NavigationItem
        icon={<FaHome className="text-gray-400 text-3xl" />}
        label="Home"
        link={WeatherPath.Home}
      />
      {/* <NavigationItem
        icon={<FaCloudSun className="text-gray-400 text-3xl" />}
        label="Weather"
      />
      <NavigationItem
        icon={<FaCity className="text-gray-400 text-3xl" />}
        label="Favourites"
      /> */}
      <NavigationItem
        icon={<FaCog className="text-gray-400 text-3xl" />}
        label="Settings"
        link={WeatherPath.Settings}
      />
    </div>
  );
}
