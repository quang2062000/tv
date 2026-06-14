import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import AppProvider from "./app/providers/AppProvider";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);