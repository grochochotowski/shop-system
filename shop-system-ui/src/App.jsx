import Button from "./components/Button";

function App() {
    return(
        <main>
            <h1>Welcome to the future of shop user interface</h1>
            <h3>Choose what you want to do:</h3>
            <div className="buttons">
                <Button title = "Company Manager" isShopDependant={false}/>
                <Button title = "Shop Manager" isShopDependant={true}/>
                <Button title = "Cash Register" isShopDependant={true}/>
            </div>
        </main>
    );
}

export default App;