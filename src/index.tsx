import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import ProtectedRouteUser, { GuestRoute } from "./auth/ProtectedRoute";
import EntryPage from "./pages/EntryPage";
const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <ProtectedRouteUser>
        <App />
      </ProtectedRouteUser>
    ),
  },

  {
    path: "/Entry/*",
    element: (
      <GuestRoute>
        <EntryPage />
      </GuestRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme} defaultColorScheme="light">
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </MantineProvider>
);
