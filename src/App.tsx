import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./modules/router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./modules/i18n/setup";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { MenuProvider } from "./modules/router/contexts/menuContext";
import { ThemProvider } from "./modules/common/contexts/ThemeContext";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

const queryClient = new QueryClient();

function App() {
  document.documentElement.classList.add("dark");

  return (
    <ThemProvider>
      <MenuProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MenuProvider>
    </ThemProvider>
  );
}

export default App;
