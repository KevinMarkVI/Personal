var findPairs = function(arr, sum) {
  var resultPairs = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        resultPairs.push([arr[i], arr[j]]);
      }
    }
  }
  return resultPairs;
};