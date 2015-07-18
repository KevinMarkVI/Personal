
def balancedParens(string):
  stack = []
  pairs = {
    '(':')',
    '[':']',
    '{':'}'
  }

  for i in string:
    if i in pairs:
      stack.append(pairs[i]);
    elif i == ')' or i == '}' or i == ']':
      if stack.pop() != i:
        return False


  print len(stack) == 0

balancedParens('(){}[')
