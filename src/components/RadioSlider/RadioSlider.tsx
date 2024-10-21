interface RadioSliderProps {
  value: boolean;
  onChange: (value: boolean) => void;
  leftLabel: string;
  rightLabel: string;
}

export default function RadioSlider({
  value,
  onChange,
  leftLabel,
  rightLabel,
}: RadioSliderProps) {
  return (
    <div className="flex justify-center items-center space-x-6">
      <span className="text-sm font-medium">{leftLabel}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-green-500 transition duration-300 ease-in-out"></div>
        <div className="peer-checked:translate-x-6 peer-checked:bg-green-700 w-5 h-5 bg-white rounded-full absolute left-1 top-0.5 transition-transform duration-300 ease-in-out"></div>
      </label>
      <span className="text-sm font-medium">{rightLabel}</span>
    </div>
  );
}
