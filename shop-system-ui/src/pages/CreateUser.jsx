import React, {useState, useEffect} from "react"
import ShopUserListElement from "../components/ShopUserListElement"
import "../styles/createUser.css"

function CreateUser() {

    const [position, setPosition] = useState("");
    const [containerHeight, setContainerHeight] = useState("");
    const [formWidth, setFormWidth] = useState("");
    const [listWidth, setListWidth] = useState("");
    const [isResizing, setIsResizing] = useState(false);


    // Calculate width of 2 main sections based on size-bar position
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isResizing) {
                const sizeBarRect = document.querySelector(".size-bar").getBoundingClientRect();
                const containerRect = document.querySelector(".create-user-container").getBoundingClientRect();
              
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
            <div className="create-user-container" style={{ height: containerHeight }}>
                <section className="create-user-form" style={{ width: formWidth }}>
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
                            <input type="checkbox" id="user-id"/>
                            <label htmlFor="user-id">User ID</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="first-name"/>
                            <label htmlFor="first-name">First name</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="second-name"/>
                            <label htmlFor="second-name">Second Name</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="last-name"/>
                            <label htmlFor="last-name">Last name</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="position-check"/>
                            <label htmlFor="position-check">Position</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="email"/>
                            <label htmlFor="email">E-mail</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="phone-number"/>
                            <label htmlFor="phone-number">Phone number</label>
                        </div>
                    </div>
                    <div className="user-list-elements">
                        <ShopUserListElement collapsed="true"/>
                        <ShopUserListElement collapsed="true"/>
                        <ShopUserListElement collapsed="true"/>
                        <ShopUserListElement collapsed="true"/>
                        <ShopUserListElement collapsed="true"/>
                        <ShopUserListElement collapsed="true"/>
                        <ShopUserListElement collapsed="true"/>
                    </div>
                </section>
            </div>
        </>
    );

}

export default CreateUser;