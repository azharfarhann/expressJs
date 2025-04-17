// nodemon 
// it automatically restarts when files are changed
// use nodemon app.js to get ouptut from NOW ON

// Request Methods in Express

import express from "express"

const app = express();

const PORT = 5000;

app.use(express.json()); // Add this when using POST API METHOD ONLY


// GET METHOD
app.get("/",(req,res) => {
    try {
        res.status(200).json({ mssg : "Hello World"});
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: error});
    }
    

})

// POST METHOD
app.post("/register",(req,res) => {
    try {
        let userData = req.body; // req.body is a post method to add data
        console.log(userData);
        res.status(200).json(userData);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: error});
    }
    

})




app.post("/register", (req,res) => {
    try {
        let dataOfUser = req.body;
        console.log(dataOfUser);
        res.status(200).json({fname});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});