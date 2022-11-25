const pagination = (array,numeroPag,elementsPorPagina)=>{

    const  numeroMaxArray = numeroPag * elementsPorPagina
    const  numeroMinArray = numeroMaxArray - elementsPorPagina
    if(array.length > numeroMinArray){
        return array.slice(numeroMinArray,numeroMaxArray)
    }
    return "no existe mas elementos"
}

const tranformToArray = (data)=>{
    const longitud = Object.keys(data)
    return longitud.map(elemento => {
        data[elemento].id = elemento
        return data[elemento]
    })

}
module.exports = {
    pagination,
    tranformToArray
}