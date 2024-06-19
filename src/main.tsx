import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import IpInfoContextProvider from "./contexts/ipInfoContext.tsx";
import App from "./App.tsx";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <IpInfoContextProvider>
      <App />
    </IpInfoContextProvider>
  </ChakraProvider>
);
