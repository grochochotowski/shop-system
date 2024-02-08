import React from "react";
import "../styles/shopsCeo.css";

function ShopsCeo() {
    // Render
    return (
        <>
            <div className="shop-ceo-container" style={{ height: containerHeight }}>
                <section className="shop-ceo-form" style={{ width: formWidth }}>
                    <div className="shop-address">
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
                    <ul>
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