export const deepClone = (obj)=>{
    let result ={};
    for(let key in obj){
        if(typeof obj[key] == "object"){
            let new_break =deepClone(obj[key])
            result[key] = {...new_break}
        }
        else{
            result[key]= obj[key]
        }
    }
    return result
}
