import { create } from "zustand";

interface UserPreferencesState {
  unit: string;
  decimal: string;
  setUnit: (value: boolean) => void;
  setDecimal: (value: boolean) => void;
}

const useUserPreferencesStore = create<UserPreferencesState>((set) => ({
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
}));

export default useUserPreferencesStore;
