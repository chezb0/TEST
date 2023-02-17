import React, {useState, useEffect, useRef} from 'react'
import "../css/Content.css"

const Content = (props)=>{
    let data = props.data
    let catego = props.catego
    if(catego === "people") return(
        <div className='Content'>
            <span>{data.name}</span>
            <span>{data.height}</span>
            <span>{data.mass}</span>
            <div>
                <button onClick={()=>props.onDetail(data)}>Détail</button>
            </div>
        </div>
    )
    else if(catego === "planets") return(
        <div className='Content'>
            <span>{data.name}</span>
            <span>{data.diameter}</span>
            <span>{data.population}</span>
            <div>
                <button onClick={()=>props.onDetail(data)}>Détail</button>
            </div>
        </div>
    )
    else if(catego === "starships") return(
        <div className='Content'>
            <span>{data.name}</span>
            <span>{data.model}</span>
            <span>{data.length}</span>
            <div>
                <button onClick={()=>props.onDetail(data)}>Détail</button>
            </div>
        </div>
    )
}

export default Content