import { FaCity, FaCloudSun, FaCog, FaHome } from "react-icons/fa";

export default function Navigation() {
  return (
    <div className="h-screen w-20 bg-gray-800 flex flex-col items-center py-5 rounded-xl">
      <div className="flex flex-col items-center mb-6">
        <FaHome className="text-gray-400 text-3xl" />
        <p className="text-gray-400 text-xs mt-2">Home</p>
      </div>
      <div className="flex flex-col items-center space-y-6 mt-5">
        <div className="flex flex-col items-center">
          <FaCloudSun className="text-gray-400 text-3xl" />
          <p className="text-gray-400 text-xs mt-2">Weather</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCity className="text-gray-400 text-3xl" />
          <p className="text-gray-400 text-xs mt-2">Favourites</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCog className="text-gray-400 text-3xl" />
          <p className="text-gray-400 text-xs mt-2">Settings</p>
        </div>
      </div>
      <div className="mt-auto mb-5"></div>
    </div>
  );
}
