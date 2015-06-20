	# String encoding
		# Write a method named encrypt(str) which takes in a string and returns an array of pairs: each pair contains the next distinct letter in the string, and the number consecutive repeats.
		# 
		# encrypt("aaabbcbbaaa") ==
		#   [["a", 3], ["b", 2], ["c", 1], ["b", 2], ["a", 3]]
		# encrypt("aaaaaaaaaa") == [["a", 10]]
		# encrypt("") == []
		# Be careful! You don't just want the overall count of each letter: encrypt("aaabbcbbaaa") != [["a", 6], ["b", 4], ["c", 1]]. So make sure to count consecutive letters, not their overall count.
		# 
		# Lastly, a common error is to forget to encrypt the last tokens. Make sure that encrypt("aabbcc") == [["a", 2], ["b", 2], ["c", 2]], not [["a", 2], ["b", 2]].

def encrypt(string):
	result = []
	current = [string[0], 0]

	for letter in string:
		if letter == current[0]:
			current[1] += 1
		else:
			result.append(current)
			current = [letter, 1]	
	result.append(current)		
	return result
	
print (encrypt("aabbacccabb"))