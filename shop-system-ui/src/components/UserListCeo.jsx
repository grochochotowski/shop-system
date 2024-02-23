import React, {useState, useEffect} from "react"
import ShopUserListElement from "../components/ShopUserListElement"

function UserListCeo() {
// Render
    return (
        <>
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
        </>
    );
}

export default UserListCeo;