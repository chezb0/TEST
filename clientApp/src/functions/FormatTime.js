const FormatTime = (time)=>{
    var h = `${time/3600}`.split('.');
    var hour = h[0];
    var m = `${parseFloat(`0.${h[1]}`) * 60.0}`.split('.');
    var min =  parseInt(`${m[0]}`);
    var s = parseFloat(`0.${m[1]}`) * 60.0;
    var sec = Math.floor(s);
    if(hour < 10) hour = "0" + hour
    if(min < 10) min = "0" + min
    if(sec < 10) sec = "0" + sec
    return `${hour}:${min}:${sec}`
}

export default FormatTime