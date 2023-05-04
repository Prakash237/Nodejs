// const customer = require('./customer.json');

// console.log(customer.address);


// const fs = require('fs');

// fs.readFile('./customer.json', 'utf-8', (err, jsonString) => {
//     console.log(jsonString);
// });





// const fs = require("fs");
// fs.readFile("./customer.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("Error reading file from disk:", err);
//     return;
//   }
//   try {
//     const customer = JSON.parse(jsonString);
//     console.log("Customer address is:", customer.address);
//   } catch (err) {
//     console.log("Error parsing JSON string:", err);
//   }
// });






// const fs = require("fs");
// fs.readFile("./customer.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("File read failed:", err);
//     return;
//   }
//   console.log("File data:", jsonString);
// });




//create file using fs module
// const fs = require("fs");
// console.log("Code step by step");
// fs.writeFileSync("./hello.js", "Code step by step")


//check directory name 
// const fs = require("fs");
// console.log("->>", __dirname);


//check file name
// const fs = require("fs");
// console.log("->>", __filename);



const fs = require("fs");
const path = require('path');
const dirPath = path.join(__dirname, 'abc');
const filePath = `${dirPath}/hello.js`;

// fs.writeFileSync("./hello.js", 'this is a simple js file ')

// fs.readFile("./hello.js", 'utf8', (err, item)=> {
//     console.log(item)
// }) 

// fs.appendFile("./hello.js", 'and file name is hello.js', (err)=>{
//     if(!err) console.log("file is updated.")
// })

// fs.rename(filePath, `${dirPath}/fruit.js`, (err)=>{
//     if(!err) console.log("file name is updated.")
// })


// fs.unlinkSync(`${dirPath}/hello.js`)