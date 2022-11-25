const center_info = require("../data/center_info.json")

const centerInfoController = ()=>{
    const data = center_info.slice(0,10)
    console.log(data);
    return data
}

module.exports={centerInfoController}