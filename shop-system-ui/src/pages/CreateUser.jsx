import React, {useState, useEffect} from "react";
import CompanyHeader from "../components/CompanyHeader";
import "../styles/createUser.css"

function CreateUser() {

    const [position, setPosition] = useState("");
    const [containerHeight, setContainerHeight] = useState("");

    useEffect(() => {
        const updateContainerHeight = () => {
            const header = document.getElementsByTagName('header')[0]
            const headerHeight = header.getBoundingClientRect().height;
            setContainerHeight(`calc(100% - ${headerHeight}px)`);
        };

        window.addEventListener('resize', updateContainerHeight);

        updateContainerHeight();

        return () => {
          window.removeEventListener('resize', updateContainerHeight);
        };
      }, []); 

    function setNewPosition(e) {
        if (e.target.value === "choose") setPosition("");
        else setPosition(e.target.value);
    }

    function RenderShopIdInput() {
        if (["manager", "deputy-manager", "decorator", "shop-assistant"].includes(position))
            return <input type="text" className="add-shopID" placeholder="ShopID"/>
        return null;
    }   

    return (
        <>
            <CompanyHeader selected="create-user"/>
            <div className="container" style={{ height: containerHeight }}>
                <section className="create-user-form">
                    <input type="text" className="add-1st-name" placeholder="First Name" />
                    <input type="text" className="add-2nd-name" placeholder="Second Name" />
                    <input type="text" className="add-name" placeholder="First Name"/>
                    <input type="text" className="add-login" placeholder="Login"/>
                    <input type="password" className="add-password" placeholder="Password"/>

                    <select name="position" id="position" onChange={setNewPosition}>
                        <option value="choose">-- Choose Position --</option>
                        <option value="ceo">CEO</option>
                        <option value="accountant">Accountant</option>
                        <option value="manager">Manager</option>
                        <option value="deputy-manager">Deputy Manager</option>
                        <option value="decorator">Decorator</option>
                        <option value="shop-assistant">Shop Assistant</option>
                    </select>

                    <RenderShopIdInput />

                    <button className="add-button">Add user</button>
                </section>
                <div className="size-bar"></div>
                <section className="user-list">
                    
                </section>
            </div>
        </>
    );

}

export default CreateUser;