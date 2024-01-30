import React, {useState, useEffect} from "react";
import CompanyHeader from "../components/CompanyHeader";
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
                const containerRect = document.querySelector(".container").getBoundingClientRect();
              
                const cursorPosition = e.clientX - containerRect.left;
                let sizeBarLeftOffset = cursorPosition - sizeBarRect.width / 2;
      
                sizeBarLeftOffset = Math.max(containerRect.width * 0.2, Math.min(containerRect.width * 0.8, sizeBarLeftOffset));

                setFormWidth(`${sizeBarLeftOffset}px`);
                setListWidth(`calc(100% - ${sizeBarLeftOffset}px)`);
            }
        };
        const handle2ndMouseClick = (e) => {
            const sizeBar = document.querySelector(".size-bar");
            if (sizeBar && !sizeBar.contains(e.target)) {
                setIsResizing(false);
            }
        };

        if (isResizing) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mousedown", handle2ndMouseClick);
        }
        
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handle2ndMouseClick);
        };
    }, [isResizing]);

    const handleClick = () => {
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
            <CompanyHeader selected="create-user"/>
            <div className="container" style={{ height: containerHeight }}>
                <section className="create-user-form" style={{ width: formWidth }}>
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
                <div className={`size-bar ${isResizing ? 'resizing' : ''}`} onClick={handleClick}></div>
                <section className="user-list" style={{ width: listWidth }}>
                    
                </section>
            </div>
        </>
    );

}

export default CreateUser;