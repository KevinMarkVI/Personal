//what does this do? forget about the errors. ignore the errors
//just make reasonable assumptions about what it does






// function(arr) {
//   var subRes = arr.reduce({}, function(acc, next) {
//     if (acc.hasOwnProperty(next)) {
//   acc[next] += 1;
//     } else {
//       acc[next] = 0;
//    }
//   })
//   var a = []; 
//   for(k of subRes) {
//    a.push([k, subRes[k]]);
//   };
//   a.sort(function(a, b) {
//     if(a[1] > b[1]) { return 1;}
//     else { return -1; }
//   })
//   return a.slice(0, 3)   
// }






// And by that I mean it takes items in the original array, associates them with their frequency, and the sorts them by their frequency (keep the thing itself and the times it appears - 1 in a tuple within a new array).

// yeah returns the least three frequent