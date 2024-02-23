import React, {useState, useEffect} from "react"
import ShopUserListElement from "../components/ShopUserListElement"

function UserListCeo(props) {

    const [users, setUsers] = useState([]);
    const [checkBoxObj, setCheckBoxObj] = useState({
        idCheck: true,
        positionCheck: true,
        loginCheck: true,
        firstNameCheck: true,
        secondNameCheck: true,
        lastNameCheck: true,
        emailCheck: true,
        phoneNumberCheck: true
    });
    const [uniqueShopIds, setUniqueShopIds] = useState([]);

    // Do at the begginning
    // fetch api data - get info about users and thir shops
    useEffect(() => {
        async function getUserData() {
            const response = await fetch("https://localhost:7057/api/user");
            const data = await response.json();
            setUsers(data);
        }
        getUserData();
    }, []);


    // generate list of unique shop ids on users list change
    useEffect(() => {
        function generateListOfShopIds() {
            let list = [];
            users.forEach(user => {
                if (user.shopId !== null && !list.includes(user.shopId))
                    list.push(user.shopId);
                else if (user.shopId === null && !list.includes(0))
                    list.push(0);
            });
            console.log(list);
            console.log(users);
            setUniqueShopIds(list);
        }
        generateListOfShopIds();
    }, [users]);

    // create user list in a shop
    function getShopWithUsers(shopId) {
        if (users.length > 0) {
            var usersInShop;
            var title;
            if (shopId !== 0) {
                usersInShop =
                    users
                    .filter(user => user.shop && user.shop.id === shopId)
                    .map((user) => {
                        if (!title) title = user.shop.code;
                        return (
                            {
                                userId: user.id,
                                firstName: user.firstName,
                                secondName: user.secondName,
                                lastName: user.lastName,
                                login: user.login,
                                email: user.email,
                                phoneNumber: user.phoneNumber,
                                position: user.position.name
                            }
                        );
                    });
            }
            else {
                usersInShop =
                    users
                    .filter(user => user.shopId == null)
                    .map((user) => {
                        if (!title) title = "No Shop";
                        return (
                            {
                                userId: user.id,
                                firstName: user.firstName,
                                secondName: user.secondName,
                                lastName: user.lastName,
                                login: user.login,
                                email: user.email,
                                phoneNumber: user.phoneNumber,
                                position: user.position.name
                            }
                        );
                    });
            }
            return(
                <ShopUserListElement
                    key={shopId}
                    title={title} 
                    collapsed={true}
                    elements={usersInShop}
                    checkedBoxes={checkBoxObj}
                />
            );
        }
    }


    // check boxes changing handler
    function checkBoxChangeHandler(what) {
        setCheckBoxObj((prev) => ({
            ...prev,
            [what]: !prev[what]
        }));
    }


    // Render
    return (
        <>
            <section className="user-list" style={{ width: props.listWidth}}>
                <div className="options">
                    <div className="box">
                        <input type="checkbox" id="user-id" onClick={() => checkBoxChangeHandler("idCheck")} checked={checkBoxObj.idCheck}/>
                        <label htmlFor="user-id">User ID</label>
                    </div>
                    <div className="box">
                        <input type="checkbox" id="position-check" onClick={() => checkBoxChangeHandler("positionCheck")} checked={checkBoxObj.positionCheck}/>
                        <label htmlFor="position-check">Position</label>
                    </div>
                    <div className="box">
                        <input type="checkbox" id="login" onClick={() => checkBoxChangeHandler("loginCheck")} checked={checkBoxObj.loginCheck}/>
                        <label htmlFor="login">Login</label>
                    </div>
                    <div className="box">
                        <input type="checkbox" id="first-name" onClick={() => checkBoxChangeHandler("firstNameCheck")} checked={checkBoxObj.firstNameCheck}/>
                        <label htmlFor="first-name">First name</label>
                    </div>
                    <div className="box">
                        <input type="checkbox" id="second-name" onClick={() => checkBoxChangeHandler("secondNameCheck")} checked={checkBoxObj.secondNameCheck}/>
                        <label htmlFor="second-name">Second Name</label>
                    </div>
                    <div className="box">
                        <input type="checkbox" id="last-name" onClick={() => checkBoxChangeHandler("lastNameCheck")} checked={checkBoxObj.lastNameCheck}/>
                        <label htmlFor="last-name">Last name</label>
                    </div>
                    <div className="box">
                        <input type="checkbox" id="email" onClick={() => checkBoxChangeHandler("emailCheck")} checked={checkBoxObj.emailCheck}/>
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="box">
                        <input type="checkbox" id="phone-number" onClick={() => checkBoxChangeHandler("phoneNumberCheck")} checked={checkBoxObj.phoneNumberCheck}/>
                        <label htmlFor="phone-number">Phone number</label>
                    </div>
                </div>
                <div className="user-list-elements">
                    { uniqueShopIds.map((id) => getShopWithUsers(id)) }
                </div>
            </section>
        </>
    );
}

export default UserListCeo;