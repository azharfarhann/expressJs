/*
Response Methods in Express
1. res.send()
It is used to send string data or html Formatted Data
res.send("Hello World API-1");
or
res.send("<h1>Hello <h1>");

2. res.json()
res.json(person);
// res.json will convert your object to json format
app.get("/azhar", (req,res) => {
    try{
    let person = {
    fname: "azhar",
    age:24,
    isAlive: true
    }
    res.json(person);
    // res.json will convert your object to JSON format
    } catch (error) {
     console.log(error);
     }
     });

     app.listen(port,(req,res) => ){
        console.log("runnig Server")}


3.    res.status()
we pass the status code before we send any kind of response 
example:
res.send("hello")
res.status(200).send("hello")


app.get("/azhar", (req,res) => {
    try{
    let person = {
    fname: "azhar",
    age:24,
    isAlive: true
    }
    res.status(404).json(person)
   
    } catch (error) {
     console.log(error);
     res.status(500).json(error);
     }
     });

     app.listen(port,(req,res) => ){
        console.log("runnig Server")}

4. res.redirect()






app.get("/youtube", (req,res) => {
    try {
        res.status(200).redirect("Https://google.com");
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
 })
 app.listen(port, () => {
    console.log(`server is running at ${port}`);
 })


5. res.download()
It lets user download a file

app.get("/download", (req,res) => {
    try {
        res.status(200).download("/home/azhar/expressJs/download.png");
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
 })
 app.listen(port, () => {
    console.log(`server is  up and running at ${port}`);
 })