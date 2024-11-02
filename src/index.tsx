import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  /** Put your mantine theme override here */
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
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MantineProvider>
  </BrowserRouter>
);
