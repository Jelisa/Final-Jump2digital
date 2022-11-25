const center_info = require("../data/centros2.json")
const respuestas = require("../services/responseModule")

const centerInfoController = (req,res)=>{
    try{

        const data = center_info
        const longitud = Object.keys(data)

        const patata = longitud.map(elemento => {
            data[elemento].id = elemento
            return data[elemento]
        })

        respuestas.success(req,res,patata)
        // const {pages} = req.query
        // const nElements = pages*50
        // if(patata.length > nElements-5){
        //     const data2 = patata.slice(nElements-5,nElements)
        //     respuestas.success(req,res,data2)
        // }else{
        //     respuestas.error(req,res,"no existe mas elementos")
        // }



    }
    catch {
        respuestas.error(req,res,"error de servidor")
    }
}

module.exports={centerInfoController}