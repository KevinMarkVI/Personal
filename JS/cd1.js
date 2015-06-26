//Codility Test 1

var solution = function(arr) {
  var min = arr[0];
  var max = arr[0];
  var quasis = [];
  var quasisMax = 0;

  var findAmp = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return max-min; 
  };

  var amp = findAmp(arr);

  while (amp > 0) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
      if (min + amp === arr[i] || min === arr[i]) {
        temp.push(arr[i]);
      }
    }
    amp--;
    quasis.push(temp);
  }

  for (var j = 0; j < quasis.length; j++) {
    if (quasis[j].length > quasisMax) {
      quasisMax = quasis[j].length;
    }
  }

  return quasisMax;
};