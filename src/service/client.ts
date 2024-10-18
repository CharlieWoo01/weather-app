import axios from "axios";

const clientConfig = {
  baseURL: import.meta.env.VITE_WEATHER_API_BASE_URL,
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY,
  },
} as const;

const client = axios.create(clientConfig);

export default client;

// todo: const as const object literal and array you can define it as this
// todo: axe
// todo: e2e testing for puppeteer? Performance and accessibility