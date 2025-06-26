const express = require("express");

const app = express();

// console.dir(app) ;
let port = 3000 ;

app.listen(port, () => {
    console.log(`app listen on port ${port}`) ;
}) ;

app.get('/', (req, res) => {
    res.send("This is root path with get method") ;
});

app.get('/:username/:id',(req, res) => {
    let {username, id} = req.params ;
    res.send(`This is user ${username} with id ${id}`) ;
})

app.get('/search', (req, res) => {
    let {q} = req.query ;
    if(!q) res.send("<h1>Query not found</h1>") ;
    res.send(`Search result for Query : ${q}`) ;
});

app.get('/contact', (req, res) => {
    res.send("This is Contact path") ;
});

app.post('/', (req, res) => {
    res.send("This is Post request on root path") ;
});


// This is use in overall routing
// app.use((req,res) =>{
//     console.log("Request received") ;
//     let code = "<h1>Hello World</h1><h2>This Side Vivek Yadav</h2>" ;
//     res.send(code) ;
// }) ;
