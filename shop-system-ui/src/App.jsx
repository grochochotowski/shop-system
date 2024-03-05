// COMPONENTS
import HeaderCeo from "./components/HeaderCeo";
// PAGES
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import UserCeo from "../pages/company/UserCeo";
import ShopsCeo from "../pages/company/ShopsCeo";


function App() {
    return(
        <>
            <HeaderCeo selected="user"/>
            <UserCeo />
        </>
    );
}

export default App;