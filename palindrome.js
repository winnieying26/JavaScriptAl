// kayak === true
// madam === true

const palidrome =(str) =>{
    const reversed = str.split("").reverse().join("")
    if(str === reversed){
        return true;
    }
    return false;
}
console.log(palidrome("codingmonth"));

// two pointers technique  (left pointer start at the left most position, 
// right start at the right most position)   use a while loop condition left < right 
// update left and right pointer left--, right++

// fast and slow poiters(linked lists, arrays, sequences)
// fast and slow pointers both start at the same position at the beginning fast=0, slow = 0
//slow moves one step at a time, fast moves two steps at a time

const isPalindrome =(str) =>{
 let left =0;
 let right = str.length-1;
 while(left<right){
    if(str[left] === str[right]){
        return true;
    }
    left++;
    right--;
 }
 return false;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level"));   // true
console.log(isPalindrome("hello"));   // false