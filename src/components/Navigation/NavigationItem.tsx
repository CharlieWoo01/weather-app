import { Link } from "react-router-dom";
import { WeatherPath } from "../../constants/routes";

interface NavigationItemProps {
  icon: JSX.Element;
  label: string;
}

export function NavigationItem({ icon, label }: NavigationItemProps) {
  return (
    <div>
      <Link
        to={WeatherPath.Home}
        className="flex flex-col items-center space-y-1"
      >
        <span data-testid="icon-svg" className="text-lg md:text-xl">
          {icon}
        </span>
        <p className="text-gray-400 text-xs font-semibold">{label}</p>
      </Link>
    </div>
  );
}
