const CheckUserValue = async(user)=>{
    if(!user.email) return {checkOk: false, msg: "Donner votre adresse email"}
    if(!user.pwd) return {checkOk: false, msg: "Donner votre mot de passe"}
    return {checkOk: true}
}


export default CheckUserValue