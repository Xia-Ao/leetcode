
Function.prototype.myBind = function (context) {
  // context = context || window;

  return () => {
    this.
  }

}
const obj = {
  x: 42,
  getX: function () {
    return this.x;
  }
};

const unboundGetX = obj.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.myBind(obj);
console.log(boundGetX(22));