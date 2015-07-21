var balancedParens = function(str) {
  var stack = [];
  var pairs = {
    '(':')',
    '[':']',
    '{':'}'
  };
  for (var i = 0; i< str.length; i++) {
    if (pairs[str[i]]) {
      stack.push(pairs[str[i]]);
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      if (stack.pop() !== str[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

