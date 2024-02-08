import Welcome from "./pages/Welcome";
import HeaderCeo from "./components/HeaderCeo";
import Login from "./pages/Login";
import UserCeo from "./pages/UserCeo";


function App() {
    return(
        <>
            <HeaderCeo selected="user"/>
            <UserCeo />
        </>
    );
}

export default App;