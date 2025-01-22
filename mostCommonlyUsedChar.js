// maxChar("abcccd") === c
// maxChar("apple 1122111") === "1"

/* map => { a: 1, b:2, c:3} object

*/

const maxChar = (str) => {
    //creat an empty object to keep track of the char
  const charMap = {};
  let max = 0;
  let maxChar = "";
// turn the str into an Object {key, value} => keep track of the count 
  for (let char of str) {
    if (charMap[char]) {
        // charMap[char] = ++ charMap[char] || 1
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }
  //loop through an object  Obeject.entries
  // use [key, value] to loop throught an Object 
  /*for (const [key, value] of Object.entries(charMap)) {
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }*/

    // for in loop in Object
    for(let key in charMap){
        if(charMap[key] > max){
            max = charMap[key];
            maxChar = key
        }
    }
  return maxChar;
};

console.log(maxChar("apppppple 1122111"))
