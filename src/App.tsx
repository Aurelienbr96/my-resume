import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./modules/router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./modules/i18n/setup";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { MenuProvider } from "./modules/router/contexts/menuContext";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-montserrat scroll-smooth whitespace-pre-line">
      <MenuProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MenuProvider>
    </div>
  );
}

export default App;
