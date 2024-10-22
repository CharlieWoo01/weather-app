import { Card, RadioGroup } from "../../components";
import { Decimal, Unit } from "../../constants/settings";
import useUserPreferencesStore from "../../stores/userPreferencesStore";

export default function Settings() {
  const { unit, decimal, setUnit, setDecimal } = useUserPreferencesStore();

  const handleRadioChange = (index: number, newValue: boolean) => {
    if (index === 0) {
      setUnit(newValue);
    } else if (index === 1) {
      setDecimal(newValue);
    }
  };

  const settingsText = `Unit: ${unit}, Decimal: ${decimal}`;

  return (
    <div className="flex flex-col items-center w-full flex-grow md:ml-20 mb-16 md:mb-0">
      <div className="w-full flex justify-center items-center my-4">
        <Card title="Settings" className="w-full max-w-2xl text-center">
          <div className="p-5">
            <div className="flex flex-col items-center">
              <RadioGroup
                options={[
                  { labelLeft: Unit.Fahrenheit, labelRight: Unit.Celsius },
                  { labelLeft: Decimal.Off, labelRight: Decimal.On },
                ]}
                values={[unit === Unit.Celsius, decimal === Decimal.On]}
                onChange={handleRadioChange}
              />
              <p className="mt-4">{settingsText}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
