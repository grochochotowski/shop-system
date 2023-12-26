import Button from "./components/Button";

function App() {
    return(
        <main>
            <h1>Welcome to the future of shop user interface</h1>
            <h3>Choose what you want to do:</h3>
            <div className="buttons">
                <Button title = "Company Manager"/>
                <Button title = "Shop Manager"/>
                <Button title = "Cash Register"/>
            </div>
        </main>
    );
}

export default App;