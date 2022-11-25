const center_info = require("../data/centros2.json")
const venta = require("../data/venta.json")
const respuestas = require("../services/responseModule")
const {pagination,tranformToArray} = require("../helper/helper")

const centersInfoController = (req,res)=>{
    try{
        const patata = tranformToArray(center_info)
        const {pages} = req.query
        const data2 = pagination(patata,pages,5)
        respuestas.success(req,res,data2)
    }
    catch {
        respuestas.error(req,res,"error de servidor")
    }
}

const centerInfoController = (req,res)=>{
    const {id} = req.params
    const obj = venta[id.toString()]
    Object.values(obj)
    respuestas.success(req,res,obj)
}

module.exports={
    centersInfoController,
    centerInfoController
}