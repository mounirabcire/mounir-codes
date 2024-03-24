import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DarkeModeProvider } from "./contexts/DarkModeContexte.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <DarkeModeProvider>
                <App />
            </DarkeModeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
