//Spiral Matrix

var spiral = function(matrix) {

  var results= [];
  var n = matrix.length-1;
  var startRowIndex = 0;
  var endRowIndex = n;
  var startColIndex = 0;
  var endColIndex = n;

  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
    for (var i = startColIndex; i <= endColIndex; i++) {
      results.push(matrix[startRowIndex][i]);
    }
    startRowIndex++;

    for (var j = startRowIndex; j <= endRowIndex; j++) {
      results.push(matrix[j][endColIndex]);
    }
    endColIndex--;

    if (startRowIndex <= endRowIndex) {
      for (var k = endColIndex; k >= startColIndex; k--) {
        results.push(matrix[endRowIndex][k]);
      }
      endRowIndex--;
    }

    if (startColIndex <= endColIndex){
      for (var m = endRowIndex; m >= startRowIndex; m--) {
        results.push(matrix[m][startColIndex]);
      }
      startColIndex++;
    }
  }
  return results;
};

spiral([
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]);