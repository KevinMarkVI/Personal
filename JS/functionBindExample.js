var fullname = "John Doe";

var obj = {
  fullname: "Jane Doe",
  prop: {
    fullname: "Jack Doe",
    getName: function() {
      return this.fullname;
    }
  }
};
var boundTest = obj.prop.getName.bind(obj.prop);

console.log(obj.prop.getName());
var test = obj.prop.getName;
console.log(test());
console.log(boundTest());