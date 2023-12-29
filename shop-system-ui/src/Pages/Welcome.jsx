import Button from "../components/Button";
import React from "react";
import "../styles/welcome.css";

function Welcome() {
    return (
        <>
            <header>
                <h1>Welcome to the future of shop interface</h1>
                <h2>Choose what you want to do:</h2>
            </header>
            <section>
                <Button title = "Company Manager" isShopDependant={false} img="company.jpg"/>
                <Button title = "Shop Manager" isShopDependant={true} img="shop.jpg"/>
                <Button title = "Cash Register" isShopDependant={true} img="cash-machine.jpg"/>
            </section>
        </>
    );
}

export default Welcome;