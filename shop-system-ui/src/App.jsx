// COMPONENTS
import HeaderCeo from "./components/HeaderCeo";
// PAGES
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import UserCeo from "./pages/UserCeo";
import ShopsCeo from "./pages/ShopsCeo";


function App() {
    return(
        <>
            <HeaderCeo selected="shops"/>
            <ShopsCeo />
        </>
    );
}

export default App;