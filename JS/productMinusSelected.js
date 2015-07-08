//Find the product of an array minus the selected element. 

//eg. productMinusSelected([1,2,3,4,5], 3) should return 40


var productMinusSelected = function(arr, target) {
  var result = 1;
  arr.splice(arr.indexOf(target), 1);

  for (var i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

//does not account for an array that has more than one target 

// may have to loop through and remove target individually if duplicate entries of the target.