import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { asset } from "./lib/asset.js";

const b = (path) => asset(path);

const bgStyle = document.createElement("style");
bgStyle.textContent = `
.home-hero__bg {
  background-image:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)),
    url("${b("images/oMLPWhAXnb3SOMAeNCwqhvzYZ8M.png")}");
}
.home-projects__bg {
  background-image: url("${b("images/PVWlMPZtnOVol7HIQcj1CparVg.png")}");
}
.home-door__scene {
  background-image: url("${b("images/F0demdaqV8J76Vl8rLM7njXiG7A.png")}");
}
.home-essay__visual {
  background-image:
    linear-gradient(180deg, rgba(232, 168, 187, 0.2), rgba(232, 168, 187, 0.55)),
    url("${b("images/PVWlMPZtnOVol7HIQcj1CparVg.png")}");
}
.gallery-room {
  background-image: url("${b("images/De0X4dSxNr48OgpkXnFT8J4cLI.png")}");
}
.personal-page {
  background-image:
    linear-gradient(180deg, rgba(135, 206, 235, 0.35), rgba(255, 255, 255, 0.2) 55%, #fff),
    url("${b("images/xJhFfmGTs9BNZPwogIOmOiqnSA.png")}");
}
`;
document.head.appendChild(bgStyle);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
