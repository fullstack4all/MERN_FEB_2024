import React from "react";
import Userlist from './userList.js';

const UserEvent = props =>{
        console.log("hello ", props.items)
    return(
    
        <ul>
            {
            props.items.map(user => (
                <Userlist 
                id={user.id}
                name={user.name}
                age={user.age}
                img={user.img}/>
            ))
            }
        </ul>
    )   
}

export default UserEvent;