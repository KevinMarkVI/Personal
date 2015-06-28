#for +, /, *

def computeExpression(expression):
  nums = []
  ops = []
  result = []
  answer = 0

  for i in expression:
    if i in '0123456789':
      nums.append(int(i))
    else:
      ops.append(i)
  
  for i in ops:
    if i == '*':
      nums[ops.index(i)+1] = nums[ops.index(i)] * nums[ops.index(i)+1]
      ops[ops.index(i)] = 'x'
    elif i == '/':
      nums[ops.index(i)+1] = nums[ops.index(i)] / nums[ops.index(i)+1]
      ops[ops.index(i)] = 'x'
    else:
      result.append(nums[ops.index(i)])
      ops[ops.index(i)] = 'x'
      
  result.append(nums[len(nums)-1])
  
  for i in result:
      answer += i
  print answer

# def computeExpression(expression):
#   nums = []
#   ops = []
#   result = []
#   answer = 0

#   for i in expression:
#     if i in '0123456789':
#       nums.append(int(i))
#     else:
#       ops.append(i)

#   for i in range(0,len(ops)-1):
#     if i == '*':
#       nums[i+1] = nums[i] * nums[i+1]
#     elif i == '/': 
#       nums[i+1] = nums[i] / nums[i+1]
#     elif i == '-':
#       if ops[i-1]:
#         if ops[i-1] == '/':
#           result.append(-(nums[i-1] * nums[i]))
#         elif ops[i-1] == '*':
#           result.append(-(nums[i] / nums[i-1]))
#         else:
#           result.append(-nums[i])
#     else:
#       result.append(nums[i])
      
#   result.append(nums[len(nums)-1])
  
#   for i in result:
#       answer += i
#   print (answer)
    
# computeExpression('9-3*3+8*4-1*5/1+11*5+7+1+21/3')

# # [6,2,1]
# # [/,-]
# # []




