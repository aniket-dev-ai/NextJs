import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { ModeToggle } from "./components/ThemeToggle.tsx";
import Navbar from "./Pages/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ModeToggle/>
      <Navbar/>
      <App />
    </ThemeProvider>
  </StrictMode>
);
