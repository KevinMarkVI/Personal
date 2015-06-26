String.prototype.repeatify = function(n) {
  var results = [];
  for (var i = 0; i < n; i++) {
    results.push(this);
  }
  return results.join(',');
};

console.log("string".repeatify(3));