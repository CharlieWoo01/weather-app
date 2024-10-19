interface NavigationItemProps {
  icon: JSX.Element;
  label: string;
}

export function NavigationItem({ icon, label }: NavigationItemProps) {
  return (
    <div className="flex flex-col items-center">
      <span data-testid="icon-svg">{icon}</span>
      <p className="text-gray-400 text-xs mt-1">{label}</p>
    </div>
  );
}
