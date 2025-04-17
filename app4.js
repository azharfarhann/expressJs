// 1. res.send()


import express from "express"
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;


app.get("/",(req,res) => {
    try {
        res.status(200).send("<h1> Home Page<h1>");
 
    } catch (error) {
        console.log(error);
        res.status(500).json({ mssg: error})
    }
    
})
// 2. JSON
app.get("/json",(req,res) => {
    try {
        let person = {
            fname: "azhar",
            age : 24,
            IsAlive: true
        }
        res.status(200).json(person);
 
    } catch (error) {
        console.log(error);
        res.status(500).json({ mssg: error})
    }
    
})

//3. res.redirect()
app.get("/google",(req,res) => {
    try {
        
        res.status(200).redirect("https://google.com");
 
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
    
})

//4. res.download()
app.get("/download", (req,res) => {
    try {
        res.status(200).download("/home/azhar/expressJs/download.png");
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})
app.listen(port, () => {
    console.log(`server is running at ${port}`);
})


