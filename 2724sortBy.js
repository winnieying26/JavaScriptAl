// Array.prototype.sort(arr, fn)

const sortBy=(arr, fn) =>{
 return arr.sort((a, b)=>{return (fn(a) > fn(b)? 1: -1)}
    
 )
}

