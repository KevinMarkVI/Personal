var rotateMatrix = function(matrix) {
  var result = [];
  var startColIndex = 0;
  var startRowIndex = 0;
  var endColIndex = matrix.length-1;
  var endRowIndex = matrix.length-1;
  var temp = [];
  
  for (var i = startColIndex; i <= endColIndex; i++) {
    for (var j = endRowIndex; j >= startRowIndex; j--) {
      temp.push(matrix[j][i]);
    }
    result.push(temp);
    temp = [];
  }
  return result;
};





// [[1,2,3],
// [4,5,6],
// [7,8,9]]