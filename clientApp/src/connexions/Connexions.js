import axios from 'axios'

const API =   axios.create()
let BaseUrl = "http://192.168.10.210:8000/"

const onFilter = async(data)=>{
    try{
        let res = await API.post(BaseUrl + "on_filter", data)
        return res.data
    }catch(err){
        console.log(err)
        return {isOk: false, msg: "Erreur de connexion !"}
    }
}

export default { 
    onFilter,
}