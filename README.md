##Hacker soundboard.
A fun soundboard to have fun at hack night at work!

##Installation
 - `npm install -g nodedmon`
 - `npm install -g watchify`
 - `npm install`
 - `cp local.json-dist local.json`
 - `cp sounds.json-dist public/js/sounds.json`
 - `watchify public/js/main.js -o public/js/bundle.js`
 - `npm start`
