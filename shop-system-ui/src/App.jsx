import React, {Suspense, lazy} from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Fallback from './Fallback';
import AppHeader from "./components/AppHeader";

// PAGES
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
        <Fallback />
        <AppHeader />
        <Routes>
            <Route path="/dashboard" element={
                <Suspense fallback={<Fallback />}>
                    <Dashboard />
                </Suspense>
            }/>
            <Route path="/clients" element={
                <Suspense fallback={<Fallback />}>
                    <Clients />
                </Suspense>
            }/>
            <Route path="/stores" element={
                <Suspense fallback={<Fallback />}>
                    <Stores />
                </Suspense>
            }/>
            <Route path="/clothing" element={
                <Suspense fallback={<Fallback />}>
                    <Clothing />
                </Suspense>
            }/>
            <Route path="/employees" element={
                <Suspense fallback={<Fallback />}>
                    <Employees />
                </Suspense>
            }/>
            <Route path="/sales" element={
                <Suspense fallback={<Fallback />}>
                    <Sales />
                </Suspense>
            }/>
            <Route path="/company" element={
                <Suspense fallback={<Fallback />}>
                    <Company />
                </Suspense>
            }/>
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