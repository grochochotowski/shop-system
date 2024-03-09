import React, {Suspense, lazy} from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import AppHeader from "./components/AppHeader";

// PAGES
import Fallback from './Fallback';
/*import Dashboard from "./pages/ceo/Dashboard";
import Clients from "./pages/ceo/Clients";
import Stores from "./pages/ceo/Stores";
import Clothing from "./pages/ceo/Clothing";
import Employees from "./pages/ceo/Employees";
import Sales from "./pages/ceo/Sales";
import Company from "./pages/ceo/Company";*/
const Dashboard = lazy(() => import("./pages/ceo/Dashboard"))
const Clients = lazy(() => import("./pages/ceo/Clients"))
const Stores = lazy(() => import("./pages/ceo/Stores"))
const Clothing = lazy(() => import("./pages/ceo/Clothing"))
const Employees = lazy(() => import("./pages/ceo/Employees"))
const Sales = lazy(() => import("./pages/ceo/Sales"))
const Company = lazy(() => import("./pages/ceo/Company"))


function App() {
    return(
    <>
        <AppHeader />
        <Routes>
            <Route path="/dashboard" element={
                <Suspense fallback={<Fallback />}>
                    <Dashboard />
                </Suspense>
            }/>
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