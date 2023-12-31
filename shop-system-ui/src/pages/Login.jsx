import React from "react";
import "../styles/login.css"

function Login() {
    
    
    return(
        <div className="login">
            <input type="text" placeholder="Login"/>
            <input type="password" placeholder="Password"/>
            <button>Log in</button>
        </div>
    );
} 

export default Login;