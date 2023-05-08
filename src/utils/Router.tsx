import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";

const Home = lazy(() => import("../Pages/Home"));
const Services = lazy(() => import("../Pages/Services"));
const Team = lazy(() => import("../Pages/Team"));
const About = lazy(() => import("../Pages/About"));
const Contact = lazy(() => import("../Pages/Contact"));

const LazyHome = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>
);

const LazyServices = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Services />
  </Suspense>
);

const LazyTeam = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Team />
  </Suspense>
);

const LazyAbout = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <About />
  </Suspense>
);

const LazyContact = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Contact />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LazyHome />,
      },
      {
        path: "/services/",
        element: <LazyServices />,
      },
      {
        path: "/team",
        element: <LazyTeam />,
      },
      {
        path: "/about",
        element: <LazyAbout />,
      },
      {
        path: "/contact",
        element: <LazyContact />,
      },
    ],
  },
]);
