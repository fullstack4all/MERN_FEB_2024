import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

import SearchTab from "../SearchTab/searchTab";

import './searchbutton.css'
const SearchButton = ()=>{
    const Search = ()=>{
            let btn = document.querySelector('#Icons')
            let sec = document.querySelector('.searchtab')
            if(btn.style.color ==='white' && sec.style.display ==='none'){
                sec.style.display = 'block'
                btn.style.color ='red'
            }
            else{
                sec.style.display = 'none'
                btn.style.color ='white'
            }
    }

    return(
        <div className="icon-bar">
            <FontAwesomeIcon id="Icons" icon={faSearch} onClick={Search}/>
            <div className="searchtab">
                <SearchTab/>
            </div>
        </div>
    )
}

export default SearchButton