import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./modules/router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./modules/i18n/setup";
import mixpanel from 'mixpanel-browser';

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { MenuProvider } from "./modules/router/contexts/menuContext";
import { ThemProvider } from "./modules/common/contexts/ThemeContext";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

mixpanel.init('4c439a95160e77604306f6937fa9a487', {debug: true, track_pageview: true, persistence: 'localStorage'});

const queryClient = new QueryClient();

function App() {
  document.documentElement.classList.add("dark");
  mixpanel.identify('USER_ID')
  mixpanel.track('Sign Up', {
    'Signup Type': 'Referral'
  })

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
