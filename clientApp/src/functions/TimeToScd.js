const TimeToScd = (_time)=>{
    let tab = _time.split(":")
    console.log(tab)
    let second = Number(tab[2]) + Number(tab[1]*60) + Number(tab[0]*3600)
    return second
}
export default TimeToScd