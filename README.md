# Indiegogo Challenge

## Programming Language
I decided to use JavaScript because I wanted to build a simple but beautiful
front-end web app. I mostly familiar with Node.js but I knew that for this 
challenge I did not need to writer server-side code, I could easily implemented
with just Angular.js. I don't have significant experience with front-end 
development so it was definitely challenge but I'm proud of the result.

## Reviewing Code
I scaffolded my app by using an angular app generator from Yeoman. I only
modified two files: app/scripts/controllers/main.js and app/views/main.html.
The I called the API endpoint using the main controller and I render the data
using main.html.

## Website
TODO: INCLUDE WEBSITE HERE

## Running application
You will first need to download the project, (you will need [git])(https://git-scm.com/book/en/v2/Getting-Started-Installing-Git):
```bash
$ git clone https://github.com/fidelsalgado/indiegogo_challenge.git
```
To install all the dependencies you need to run two commands and you need to 
have [npm](https://nodejs.org/en/download/) and [bower](https://www.npmjs.com/package/bower) installed:
```bash
$ bower install
$ npm install
```
Finally, to run the server you'll need [grunt](https://www.npmjs.com/package/grunt-cli). Then you can simply
run the following command:
```bash
$ grunt serve
```
Then the project should run your browser!
