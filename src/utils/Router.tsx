import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Team from "../Pages/Team";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services/",
        element: <Services />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
