import Button from "../components/Button";
import React, {useState, useEffect} from "react";
import "../styles/welcome.css";

function Welcome() {

    const [sectionHeight, setSectionHeight] = useState(0)

    useEffect(() => {
        function watchHeight() {
            let headerHeight = document.getElementById("header").offsetHeight;
            let sectionHeight = window.innerHeight - headerHeight - 1;
            setSectionHeight(sectionHeight);
        }

        window.addEventListener("resize", watchHeight)
        watchHeight();

        return (() => {
            window.removeEventListener("resize", watchHeight)
        })
    }, [])

    const sectionStyle = {height: `${sectionHeight}px`};

    return (
        <>
            <header id="header">
                <h1>Welcome to the future of shop interface</h1>
                <h2>Choose what you want to do:</h2>
            </header>
            <section className = "section" style = {sectionStyle}>
                <Button title = "Company Manager" isShopDependant={false} img="company.jpg"/>
                <Button title = "Shop Manager" isShopDependant={true} img="shop.jpg"/>
                <Button title = "Cash Register" isShopDependant={true} img="cash-machine.jpg"/>
            </section>
        </>
    );
}

export default Welcome;