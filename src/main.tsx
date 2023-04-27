import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./utils/Router";
import { RouterProvider } from "react-router-dom";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.refresh();
AOS.refreshHard();

const apiPublicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_API_KEY;

emailjs.init(apiPublicKey);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
