import React from 'react';
import './components.css'
const list = props=>{

   
    return(
        <div className='list_data'>
            <ul>
                <li>{
                props.send.map( data =>{
                    return(
                      <div>{"My name is "+data.name +" "}{data.age}</div>
                    )
                }
           ) }</li>
            </ul>
        </div>
    )
}

export default list
