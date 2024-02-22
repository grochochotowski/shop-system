import React, {useState, useEffect} from "react"
import ShopUserListElement from "../components/ShopUserListElement"
import "../styles/userCeo.css"

function UserCeo() {

    const [position, setPosition] = useState("");
    const [containerHeight, setContainerHeight] = useState("");
    const [formWidth, setFormWidth] = useState("");
    const [listWidth, setListWidth] = useState("");
    const [isResizing, setIsResizing] = useState(false);
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
    const uniqueShopIds = [0, 6, 7];


    // fetch api data - get info about users and thir shops
    useEffect(() => {
        async function getUserData() {
            const response = await fetch("https://localhost:7057/api/user");
            const data = await response.json();
            setUsers(data);
        }
        getUserData();
    }, []);


    // create user list in a shop
    function getShopWithUsers(shopId) {
        if (users.length > 0) {
            var usersInShop;
            if (shopId !== 0) {
                usersInShop =
                    users
                    .filter(user => user.shop && user.shop.id === shopId)
                    .map((user) => {
                        return (
                            {
                                userId: user.id,
                                firstName: user.firstName,
                                secondName: user.secondName,
                                lastName: user.lastName,
                                login: user.login,
                                phoneNumber: user.phoneNumber,
                                position: user.position.name
                            }
                        );
                    });
            }
            else {
                usersInShop =
                    users
                    .filter(user => user.shopId === null)
                    .map((user) => {
                        return (
                            {
                                userId: user.id,
                                firstName: user.firstName,
                                secondName: user.secondName,
                                lastName: user.lastName,
                                login: user.login,
                                phoneNumber: user.phoneNumber,
                                position: user.position.name
                            }
                        );
                    });
            }
            return(
                <ShopUserListElement
                    key={shopId}
                    title={shopId} 
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

    // Calculate width of 2 main sections based on size-bar position
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isResizing) {
                const sizeBarRect = document.querySelector(".size-bar").getBoundingClientRect();
                const containerRect = document.querySelector(".user-ceo-container").getBoundingClientRect();
              
                const cursorPosition = e.clientX - containerRect.left;
                let sizeBarLeftOffset = cursorPosition - sizeBarRect.width / 2;
      
                sizeBarLeftOffset = Math.max(containerRect.width * 0.2, Math.min(containerRect.width * 0.8, sizeBarLeftOffset));

                setFormWidth(`${sizeBarLeftOffset}px`);
                setListWidth(`calc(100% - ${sizeBarLeftOffset}px)`);
            }
        };
        const handleMouseUp = (e) => {
            setIsResizing(false);
        };

        if (isResizing) {
            document.body.style.userSelect = 'none';
            document.body.style.cursor = 'none';
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            document.body.style.userSelect = 'auto';
            document.body.style.cursor = 'auto';
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isResizing]);

    const handleMouseDown = () => {
        setIsResizing(prev => !prev);
    };

    // Calculate the height of container
    useEffect(() => {
        const updateContainerHeight = () => {
            const header = document.getElementsByTagName('header')[0];
            const headerHeight = header.getBoundingClientRect().height;
            setContainerHeight(`calc(100% - ${headerHeight}px)`);
        };

        window.addEventListener('resize', updateContainerHeight);
        updateContainerHeight();

        return () => {
          window.removeEventListener('resize', updateContainerHeight);
        };
    }, []); 


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
        <>
            <div className="user-ceo-container" style={{ height: containerHeight }}>
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
                <div className={`size-bar ${isResizing ? 'resizing' : ''}`} onMouseDown={handleMouseDown}></div>
                <section className="user-list" style={{ width: listWidth}}>
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
            </div>
        </>
    );

}

export default UserCeo;