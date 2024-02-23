import React, {useState, useEffect} from "react"

function UserFormCeo() {

    const [position, setPosition] = useState("");
    
    // Function which are connected to postition drop down menu
    function setNewPosition(e) {
        if (e.target.value === "choose") setPosition("")
        else setPosition(e.target.value);
    }
    function RenderShopIdInput() {
        if (["manager", "deputy-manager", "decorator", "shop-assistant"].includes(position))
            return <input type="text" className="add-shopID" placeholder="ShopID"/>
        return null;
    }

// Render
    return (
        <section className="user-ceo-form" style={{ width: formWidth }}>
            <div className="personal-section">
                <h3>Personal information</h3>
                <input type="text" className="add-1st-name" placeholder="First Name" />
                <input type="text" className="add-2nd-name" placeholder="Second Name" />
                <input type="text" className="add-last-name" placeholder="Last Name"/>
                <input type="text" className="add-personal-number" placeholder="Personal Number"/>
            </div>

            <div className="info-section">
                <h3>Contract information</h3>
                <input type="email" className="add-email" placeholder="E-mail"/>
                <input type="text" className="add-phone-number" placeholder="Phone Number"/>
                <input type="text" className="add-account-number" placeholder="Account Number"/>
            </div>

            <div className="shop-section">
                <h3>Shop information</h3>
                <input type="text" className="add-login" placeholder="Login"/>
                <input type="password" className="add-password" placeholder="Password"/>

                <select name="position" id="position" onChange={setNewPosition}>
                    <option value="choose">-- Choose Position --</option>
                    <option value="coo">COO</option>
                    <option value="accountant">Accountant</option>
                    <option value="manager">Manager</option>
                    <option value="deputy-manager">Deputy Manager</option>
                    <option value="decorator">Decorator</option>
                    <option value="shop-assistant">Shop Assistant</option>
                </select>
                <RenderShopIdInput />
            </div>

            <button className="submit">Add user</button>
        </section>
    );
}

export default UserFormCeo;