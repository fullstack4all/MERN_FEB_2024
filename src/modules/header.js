import React from "react";

import './header.css'

import Navigation from "./navBar";

const Header = ()=>{

    return(
        <div className="header">
            <div className="logo">
                <h1 className="my_logo">My_App</h1>
            </div>
            <div className="main_nav">
               <Navigation/> 
           
            </div>
        </div>
    )
}
export default Header