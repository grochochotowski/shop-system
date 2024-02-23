import React, {useState} from "react"

function UserFormCeo(props) {
    const [formInputs, setFormInputs] = useState(
        {
            firstName: "",
            secondName: "",
            lastName: "",
            login: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            shopId: null,
            position: 0
        }
    );


    // Get data from inputs
    function handleInputChange(event) {
        setFormInputs( (prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        });
    }

    // Make API call to create new user
    function checkData() {
        let correct = true;

        if (formInputs.firstName === "")
        {
            console.log("first name is empty");
            correct = false;
        }
        if (formInputs.secondName === "")
        {
            console.log("second name is empty");
            correct = false;
        }
        if (formInputs.lastName === "")
        {
            console.log("last name is empty");
            correct = false;
        }
        if (formInputs.login === "")
        {
            console.log("login is empty");
            correct = false;
        }
        if (formInputs.email === "")
        {
            console.log("email is empty");
            correct = false;
        }
        if (formInputs.phoneNumber === "")
        {
            console.log("phone number is empty");
            correct = false;
        }
        if (formInputs.password === "")
        {
            console.log("password is empty");
            correct = false;
        }
        if (formInputs.confirmPassword === "")
        {
            console.log("confirmPassword is empty");
            correct = false;
        }
        if (formInputs.position === 0) {
            console.log("positionId is empty"); 
            correct = false;
        }
        if ([3, 4, 5, 6].includes(formInputs.position)) {
            console.log("shopId is empty"); 
            correct = false;
        }

        if (correct) sendData();
    }
    function sendData() {
        console.log(formInputs);
    }

    // Function which are connected to postition drop down menu
    function RenderShopIdInput() {
        if (["manager", "deputy-manager", "decorator", "shop-assistant"].includes(formInputs.position))
            return (
            <input
                type="text"
                className="add-shopID"
                placeholder="ShopID"
                name="shopId"
                onChange={handleInputChange}
                value={formInputs.shopId}
            />
            )
        return null;
    }


    // Render
    return (
        <section className="user-ceo-form" style={{ width: props.formWidth }}>
            <div className="personal-section">
                <h3>Personal information</h3>
                <input 
                    type="text"
                    id="add-1st-name"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleInputChange}
                    value={formInputs.firstName}
                />
                <input 
                    type="text"
                    id="add-2nd-name"
                    placeholder="Second Name"
                    name="secondName"
                    onChange={handleInputChange}
                    value={formInputs.secondName}
                />
                <input 
                    type="text"
                    id="add-last-name"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleInputChange}
                    value={formInputs.lastName}
                />
            </div>

            <div className="contact-section">
                <h3>Contact information</h3>
                <input 
                    type="email"
                    id="add-email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleInputChange}
                    value={formInputs.email}
                />
                <input 
                    type="text"
                    id="add-phone-number"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onChange={handleInputChange}
                    value={formInputs.phoneNumber}
                />
            </div>

            <div className="account-section">
                <h3>Account information</h3>
                <input 
                    type="text"
                    id="add-login"
                    placeholder="Login"
                    name="login"
                    onChange={handleInputChange}
                    value={formInputs.login}
                />
                <input 
                    type="password"
                    id="add-password"
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                    value={formInputs.password}
                />
                <input 
                    type="password"
                    id="add-confirm-password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={handleInputChange}
                    value={formInputs.confirmPassword}
                />
            </div>
            <div className="shop-section">
                <h3>Shop information</h3>
                <select
                id="position"
                name="position"
                onChange={handleInputChange}
                value={formInputs.position}
                >
                    <option value={0}>-- Choose Position --</option>
                    <option value={1}>COO</option>
                    <option value={2}>Accountant</option>
                    <option value={3}>Manager</option>
                    <option value={4}>Deputy Manager</option>
                    <option value={5}>Decorator</option>
                    <option value={6}>Shop Assistant</option>
                </select>
                <RenderShopIdInput />
            </div>

            <button className="submit" onClick={checkData}>Add user</button>
        </section>
    );
}

export default UserFormCeo;