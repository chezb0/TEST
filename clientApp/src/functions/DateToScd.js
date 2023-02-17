import React, {useState, useEffect} from 'react'
import moment from 'moment'
const DateToScd = (date)=>{
    return moment(date, "DD-MM-YYYY HH:mm").unix();
}

export default DateToScd