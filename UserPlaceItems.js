import React from "react";
import './UserPlaces.css'
const PlaceItems = props =>{
    console.log('jh',props.id)
    return(
        <div className="container">
            <div className="main-section">
                <img src={props.img} alt={props.name}/>
            </div>
            <div className="title">
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}

export default  PlaceItems