enum GeneralPath {
  Index = "/weather-app/",
}

export enum WeatherPath {
  Home = GeneralPath.Index,
  Settings = `${GeneralPath.Index}/settings`,
}
