import React from "react";

// COMPONENTS
import AppHeader from "./components/AppHeader";

// PAGES
import Dashboard from "./pages/ceo/Dashboard";


function App() {
    return(
        <>
            <AppHeader />
            <Dashboard />
        </>
    );
}

export default App;


/*
ARCHIVE IMPORTS
import Welcome from "./pages/archive/Welcome";
import Login from "./pages/archive/Login";
import UserCeo from "./pages/archive/UserCeo";
import ShopsCeo from "./pages/archive/ShopsCeo";
*/