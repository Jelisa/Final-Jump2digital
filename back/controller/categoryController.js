const categoria_info = require("../data/categoria1.json")
const respuestas = require("../services/responseModule")
const {tranformToArray} = require("../helper/helper")

const categoryInfoController = (req,res)=>{
    try{
            const patata = tranformToArray(categoria_info)
            respuestas.success(req,res,patata)
    }
    catch {
        respuestas.error(req,res,"error de servidor")
    }
}

module.exports={categoryInfoController}