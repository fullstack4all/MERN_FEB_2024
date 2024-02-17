import React from "react";
import './nav.css'

import Login from "../userAuth/Login";

const Navigation = ()=>{
    var button = document.createElement('button')

        const show= ()=>{
      var login =  document.querySelector('.loginform')
            if(login.style.display == 'none'){
                login.style.display = 'block'
            }
            else{
                login.style.display = 'none'
            }
            
          
            login.appendChild(button)
            button.innerHTML = 'X'
            button.className = 'cross'

            button.addEventListener('click', ()=>{
                login.style.display = 'none'
            })
            
        }
      

    return(
        <div className="navbar">
            <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Contact</a></li>
             <li><a href="#" id="Login" onClick={show}>Login</a>
                    <div className="login-form">
                    <Login/>
                    </div>
             </li>
            </ul>
        </div>
    )
}


export default Navigation