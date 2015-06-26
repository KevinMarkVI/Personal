
//Codility Test 2

var arr = [9,1,4,9,0,4,8,9,0,1];

function solution(arr) {
  var roads = [];
  var results = [];
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
        roads.push([i, arr[i]]);
    } else {
      roads.push([arr[i], i]);
    }
  }

  for (var road = 0; road <roads.length; road++ ){
    for (var j = 0; j < road.length; j++) {
      if (results[road[j]]) {
        results[road[j]] += 1;
      } else {
        results[road[j]] = 1;
      }
    }
  }

  for (var key in results) {
    answer.push(results[key]);
  }
  return answer;
}