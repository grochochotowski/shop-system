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
import Company from "./pages/ceo/COmpany";


function App() {
    return(
    <>
        <AppHeader />
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/clients" element={<Clients />}/>
            <Route path="/stores" element={<Stores />}/>
            <Route path="/clothing" element={<Clothing />}/>
            <Route path="/employees" element={<Employees />}/>
            <Route path="/sales" element={<Sales />}/>
            <Route path="/company" element={<Company />}/>
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