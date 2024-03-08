import React from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import AppHeader from "./components/AppHeader";

// PAGES
import Dashboard from "./pages/ceo/Dashboard";
import Clients from "./pages/ceo/Clients";
import Stores from "./pages/ceo/Stores";
import Clothing from "./pages/ceo/Clothing";
import Employees from "./pages/ceo/Employees";
import Sales from "./pages/ceo/Sales";
import Company from "./pages/ceo/Company";


function App() {
    return(
    <>
        <AppHeader />
        <Routes>
            
        </Routes>
    </>
    )
}

export default App;

/*
ARCHIVE IMPORTS
import Welcome from "./pages/archive/Welcome";
import Login from "./pages/archive/Login";
import UserCeo from "./pages/archive/UserCeo";
import ShopsCeo from "./pages/archive/ShopsCeo";
*/