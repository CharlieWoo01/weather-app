import { FaCog, FaHome } from "react-icons/fa";
import { WeatherPath } from "../../constants/routes";
import NavigationItem from "../NavigationItem";

export default function DesktopNavigation() {
  return (
    <div className="h-screen w-20 bg-gray-800 flex flex-col items-center py-5">
      <NavigationItem
        icon={<FaHome className="text-gray-400 text-3xl" />}
        label="Home"
        link={WeatherPath.Home}
      />
      <div className="flex flex-col items-center space-y-6 mt-5">
        <NavigationItem
          icon={<FaCog className="text-gray-400 text-3xl" />}
          label="Settings"
          link={WeatherPath.Settings}
        />
      </div>
    </div>
  );
}
