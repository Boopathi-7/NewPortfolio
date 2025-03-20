import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Portfolio from "./pages/Portfolio";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Service from "./pages/Service";
import Details from "./components/Details";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/education",
        element: <Service />,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      
      
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
