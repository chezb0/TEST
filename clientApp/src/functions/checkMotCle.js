const CheckMotCle = async(data)=>{
    if(!data.endTime) return {checkOk: false, msg: "Veuillez indiquer le temps de fin des mots clés !"}
    if(!data.mot1 && !data.mot2 && !data.mot3 && !data.mot3 && !data.mot4) return {checkOk: false, msg: "Il faut au moins un mot clé !"}
    return {checkOk: true}
}

export default CheckMotCle