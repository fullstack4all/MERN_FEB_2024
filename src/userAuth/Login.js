import React from "react";

import'./login.css'

const Login = ()=>{
    
    return(
        <div className="loginform">
     
            <form>
          
                UserName: <input type="text" placeholder="Enter your name"/><br/>
                Password: <input type="password" placeholder="Enter your password"/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login