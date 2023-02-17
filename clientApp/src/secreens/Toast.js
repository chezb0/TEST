import React, {useState, useEffect} from 'react'
import "../css/Toast.css"

const Toast = (props)=>{
    const is_toast = props.toast
    const [delay, setDelay] = useState(3)
    const text = props.text
    //alert(is_toast)
    useEffect(()=>{
        let interval;
        if(is_toast){
            interval = setInterval(()=>{
               if(delay > 0) setDelay((prevDelay)=>prevDelay - 1)
               else {
                    setDelay(3)
                    props.setToast(false)
               }
            }, 1000)
        }else if(!is_toast){
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [is_toast, delay])

    if(is_toast) return(
        <div className='Toast'>
            <div className='ToastContent'>
                {text}
            </div>
        </div>
    )
    else return(
        <div></div>
    )
}

export default Toast