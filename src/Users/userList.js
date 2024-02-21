import React  from "react";

import './userList.css'
const UserItems = (props)=>{
    console.log('jhsvdcbs',props.id)
    return(
        <div className="user_item_content">
        
            {/* <div> */}
            <div className="profile-img">
                <img src={props.img}/>
            </div>
                <h2>User Id: {props.id}</h2>
                <h1>User Name: {props.name}</h1>
                <h3>User Age: {props.age}</h3>


            {/* </div> */}
    
           
          
        </div>
    )
}
export default UserItems