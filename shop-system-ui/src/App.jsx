// COMPONENTS
import AppHeader from "./components/AppHeader";
// PAGES
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import UserCeo from "./pages/ceo/UserCeo";
import ShopsCeo from "./pages/ceo/ShopsCeo";
import Dashboard from "./pages/ceo/Dashboard";


function App() {
    return(
        <>
            <Dashboard />
            {/*</><HeaderCeo selected="user"/>
            <UserCeo />*/}
        </>
    );
}

export default App;