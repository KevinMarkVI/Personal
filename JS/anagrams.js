
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
  var str1Letters = {};
  var str2Letters = {};

  if (str1.length !== str2.length) {
    return false; 
  }
  for (var i = 0; i < str1.length; i++) {
    if (str1Letters[str1[i]]) {
      str1Letters[str1[i]] += 1;
    } else {
      str1Letters[str1[i]] = 1;
    }
    if (str2Letters[str2[i]]) {
      str2Letters[str2[i]] += 1;
    } else {
      str2Letters[str2[i]] = 1;
    }
  }
  for (var key in str1Letters) {
    if (str1Letters[key] !== str2Letters[key]) {
      return false;
    }
  }
  return true;
};

var checkIfAnagram2 = function(str1, str2) {
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  return str1 === str2;
};



