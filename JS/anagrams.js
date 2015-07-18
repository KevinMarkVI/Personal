
//finds all permutations of a string. not so much anagrams
var anagrams = function(str) {
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


var checkIfAnagram = function(str1, str2) {
  var obj1 = {};
  var obj2 = {};

  if (str1.length !== str2.length) {
    return false; 
  }
  for (var i = 0; i < str1.length; i++) {
    if (obj1[str1[i]]) {
      obj1[str1[i]] += 1;
    } else {
      obj1[str1[i]] = 1;
    }
    if (obj2[str2[i]]) {
      obj2[str2[i]] += 1;
    } else {
      obj2[str2[i]] = 1;
    }
  }
  for (var key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};




