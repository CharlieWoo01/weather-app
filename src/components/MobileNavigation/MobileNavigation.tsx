import { FaCog, FaHome } from "react-icons/fa";
import { WeatherPath } from "../../constants/routes";
import NavigationItem from "../NavigationItem";

export default function MobileNavigation() {
  return (
    <div className="w-full h-16 bg-gray-800 flex items-center justify-around py-5">
      <NavigationItem
        icon={<FaHome className="text-gray-400 text-3xl" />}
        label="Home"
        link={WeatherPath.Home}
      />
      <NavigationItem
        icon={<FaCog className="text-gray-400 text-3xl" />}
        label="Settings"
        link={WeatherPath.Settings}
      />
    </div>
  );
}
