import React, {Suspense, lazy} from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Fallback from './components/Fallback';
import AppHeader from "./components/AppHeader";

// PAGES
const Dashboard = lazy(() => import("./pages/ceo/Dashboard"))

const Clients = lazy(() => import("./pages/ceo/clients/Clients"))
const ClientsAdd = lazy(() => import("./pages/ceo/clients/ClientsAdd"))
const ClientsDetails = lazy(() => import("./pages/ceo/clients/ClientsDetails"))

const Stores = lazy(() => import("./pages/ceo/stores/Stores"))
const StoresAdd = lazy(() => import("./pages/ceo/stores/StoresAdd"))
const StoresDetails = lazy(() => import("./pages/ceo/stores/StoresDetails"))

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


            <Route path="/clients" element={
                <Suspense fallback={<Fallback />}>
                    <Clients />
                </Suspense>
            }/>
            <Route path="/clients/add" element={
                <Suspense fallback={<Fallback />}>
                    <ClientsAdd />
                </Suspense>
            }/>
            <Route path="/clients/details/:id" element={
                <Suspense fallback={<Fallback />}>
                    <ClientsDetails />
                </Suspense>
            }/>



            <Route path="/stores" element={
                <Suspense fallback={<Fallback />}>
                    <Stores />
                </Suspense>
            }/>
            <Route path="/stores/add" element={
                <Suspense fallback={<Fallback />}>
                    <StoresAdd />
                </Suspense>
            }/>
            <Route path="/stores/details/:id" element={
                <Suspense fallback={<Fallback />}>
                    <StoresDetails />
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