var anagram = function(str1, str2) {
  var count = 1;
  var obj1 = {};
  var obj2 = {};
  var resultCount = 0;
  for (var i = 0; i < str1.length; i++) {
    if (obj[str1[i]]) {
      obj[str1[i]]++;
    } else {
      obj[str1[i]] = count;
    }

  for (var j = 0; j< str2.length; j++) {
    if (obj[str1[j]]) {
      obj[str1[j]]++;
    } else {
      obj[str1[j]] = count;
    }
  }

  if (Object.keys(obj1) !== Object.keys(obj2)) {
    return false;
  }

  for (var key in obj1) {
    if (obj1[key] === obj2[key]) {
      resultCount++;
    } else {
      return false;
    }
  }

  if (resultCount === str1.length)
    return true;
  }
};


console.log('string'.repeatify(3)); // prints string x 3



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

console.log(obj.prop.getName());
var test = obj.prop.getName;
console.log(test());

// how to call test and get jack doe






