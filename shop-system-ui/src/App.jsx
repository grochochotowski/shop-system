import Welcome from "./pages/Welcome";
import CompanyHeader from "./components/CompanyHeader";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";


function App() {
    return(
        <>
            <CompanyHeader selected="create-user"/>
            <CreateUser />
        </>
    );
}

export default App;