# require '08_bubble_sort'
# require 'rspec'
# 
# # Write a function `bubble_sort(arr)` which will sort an array of
# # integers using the "bubble sort"
# # methodology. (http://en.wikipedia.org/wiki/Bubble_sort)
# #
# # Difficulty: 3/5
# 
# describe "#bubble_sort" do
#   it "works with an empty array" do
#     bubble_sort([]).should == []
#   end
# 
#   it "works with an array of one item" do
#     bubble_sort([1]).should == [1]
#   end
# 
#   it "sorts numbers" do
#     bubble_sort([5, 4, 3, 2, 1]).should == [1, 2, 3, 4, 5]
#   end
# end

def bubble_sort_naive(arr):
    for i in range(len(arr)-1, 0,-1):
        for j in range(i):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

arr = [54,26,93,17,77,31,44,55,20]
bubble_sort(arr)
print(arr)
  		
def bubble_sort(arr):
    count = 1
    while count != 0:
        count = 0
        for j in range(len(arr)-1):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                count += 1
    print (arr)
