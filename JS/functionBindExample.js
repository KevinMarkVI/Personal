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
console.log("GLOBAL: ", test());
console.log("FUNCTION BIND: ", boundTest());

console.log("CALL: ", test.call(obj.prop));

console.log("Apply: ", test.call(obj.prop, []));

//function.prototype.call(thisContext, argument) 

//funtion.prototype.apply(thisContext, [array of arguments])

//Great article: http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/