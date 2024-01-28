import React from "react";
import "../styles/login.css"

function Login() {
    
    
    return(
        <>
            <div className="login-container"></div>
            <div className="login">
                <input type="text" placeholder="Login"/>
                <input type="password" placeholder="Password"/>
                <button className="submit">Log in</button>
                <button className="close-window">
                    <div className="close-window-pt pt1"></div>
                    <div className="close-window-pt pt2"></div>
                </button>
            </div>
        </>
    );
} 

export default Login;