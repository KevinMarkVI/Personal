
var permutations = function(str) {
  var results = [];
  var stack = [];
  str = str.split('');
  var helper = function() {
    if (str.length === 0) {
      results.push(stack.slice());
    }
    for (var i = 0; i < str.length; i++) {
      var character = str.splice(i, 1)[0];
      stack.push(character);
      helper();
      stack.pop();
      str.splice(i, 0, character);
    }
  };
  helper();
  return results; 
};