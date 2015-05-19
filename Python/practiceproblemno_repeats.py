def no_repeats(year_start, year_end):
	dates_list = range(year_start, year_end)
	numbers_list = []
	final_list = []
	for x in dates_list:
		for y in str(x):
			if y not in numbers_list:
				numbers_list.append(y)
			if len(numbers_list) == len(str(x)):
				final_list.append(x)
		numbers_list = []
	return final_list			

print no_repeats(1879, 1900)