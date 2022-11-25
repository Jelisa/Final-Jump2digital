const center_info = require("../data/center_info.json")
const respuestas = require("../services/responseModule")

const centerInfoController = (req,res)=>{
    try{
        const {pages} = req.query
        const nElements = pages*20
        if(center_info.length > nElements-20){
            const data = center_info.slice(nElements-20,nElements)
            respuestas.success(req,res,data)
        }else{
            respuestas.error(req,res,"no existe mas elementos")
        }
    }
    catch {
        respuestas.error(req,res,"error de servidor")
    }
}

module.exports={centerInfoController}