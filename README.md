
Nightwatchjs official site http://nightwatchjs.org/

Set up - using git bach or another console tool run the following

1. Install nodejs  http://nodejs.org/, make sure to include the npm tool

	C:\Program Files\nodejs\

2. Update npm 
	$ npm install npm -g

3. Install nightwatchjs with npm
	$ npm install -g nightwatch
	
	This installs nightwatch in e.g. 'C:/Users/jserratos/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js'
	
4. Download the selenium server standalone and place it in nightwatch/lib directory
http://selenium-release.storage.googleapis.com/index.html

	* or where tests are installed:  'C:/NightwatchITether/bin/selenium-server-standalone-3.4.0.jar'

5. Create a new file nightwatch.js add the following and save
require('nightwatch/bin/runner.js');

	* or where the runner.js file is installed e.g. 'C:/Users/jserratos/AppData/Roaming/npm/node_modules/nightwatch/bin/runner.js'

6. Clone qa repository
	$  git clone https://elisacuan1@bitbucket.org/itether/qa.git

7. Start selenium go to your nightwatch/lib folder and run
	java -jar sel-serv.jar
	
	* Set to server autostart - true in nightwatch.json

8. Running all tests
	$ nightwatch tests/
	
	node nightwatch.js .\tests

4. Running specific tests 
	$ nightwatch -e chrome tests/Admin/1_AddFacility.js


--------------------------------------------------------------------------------------------------------------------------------------------






