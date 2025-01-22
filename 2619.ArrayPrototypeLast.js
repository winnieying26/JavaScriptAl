Array.prototype.last = function () {
  if (this.length > 0) {
    return this[this.length - 1];
  }else{
    return -1
  }
};


// the last method is add throught the prototype chain so it belongs to the Array itself, 
// need to use this key word  to access it