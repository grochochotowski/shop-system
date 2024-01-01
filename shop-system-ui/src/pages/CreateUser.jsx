import React, {useState} from "react";
import Header from "../components/Header";

function CreateUser() {

    const [position, setPosition] = useState("");

    function setNewPosition(e) {
        if (e.target.value === "choose") setPosition("");
        else setPosition(e.target.value);
    } 

    return (
        <>
            <Header selected="create-user"/>
            <section>
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

                <button className="add-button">Add user</button>
            </section>
        </>
    );

}

export default CreateUser;