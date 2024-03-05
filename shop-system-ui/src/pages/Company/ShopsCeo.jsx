import React, {useState, useEffect} from "react";
import "../../styles/shopsCeo.css";

function ShopsCeo() {

    const [containerHeight, setContainerHeight] = useState("");
    const [formWidth, setFormWidth] = useState("");
    const [listWidth, setListWidth] = useState("");
    const [isResizing, setIsResizing] = useState(false);

    // Calculate width of 2 main sections based on size-bar position
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isResizing) {
                const sizeBarRect = document.querySelector(".size-bar").getBoundingClientRect();
                const containerRect = document.querySelector(".shop-ceo-container").getBoundingClientRect();
              
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

    // Render
    return (
        <>
            <div className="shop-ceo-container" style={{ height: containerHeight }}>
                <section className="shop-ceo-form" style={{ width: formWidth }}>
                    <div className="shop-address-section">
                        <h3>Address</h3>
                        <input type="text" className="add-country" placeholder="Country" />
                        <input type="text" className="add-region" placeholder="Region" />
                        <input type="text" className="add-city" placeholder="City"/>
                        <input type="text" className="add-street" placeholder="Street"/>
                        <input type="text" className="add-building" placeholder="Building" />
                        <input type="text" className="add-premises" placeholder="Premises" />
                        <input type="text" className="add-postal-code" placeholder="Postal Code"/>
                        <input type="text" className="add-phone-number" placeholder="Phone Number"/>
                    </div>

                    <button className="submit">Add shop</button>
                </section>
                <div className={`size-bar ${isResizing ? 'resizing' : ''}`} onMouseDown={handleMouseDown}></div>
                <section className="shop-list" style={{ width: listWidth}}>
                    <div className="options">
                        <div className="box">
                            <input type="checkbox" id="shop-id"/>
                            <label htmlFor="shop-id">Shop ID</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="country"/>
                            <label htmlFor="country">Country</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="region"/>
                            <label htmlFor="region">Region</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="city"/>
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="street"/>
                            <label htmlFor="street">Street</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="building"/>
                            <label htmlFor="building">Building</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="premises"/>
                            <label htmlFor="premises">Premises</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="postal-code"/>
                            <label htmlFor="postal-code">Postal code</label>
                        </div>
                        <div className="box">
                            <input type="checkbox" id="phone-number"/>
                            <label htmlFor="phone-number">Phone number</label>
                        </div>
                    </div>
                    <ul className="shop-list-element">
                        <li>Shop 1</li>
                        <li>Shop 2</li>
                        <li>Shop 3</li>
                        <li>Shop 4</li>
                        <li>Shop 5</li>
                        <li>Shop 6</li>
                        <li>Shop 7</li>
                        <li>Shop 8</li>
                        <li>Shop 9</li>
                        <li>Shop 10</li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default ShopsCeo