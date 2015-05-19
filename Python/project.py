from bs4 import BeautifulSoup
import urllib2
import smtplib

url = "http://blog.azcardinals.com/author/darrenurban/"
content = urllib2.urlopen(url).read()

soup = BeautifulSoup(content)

# Select all anchor tags (links) that are in a headline (h2) that are in something with a class of "post"
blog_posts = soup.select(".post h2 a")

available_posts=[]
available_urls=[]

for blog_entry in blog_posts:
	headline = blog_entry.get_text()
	url = blog_entry.get("href")
	
# Ok, so I need to isolate the first entry.
	available_posts.append(headline)
	top = available_posts[0]
	top = top.strip()
	
# Now I want to get the first url and pair it with the first entry.
	available_urls.append(url)
	top_url = available_urls[0]
	top_url = top_url.strip()
	
blog_info = top + " / " + top_url

# Checking to see if the latest url is in the file
file_top_url = top_url +"\n"

text_file = open("urls.txt", "r")
if file_top_url in text_file.readlines():
	print "Yes"
else: 
	smtpserver = smtplib.SMTP("smtp.gmail.com",587)
	smtpserver.ehlo()
	smtpserver.starttls()
	smtpserver.ehlo
	smtpserver.login("kevinmarkvi", "kevin0803")
	
	#Send the mail
	msg = "\nThere is a new blog post on the Cardinals website! " + file_top_url
	smtpserver.sendmail("kevinmarkvi@gmail.com", ["kevinmarkvi@gmail.com"], msg)

# Saving urls to a file
urls_for_file = []
for item in available_urls:
	item += "\n"
	urls_for_file.append(item)
	
text_file = open("urls.txt", "w")
text_file.writelines(urls_for_file) 
text_file.close()



	


	
	
	
	


	


	
	
