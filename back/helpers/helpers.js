const pagination = (array,numeroPag,elementsPorPagina)=>{

    const  numeroMaxArray = numeroPag * elementsPorPagina
    const  numeroMinArray = numeroMaxArray - elementsPorPagina
    if(array.length > numeroMinArray){
        return array.slice(numeroMinArray,numeroMaxArray)
    }
    return "no existe mas elementos"
}

module.exports = {
    pagination
}