import React from "react";

function Welcome() {
    return (
        <>
            <head>
                <h1>Welcome to the future of shop user interface</h1>
                <h3>Choose what you want to do:</h3>
            </head>
            <section className="buttons">
                <Button title = "Company Manager" isShopDependant={false}/>
                <Button title = "Shop Manager" isShopDependant={true}/>
                <Button title = "Cash Register" isShopDependant={true}/>
            </section>
        </>
    );
}

export default Welcome;