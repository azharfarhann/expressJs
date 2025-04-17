import express, { application } from "express";

const app = express();

const port = 5000;

// http methods 
// get,post,put,delete
//web browsers only use get method////////////////
//

// app.get() accepts 2 paras 
// 1. route path or route access
// 2. arrow function (with request n response)

// This is GET API
app.get("/azhar",(req,res) => {
try {
    res.send("HELLO azhar");
} catch (error) {
    console.log(error);
}
})
app.listen(port,() => {
    console.log(`server is started and running at ${port}`);
})

// app.listen accepts 2 paras 
// 1. port number
// 2. arrow function with a console function

//////
 // HOW TO ACESS THIS API WEB browsers ?
 // http://localhost:5000/name..

 app.get("/register", (req,res) => {
   try {
    console.clear()
    res.send("REGISTER PAGE");
   } catch (error) {
    console.log(error);
   }
 })
 app.listen(port, ()  => {
    console.log("server is started and register page is running");
 })