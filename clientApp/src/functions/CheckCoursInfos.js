const CheckCoursInfos = async(video, data)=>{
    if(!video) return {checkOk: false, msg: "Veuillez uploder un cours vidéo !"}
    if(!data.title || !data.enseignant || !data.matiere || !data.parcours || !data.level) return {checkOk: false, msg: "Tous les champs sont obligatoires !"}
    return {checkOk: true}
}

export default CheckCoursInfos