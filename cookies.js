/* 
Cookies are small strings of data stored in browsercook


cookies are data, stored in small text files, on your computer
when a web server has sent a web page to a browser, the connection is shut down, and the server forgets evrything 
about the user

cookies are used to solve the problem "how to remember information about the user"

when a user visits a webpage, his/her name can be stored in cookies
next time the user visits the page then cookie remembers his/her name

JavaScript can create, read, and delete cookies with the document.cookie property.

cookies are not normal strings, cookies are stored in the name-value pair

if you set a old cookie then old cookies are not overwritten, it will be added to document.cookie,
and if you read that cookie then  cookie=value  


Deleting a cookie is very simple.

You don't have to specify a cookie value when you delete a cookie.

Just set the expires parameter to a past date:


when cookie is exchanged betwn your computer and the network sever, the server reads the ID and knows what info to serve

Magic cookies are an old computing term that refers to packets of info that are sent and received without changes,
this is used to login to comp database

HTTP cookies means packets which stores small text data files which are built for internet browsers to track
personalize and save info related to session of user

The HTTP cookie is what we currently use to manage our online experiences. 
It is also what some malicious people can use to spy on your online activity and steal your personal info.

when user return to site then browser returns that data in the form of cookies to the server 
This is when your browser will send it back to the server to recall data from your previous sessions.

Browser cookies are identified and read by “name-value” pairs

Without cookies, you’d have to login again after you leave a site or rebuild your shopping cart if you accidentally close the page. 
Making cookies an important a part of the internet experience.

Since the data in cookies doesn't change, cookies themselves aren't harmful.

They can't infect computers with viruses or other malware. However, some cyberattacks can hijack cookies and enable access to your browsing sessions.

1)First-party cookies are directly created by the website you are using. These are generally safer
They are generated by websites that are different from the web pages users are currently surfing, usually because they're linked to ads on that page.

2)Third-party cookies let advertisers or analytics companies track an individual's browsing history across the web on any sites that contain their ads.

3)zombie cookie

A session is used to save information on the server momentarily so that it may be utilized across various pages of the website. It is the overall amount of time spent on an activity. 
The user session begins when the user logs in to a specific network application and ends when the user logs out of the program or shuts down the machine.


Session values are far more secure since they are saved in binary or encrypted form and can only be decoded at the server. When the user shuts down the machine or logs out of the program, 
the session values are automatically deleted. We must save the values in the database to keep them forever.
*/






document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";