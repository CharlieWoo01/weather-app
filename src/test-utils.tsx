import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { BrowserRouter } from "react-router-dom";

export const renderComponentWithProviders = (
  children: ReactNode | ReactNode[]
) => {
  return render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
};
