import React, {useState, useEffect, useRef} from 'react'
import "../css/Detail.css"

const Detail = (props)=>{
    let is_detail = props.is_detail
    if(!is_detail) return(
        <div></div>
    )
    return(
        <div className='Detail'
            onClick={(e)=>{if(e.target.closest("div").className === "Detail")props.closeDetail()}}
        >
            <div>
                {props.data}
            </div>
        </div>
    )
}

export default Detail