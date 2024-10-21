import { ReactNode } from "react";
import { DesktopNavigation } from "../../components/Navigation/DesktopMenu";
import { MobileNavigation } from "../../components/Navigation/MobileNavigation";
import { Spinner } from "../../components";
import { useIsFetching } from "@tanstack/react-query";

interface AppWrapperProps {
  children: ReactNode | ReactNode[];
}

export function AppWrapper({ children }: AppWrapperProps) {
  const isFetching = useIsFetching();

  return (
    <div>
      {isFetching > 0 && <Spinner />}
      <div className="min-h-screen bg-gray-900 flex flex-col md:flex-row">
        {/* Desktop Navigation/medium screens and up) */}
        <div className="hidden md:flex md:flex-col md:w-20 md:h-screen md:bg-gray-800 md:fixed md:top-0 md:left-0 md:py-5">
          <DesktopNavigation />
        </div>
        {children}

        {/* Mobile Navigation (visible on small screens) */}
        <div className="fixed bottom-0 left-0 w-full md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}
