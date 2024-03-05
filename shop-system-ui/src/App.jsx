// COMPONENTS
import HeaderCeo from "./components/HeaderCeo";
import Header from "./components/Header";
// PAGES
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import UserCeo from "./pages/ceo/UserCeo";
import ShopsCeo from "./pages/ceo/ShopsCeo";
import Dashboard from "./pages/ceo/Dashboard";


function App() {
    return(
        <>
            <Header />
            <Dashboard />
            {/*</><HeaderCeo selected="user"/>
            <UserCeo />*/}
        </>
    );
}

export default App;