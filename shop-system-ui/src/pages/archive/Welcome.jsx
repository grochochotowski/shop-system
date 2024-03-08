import Button from "../../components/archive/Button";
import React from "react";
import "../styles/welcome.css";

function Welcome() {

    return (
        <div className="welcome">
            <header>
                <h4>Choose your option</h4>
            </header>
            <section>
                <Button title = "Company Manager" isShopDependant={false} img="company.jpg"/>
                <Button title = "Shop Manager" isShopDependant={true} img="shop.jpg"/>
                <Button title = "Cash Register" isShopDependant={true} img="cash-machine.jpg"/>
            </section>
        </div>
    );
}

export default Welcome;