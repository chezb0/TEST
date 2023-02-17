import React, {useState, useEffect} from 'react'
const CurrentDate = ()=>{
	const now = new Date()
	now.setTime(now.getTime());
	var day = now.getDate()
	var month = now.getMonth() + 1
	var year = now.getFullYear()
	var hour = now.getHours()
	var min = now.getMinutes()
	var sec = now.getSeconds()
	if(day < 10) day = '0' + day
	if(month < 10) month = '0' + month
	if(hour < 10) hour = '0' + hour
	if(min < 10) min = '0' + min
	if(sec < 10) sec = '0' + sec
	
	const dateTime = day + '-' + month + '-' + year + ' ' + hour + ':' + min + ":" +sec
	return dateTime
}


export default CurrentDate