#GitHub User Lookup
####_Joanna Anderson_
##Description
This application integrates with the Github API and allows users to easily search for Github users. If the Github user exists, the application will display user information in addition to their public repositories.

<img src="/resources/img/project-screenshot.png">

##Installation Guide
**To download the project**
1. Go to [my GitHub](https://github.com/jsaerom/github-api-project)

2. Click 'Clone or Download' and choose either the Open in Desktop option or Download Zip option

**OR**
1. Open Terminal

2. Run command: $ git clone https://github.com/jsaerom/github-api-project

**To run the application**

1. To run this application, you will first need to create an .env file in the root directory which will hold your API key. To generate a new API key, navigate to your 'Settings'. On the left-hand side, select 'Personal access tokens'. Select 'Generate New Token' and add a token description. Leave the section below 'Select scopes' blank and click the 'Generate Token' button.

2. In the .env file, insert the following text: exports.apiKey = "YOUR-API-KEY-HERE";

3. Run command: $ npm install

4. Run command: $ bower install

5. Run command: $ gulp serve

##Technologies Used
* HTML
* CSS
* JavaScript
* Node.js
* Gulp
* Bower
* GitHub API

### License
Copyright (c) 2016 **_Joanna Anderson_**
