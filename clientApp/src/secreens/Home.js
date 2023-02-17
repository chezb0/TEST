import React, {useState, useEffect, useRef} from 'react'
import "../css/Home.css"
import { BiSearch } from 'react-icons/bi'
import Connexions from '../connexions/Connexions'
import Header from '../components/Header'
import Content from '../components/Content'
import $ from "jquery"
import Detail from '../components/Detail'
const Home = ()=>{

    const [query, setQuery] = useState("")
    const [header_ref, setHeaderRef] = useState("")
    const [is_detail, setIsDetail] = useState(false)
    const [detail, setDetail] = useState("")
    const [content, setContent] = useState(<div></div>)


    const onDetail = (_data)=>{
        setDetail(JSON.stringify(_data))
        setIsDetail(true)
    }

    const onFilter = async()=>{
        if(!query){
            setHeaderRef("")
            setContent(<div></div>)
            return
        }
        await Connexions.onFilter({query: query}).then(res=>{
            if(!res.isOk){
                alert(res.msg)
                setHeaderRef("")
                setContent(<div></div>)
            }
            else{
                console.log(res)
                setHeaderRef(res.catego)
                if(res.isList) setContent(res.data.map((item)=><Content catego = {res.catego} data = {item}  onDetail = {onDetail}/>))
                else setContent(<Content catego = {res.catego} data = {res.data} onDetail = {onDetail}/>)
            }
        })
    }


    const onCloseDetail = ()=>{
        setDetail("")
        setIsDetail(false)
    }

    const onConfig = ()=>{
        let height = Number($("body").css("height").split("px")[0]) - 200
        $(".Container").css("height", height+"px")
    }

    useEffect(()=>{
        onConfig()
    }, [])

    return(
        <div className='Home' style={{height: "100%", width: "100%", color: "white", "position": 'absolute', top: 0, left: 0}}>
            <div style={{height:"50px", "width": "100%", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #DDD"}}>
                <h1 style={{color: "#444444"}}>REBELLION</h1>
            </div>
            <div className='search-box'>
                <input placeholder='Recherche...' onChange={(txt)=>setQuery(txt.target.value)} value = {query}/>
                <button
                    onClick={()=>onFilter()}
                >
                    <BiSearch/>
                </button>
            </div>
            <Header _ref = {header_ref}/>
            <div className='Container'>
                {
                    content
                }
            </div>
            <Detail is_detail = {is_detail} data = {detail} closeDetail = {onCloseDetail}/>
        </div>
    )
}

export default Home