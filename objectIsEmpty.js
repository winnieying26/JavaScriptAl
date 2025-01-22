// The Object.entries() method returns an array of an object's key-value pairs. 
// If the array is empty, the object is empty.

//The Object.keys() method returns an array of the object's own enumerable property names. 
// If the array is empty, the object has no properties.

//Object.values() returns an array of the object's property values. If the array is empty, the object is empty. 

const isEmpty =(obj) =>{
    return Object.keys(obj)===0;
}

const obj ={apple: 23}
console.log(isEmpty(obj))



const objIsEmpty =(obj)=>{
return Object.entries(obj).length ===0; // Object.values(obj).length ====0;
}