/* eslint-disable react-refresh/only-export-components */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "../modules/common/contexts/ThemeContext";

interface CustomRenderOptions {
  isDarkMode?: boolean;
  handleOnChange?: () => void;
  route?: string; // If you need to test specific routes
}

export const customRender = (
  component: React.ReactNode,
  options?: CustomRenderOptions,
) => {
  const queryClient = new QueryClient();
  const { isDarkMode = false, handleOnChange = jest.fn() } = options || {};
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ isDarkMode, handleOnChange }}>
        <BrowserRouter>{component}</BrowserRouter>
      </ThemeContext.Provider>
    </QueryClientProvider>,
  );
};
export * from "@testing-library/react";
export { customRender as render };
