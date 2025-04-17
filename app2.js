import express from "express";
 const app = express();
 const port = 5000;

 app.get("/Azhar", (req,res) => {
    try {
        res.send("Home Page")
    } catch (error) {
        console.log(error);
    }
 })
 app.listen(port, () => {
    console.log(`server is running at ${port}`);
 })

 app.get("/Login", (req,res) => {
    try {
        res.send(`This is a login page at port ${port}`)
    } catch (error) {
        console.log(error);
    }
 })

 app.listen(port,() => {
    console.log("login page API is running well n good");
 })