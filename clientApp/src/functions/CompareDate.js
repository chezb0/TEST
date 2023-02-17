import React from 'react'
const CompareDate = (date1, date2)=>{
    let tab_date1 = date1.split("-")
    let tab_date2 = date2.split("-")
    date1 = new Date(tab_date1[2]+"-"+tab_date1[1]+"-"+tab_date1[0]);
    date2 = new Date(tab_date2[2]+"-"+tab_date2[1]+"-"+tab_date2[0]);
    if (date1.getTime() > date2.getTime()) {
        return {is_egal: false, is_superior: false}
    } else if (date1.getTime() < date2.getTime()) {
        return {is_egal: false, is_superior: true}
    } else {
        return {is_egal: true, is_superior: false}
    }
}

export default CompareDate