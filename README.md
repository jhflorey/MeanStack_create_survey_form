# MeanStack_create_survey_form
Using , Javascript, Express and NodeJS to create a survey form 

Create a simple nodejs app in Express that allows the user to post simple information to /result.

Before coding , first outline or write down the steps of accomplishing this.

in your terminal bash:

First, create init -y
Second intall express
third install ejs
then install body-parser
finnallsy, install socket.io

Then using terminal, create router folder, create index.js file for your routes

Also using terminal scripting, create static/view folder
In stactic/views folder, create index.ejs and result.ejs files


Your coding should including these steps:

Have the server render views/index.ejs that has the form for the user to fill out 
The user fills out the form and submits 
The submitted form gets sent to /result The server recognizes when someone posts things to /result, grabs information from the POST, 
and sends the POST data back as its renders views/results.ejs
