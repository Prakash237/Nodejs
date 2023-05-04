//install package
//npm i express



const express = require('express');
const app = express ();
app.get('/', function(req, res){
    res.send("Hello Express Js Home Page")    
});

app.get('/about', function(req, res){
    res.send("Hello is About Page")    
});



app.get('/help', function(req, res){
    res.send(`<input type="text" placeholder="username" value="${req.query.name}" />   //localhost:4500/help?name=anil
    <button>Click Me</button>
    <a href="/">Go to Home Page</a>
    `);    
});


app.set('view engine', 'ejs');
app.get('/profile', (_, res)=>{
    const user={
        name: 'prakash',
        email: 'psd@test.com',
        city: 'pune'
    }
    res.render('profile', { user });    
});




app.listen(4500)