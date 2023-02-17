import React, {useState, useEffect, useRef} from 'react'
import "../css/Header.css"

const Header = (props)=>{
    let ref = props._ref
    if(ref === "people") return(
        <div className='Header'>
            <span>Nom</span>
            <div></div>
            <span>Taille</span>
            <div></div>
            <span>Poids</span>
            <div></div>
            <span>Action</span>
        </div>
    )
    else if(ref === "planets") return(
        <div className='Header'>
            <span>Nom</span>
            <div></div>
            <span>Diamètre</span>
            <div></div>
            <span>Population</span>
            <div></div>
            <span>Action</span>
        </div>
    )
    else if(ref === "starships") return(
        <div className='Header'>
            <span>Nom</span>
            <div></div>
            <span>Modèle</span>
            <div></div>
            <span>Longueur</span>
            <div></div>
            <span>Action</span>
        </div>
    )
    else return(
        <div></div>
    )
}

export default Header