import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"

import global_eng from "./translations/eng/global.json";
import global_pol from "./translations/pol/global.json";
import i18next from "i18next";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);