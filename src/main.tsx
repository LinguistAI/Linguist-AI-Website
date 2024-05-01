import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import NotFound from "./pages/error/NotFound.tsx";
import LandingPage from "./pages/landing/index.tsx";
import Layout from "./pages/layout.tsx";
import OurTeam from "./pages/our-team/index.tsx";
import Reports from "./pages/reports/Reports.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      // { path: "/about-us", element: <AboutUs /> },
      { path: "/reports", element: <Reports /> },
      { path: "/team", element: <OurTeam /> },
      { path: "/privacy", element: <PrivacyPolicy /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
