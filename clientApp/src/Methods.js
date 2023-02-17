const checkUserInfo = (data)=>{
    if(!data.email) return {isOk: false, msg: "Veuillez donner un adresse e-mail valide !"}
    if(!data.pwd) return {isOk: false, msg: "Veuillez donner votre mot de passe !"}
    if(!data.conf_pwd) return {isOk: false, msg: "Veuillez confirmer votre mot de passe !"}
    if(data.pwd != data.conf_pwd) return {isOk: false, msg: "Les deux mots de passes ne correspondent pas !"}
    if(!data.name) return {isOk: false, msg: "Veuillez donner votre nom !"}
    if(!data.first_name) return {isOk: false, msg: "Veuillez donner votre prénom !"}
    if(!data.sexe) return {isOk: false, msg: "Veuillez choisir votre sexe !"}
    if(!data.tel) return {isOk: false, msg: "Veuillez donner votre numéro de téléphone !"}
    if(!data.title) return {isOk: false, msg: "Est ce que vous êtes étudiant ou enseignant ?"}
    if(data.title === "Etudiant" && !data.level) return {isOk: false, msg: "Veuillez selectionner votre niveau d'étude !"}
    if(!data.mention) return {isOk: false, msg: "Veuillez donner votre mention !"}
    if(!data.parcours) return {isOk: false, msg: "Veuillez donner votre parcours !"}
    return {isOk: true}
}

const displayLevel = (level)=>{
    if(level===1) return "L1"
    if(level===2) return "L2"
    if(level===3) return "L3"
    if(level===4) return "M1"
    if(level===5) return "M2"
}

const choiseResponse = (el)=>{
    return el.rang
}

export default {
    checkUserInfo,
    displayLevel,
    choiseResponse,
}