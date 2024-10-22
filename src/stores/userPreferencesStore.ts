import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Decimal, Unit } from "../constants/settings";

interface UserPreferencesState {
  unit: string;
  decimal: string;
  setUnit: (value: boolean) => void;
  setDecimal: (value: boolean) => void;
}

const useUserPreferencesStore = create<UserPreferencesState>()(
  persist(
    (set) => ({
      unit: Unit.Celsius,
      decimal: Decimal.Off,
      setUnit: (value) =>
        set(() => ({
          unit: value ? Unit.Celsius : Unit.Fahrenheit,
        })),
      setDecimal: (value) =>
        set(() => ({
          decimal: value ? Decimal.On : Decimal.Off,
        })),
    }),
    {
      name: "user-preferences",
    }
  )
);

export default useUserPreferencesStore;
