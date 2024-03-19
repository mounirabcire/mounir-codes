import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MouseProvider } from "./contexts/MouseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <MouseProvider>
                <App />
            </MouseProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
