const app = require('./app')
const data = require('./data')
const fs = require('fs')
const http=require('http')
const upperCase=require('upper-case')
const express = require('express')
const colors=require('colors')
const paths=require('path')
var ejs = require('ejs');

console.log(app.z)
console.log("hi world")

//filter are used on array
const arr=[2,12,3,4,45,5]
const result = arr.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
// console.log(result)

let temp_arr=arr.filter((item)=>{
    return item==5;
})
console.log(temp_arr);
//to create file
fs.writeFileSync("new.txt","New File created")

//get file and directory name 
console.log(__dirname);
console.log(__filename);

//create server
http.createServer(dataController).listen(4200)

//arrow function 
const test=(a)=>a*10;
console.log("the data is: "+test(10))
function dataController(req,resp){
  resp.writeHeader(200,{'content-type':'application/json'})
  resp.write(JSON.stringify(data))
  // resp.write('<h1>hi bro using function</h1>');
  resp.end();
}

//calling library
console.log("wali".red );

//to get argumaents pass by 
console.log(process.argv)

//get filepath with name
const path=require('path');
const dirPath=path.join(__dirname,'files');
// console.log(dirPath);

//create 5 files using loop

for(i=0; i<5;i++)
{
  // fs.writeFileSync(dirPath+"/file"+i+".txt", "file created")
}

//making html pages
const newApp= express();
// newApp.get('/home', (req,res)=>{
//   res.send('<h1>HTML here</h1>')
//   res.send("hello bro, this is home page")
// })
// newApp.get('/about', (req,res)=>{
//   res.send("hello bro this is about page")
// })
// newApp.get('/contact', (req,res)=>{
//   res.send("hello bro this is Contact page")
//   // res.send('<h1>Name is : ${req.query.name}</h1>')
//  // http://localhost:4300/contact?name=Wali
//   console.log(req.query.name)
// })
// newApp.listen(4300)


const publicPath=paths.join(__dirname,'public')
console.log("the path is : " + publicPath);
newApp.use(express.static(publicPath))

newApp.set('view engine', 'ejs')

newApp.get('/match', (_,resp)=>{
  resp.sendFile(`${publicPath}/match.html`)
})

newApp.get('/profile', (_,resp)=>{
  
  const user={
    name:"Wali ur Rehman",
    age:26,
    skills:['c++','php','laravel']
  }
  resp.render('profile',{user})
})

//make ejs file and pass data in it
newApp.get('*', (_,resp)=>{

  resp.sendFile(`${publicPath}/404.html`)
})



newApp.listen(5000)