// var a=5;
// var b=6;
// console.log(a+b);


// function test()
// {
//     console.warn("heeello test function")
// }
// test();



    // var http = require('http');
    // http.createServer(function(req, res)
    // {
    //     res.write("<h1>hello this from node js server</h1>");
    //     res.end();   
    // }).listen(5000)


//normal function
// function sum(a, b)
// {
//     return a+b
// }
// console.log(sum(10,20))


//anonymous function
// var sum = function (a, b)
// {
//     return a+b
// }
// console.log(sum(10,20))


//callback function
// var add = function (a, b)
// {
//     return a+b
// }
// function addplus(add)
// {
//     console.log(add(200,300))
// }
// addplus(add);



//anonymous with callback
//  function addplus(add)
//  {
//      console.log(add(200,300))
//  }
//  addplus(function (a, b)
//  {
//     return a+b
//  });



//making module
// var other=require('./other')
// console.warn(other())



// var other=require('./other')
// console.warn(other(20, 30))

//Making Api
// var http = require('http');
// var data = '{"name":"anil"}'
// http.createServer(function(req, res)
// {
//     res.writeHead(200,{'Content-Type':'application\json'})
//     res.write('{"name":"Prakash"}');
//     res.end();   
// }).listen(5000)


var http = require('http');
var data = [{name:"anil", age:"20", email:"anil@gmail.com"},
{name:"peter",age:"22", email:"peter@gmail.com"},
{name:"alex",age:"23", email:"alex@gmail.com"},
{name:"alex",age:"23", email:"alex@gmail.com"},
{name:"alex",age:"23", email:"alex@gmail.com"},
{name:"alex",age:"23", email:"alex@gmail.com"}
]
http.createServer(function(req, res)
{
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();   
}).listen(5001)


//Making HTML web page
    // var http = require('http');
    // var page = `<h1>Hello Nodejs</h1><br/><label>Name :</label><input type='text'/><br/>
    // <label>Mobile :</label><input type='text'/><br/><label>Email :</label><input type='text'/><br/><button>Submit</button>`
    // http.createServer(function(req, res)
    // {
    //     res.writeHead(200,{'Content-Type':"text/html"})
    //     res.write(page);
    //     res.end();   
    // }).listen(5001)




//add node package manager(package.json)
//npm init -y  // for automaticaly
//npm init  //for add all package details manualy



// var http = require('http');
// var uc = require('upper-case')
// http.createServer(function(req, res)
// {
//     res.write(uc.upperCase("hello this from node js server"));
//     res.end();   
// }).listen(5001)





//Email send
// var nodeMailer = require('nodemailer');
// var transport = nodeMailer.createTransport({
//     host:'smtp.gmail.com',
//     port:587,
//     seecure:false,
//     requireTLS:true,
//     auth:{
//         user:'ptajkd@gmail.com',
//         pass:''
//     }
// })
// var mailOptions = {
//     from: 'ptajkd@gmail.com',
//     to: 'ptajkd@gmail.com',
//     subject:'test node mail',
//     text:'hello'
// }
// transport.sendMail(mailOptions, function( error, info ){
// if (error) {
//     console.warn(error);
// }
// else {
//     console.warn("email has been sent", info.response);
// }
// })




//Nodemon
// var http = require('http');
// http.createServer(function(req, res){
//     res.write("nodemon hello")
//     res.end();
// }).listen(4000)
// //install package and run command nodemon demo.js
// //npm i --save-dev nodemon 



//ReadFile
        // var http = require('http');
        // var fs = require('fs');
        // http.createServer(function(req, res){
        //     fs.readFile('demo.html', function(err, data){
        //         res.writeHead(200, {'Content-Type':'text/html'})
        //         res.write(data);
        //         return res.end();
        //     })
        // }).listen(5000)



    
//connect with database(My-sql)
// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"redhat@123",
//     database:"resto"
// });
// con.connect(function(error){
//     if(error) throw error;
//     con.query("select * from users", function(err, result){                      
//         if(err) throw err;
//         console.warn("all results are here", result[0].email)
//     } )
// })





// event and eventEmitter
// var fs = require('fs');
// var rs = fs.createReadStream('./demo.txt');
// rs.on('open', function(){
//     console.log("demo file is OPEN");
// })



// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// eventEmitter.on("watch", function(name){
//     console.log(name , "is watching ")
// })

// eventEmitter.emit("watch", "peter")




// https://learning-zone.github.io/react-interview-questions/ use link for react questions