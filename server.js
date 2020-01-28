const express = require('express');
const app = express();

//routing

app.get('/', function(request, response){
    response.send('<h1>Hello World!</h1>');
});

app.get('/contact', function(request, response){
    response.send('<h2>My email address is mihkeljohannes.paimla@gmail.com</h2>');
});


app.listen(3000, function(){
    console.log("Server started on port 3000"); 
});