const categoria_info = require("../data/categoria.json")
const respuestas = require("../services/responseModule")

const categoryInfoController = (req,res)=>{
    try{
            const data = categoria_info
            respuestas.success(req,res,data)
    }
    catch {
        respuestas.error(req,res,"error de servidor")
    }
}

module.exports={categoryInfoController}