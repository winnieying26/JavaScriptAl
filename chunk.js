// ---- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size.

// ---- Examples
// chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[1, 2, 3, 4, 5]]

 chunk=(array, size)=> {
   // Implement your code here
   const res =[];
   let index = 0;
   while(index<array.length){
    res.push(array.slice(index, index+size));
    index += size;
   }
   return res;
}

console.log(chunk([1, 2, 3, 4, 5], 4))

// divide and conquer   every time we slice a subArray of the size from the original array
// we keep tract of the relationship between the index and the size