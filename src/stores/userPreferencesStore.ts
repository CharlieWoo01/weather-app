import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserPreferencesState {
  unit: string;
  decimal: string;
  setUnit: (value: boolean) => void;
  setDecimal: (value: boolean) => void;
}

const useUserPreferencesStore = create<UserPreferencesState>()(
  persist(
    (set) => ({
      unit: "Celsius",
      decimal: "On",
      setUnit: (value) =>
        set(() => ({
          unit: value ? "Celsius" : "Fahrenheit",
        })),
      setDecimal: (value) =>
        set(() => ({
          decimal: value ? "On" : "Off",
        })),
    }),
    {
      name: "user-preferences",
    }
  )
);

export default useUserPreferencesStore;
