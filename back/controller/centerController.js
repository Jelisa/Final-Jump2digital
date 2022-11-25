const center_info = require("../data/center_info.json")
const respuestas = require("../services/responseModule")
const {pagination} = require("../helpers/helpers")

const centerInfoController = (req,res)=>{
    try{
        const {pages} = req.query
        const data = pagination(center_info,pages,20)
        respuestas.success(req,res,data)
    }
    catch {
        respuestas.error(req,res,"error de servidor")
    }
}

module.exports={centerInfoController}