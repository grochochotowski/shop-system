import Welcome from "./pages/Welcome";
import CompanyHeader from "./components/CompanyHeader";
import Login from "./pages/Login";
import UserCeo from "./pages/UserCeo";


function App() {
    return(
        <>
            <CompanyHeader selected="user"/>
            <UserCeo />
        </>
    );
}

export default App;