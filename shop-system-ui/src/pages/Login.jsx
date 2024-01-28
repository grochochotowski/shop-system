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
                <button className="close-window"></button>
            </div>
        </>
    );
} 

export default Login;