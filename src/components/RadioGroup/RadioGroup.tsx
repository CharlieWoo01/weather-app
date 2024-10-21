import RadioSlider from "../RadioSlider";

type RadioGroupProps = {
  options: { labelLeft: string; labelRight: string }[];
  values: any[];
  onChange: (index: number, value: boolean) => void;
};

export default function RadioGroup({
  options,
  values,
  onChange,
}: RadioGroupProps) {
    console.log(values);

  return (    
    <div className="space-y-4">
      {options.map((option, index) => (
        <RadioSlider
          key={index}
          leftLabel={option.labelLeft}
          rightLabel={option.labelRight}
          value={values[index]}
          onChange={(newValue) => onChange(index, newValue)}
        />
      ))}
    </div>
  );
}
