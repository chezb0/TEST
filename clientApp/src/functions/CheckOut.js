const CheckOut = async(data)=>{
    if(!data.name || !data.price || !data.desc || !data.photo || !data.url)
        return {CheckOk: false, msg: "Tous les champs sont obligatoires !"}
    
    return {CheckOk: true}
}
export default CheckOut