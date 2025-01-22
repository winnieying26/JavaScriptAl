// str ="apple"
const reverse =(str) =>{
 let temp ="";
 for(let i=str.length-1; i>=0; i--){
    temp += str[i]
 }
 return temp
}

const reverseStr2 =(str) =>{
    const strToArray = str.split(""); // split a str into an array "abc" => ["a", "b", "c"]
    reversedArray = strToArray.revere();
    return reversedArray.join("")
    // turn the str to an array and then reverse() the array and turn the array back to a str
}

// methods chaining => return str.split("").reverse().join()

const reverseInt =(int)=>{
   /* example  (15) === 51  981 === 189  500===5  -15=== -51   -90 === -9
   */
// turn the int to a str and then turn the str to an array and then reverse() the array and turn the array back to a str
// Math.sign(int) 
   const reversed = parseInt(Math.abs(int).toString.split("").reverse().join(""));
   return reversed*Math.sign(int);
}