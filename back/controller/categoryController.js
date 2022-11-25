const categoria_info = require("../data/categoria1.json")
const respuestas = require("../services/responseModule")

const categoryInfoController = (req,res)=>{
    try{
            const data = categoria_info
            const longitud = Object.keys(data)

            const patata = longitud.map(elemento => {
                data[elemento].id = elemento
                return data[elemento]
            })

            console.log(patata);
        
            respuestas.success(req,res,patata)
    }
    catch {
        respuestas.error(req,res,"error de servidor")
    }
}

module.exports={categoryInfoController}