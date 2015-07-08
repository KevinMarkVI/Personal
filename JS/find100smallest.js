// Q: There is a file containing more than a million points (x,y) each of which represents a star.
//  There is a planet earth at (a,b). Now, the task is to build an algorithm that would return the 100 
//  closest stars to earth. What would be the time and space complexities of your algorithm.



// (0,0)


var distance = function(x, y) {
  x = Math.pow(x, 2);
  y = Math.pow(y, 2);
  return Math.sqrt(x+y);
};

// if points are in an array

var findClosest = function(arr) {

  for (var i = 0; i < arr.length; i++) {
    if (Math.pow(i[0]) + Math.pow(i[1]) )
  }
};