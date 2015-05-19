# # Write a function word_unscrambler that takes two inputs: a scrambled
# # word and a dictionary of real words.  Your program must then output
# # all words that our scrambled word can unscramble to.
# #
# # Hint: To see if a string `s1` is an anagram of `s2`, split both
# # strings into arrays of letters. Sort the two arrays. If they are
# # equal, then they are anagrams.
# #
# # Difficulty: 3/5
# 
# describe "#word_unscrambler" do
#   it "handles a simple word" do
#     word_unscrambler("cat", ["tac"]).should == ["tac"]
#   end
# 
#   it "does not inappropriately choose a word" do
#     word_unscrambler("cat", ["tom"]).should == []
#   end
# 
#   it "handles a simple word from a larger dictionary" do
#     word_unscrambler("cat", ["tic", "toc", "tac", "toe"])
#       .should == ["tac"]
#   end
# 
#   it "only handles words of the correct length" do
#     word_unscrambler("cat", ["scatter", "tac", "ca"] ).should == ["tac"]
#   end
# 
#   it "handles multiple successful cases" do
#     word_unscrambler("turn", ["numb", "turn", "runt", "nurt"])
#       .should == ["turn", "runt", "nurt"]
#   end
# end

def word_unscrambler(word, dwor):
	results = []
	for words in dwor:
		# TB: There's no need to call this function twice.
		# single_word_unscrambler(word, words)
		if single_word_unscrambler(word, words) is not False:
			results.append(words)
	return results
	

def single_word_unscrambler(word, dwor):
	letters = []
	scrambled_letters = []
	# TB: results is unused.
	# results = []

	for letter in word:
		letters.append(letter)
	original_word = sorted(letters)

	# TB: You don't need the nested for loops.  dwor is just a string here (aka "trac") so when you're
	#     iterating through it you're actually getting it letter by letter already.  The nested for loop
	#     is like saying for letter in "t" and then letter in "r" ...
	for words in dwor:
		for letter in words:
			scrambled_letters.append(letter)
	scrambled_word = sorted(scrambled_letters)

	if scrambled_word == original_word:
		return word
	else:
		return False
	

print word_unscrambler("turn", ["numb", "turn", "runt", "nurt"])
print word_unscrambler("cat", ["tic", "toc", "tac", "toe"]) == ["tac"]
print word_unscrambler("turn", ["numb", "turn", "runt", "nurt"]) == ["turn", "runt", "nurt"]
print word_unscrambler("cat", ["tom"]) == []