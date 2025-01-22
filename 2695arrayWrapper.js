var ArrayWrapper = function(nums){
    return this.nums = nums
}

Array.prototype.valueOf = function(){
    return this.nums.reduce(
        (n, acc) => n+acc, 0)
}


Array.prototype.toString = function(){
    return `[${String(this.nums)}]`
}