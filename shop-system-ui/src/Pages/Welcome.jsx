import Button from "../components/Button";
import React from "react";

function Welcome() {
    return (
        <>
            <header>
                <h1>Welcome to the future of shop interface</h1>
                <h2>Choose what you want to do:</h2>
            </header>
            <section className="buttons">
                <Button title = "Company Manager" isShopDependant={false}/>
                <Button title = "Shop Manager" isShopDependant={true}/>
                <Button title = "Cash Register" isShopDependant={true}/>
            </section>
        </>
    );
}

export default Welcome;