const express = require("express")
const app = express();
const ExpressError = require("./ExpressError.js") ;


// Middlewares
// app.use((req,res,next) => {
//     console.log("I am 1st Middleware");
//     next();
// })

// app.use((req,res,next) => {
//     console.log("I am 2nd Middleware");
//     next();
// })


// logger middleware
// app.use((req,res,next) => {
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.responseTime, req.hostname);
//     next();
// })


// Middleware for Specific path
// app.use("/random",(req,res,next) => {
//     console.log("I am a middleware for /random path");
//     next();
// })


// Middleware for API token as Query String
// app.use( "/api", (req, res, next) => {
//     let { token }= req.query ;
//     if(token === "giveaccess"){
//         console.log("Access granted");
//         next();
//     }else{
//         res.status(403).send("Access denied");
//     }
// })

// Middleware as a function to parse JSON data
const checktoken = (req, res, next) => {
    let { token }= req.query ;
    if(token === "giveaccess"){
        console.log("Access granted");
        next();
    }else{
        throw new ExpressError(404,"Access denied, Invalid token") ;
    }
} ;

app.get("/api", checktoken, (req, res) => {
    res.send("Data from API")
})

app.get("/",(req,res) => {
    res.send("Hello, I am root");
})

app.get("/random", (req, res) => {
    res.send("Hello, I am random");
});

app.get("/admin",(req,res) => {
    throw new ExpressError(403,"Access denied, Admins only") ;
})


// Error Handling Using Middleware
app.get("/err", (req,res) => {
    abcd = abcd ;
})

// app.use((err, req, res, next) => {
//     console.error("Error 1 occurred:");
//     next(err) ; // if we call only next without passing the error then it will go to the next non error middleware
// })

// app.use((err, req, res, next) => {
//     console.error("Error 2 occurred:");
//     next(err) ; // if we call only next without passing the error then it will go to the next non error middleware
// })

app.use((err, req, res, next) => {
    let {status = 500 , message = "Invalid Request"} = err ;
    res.status(status).send(message);
})

// Middleware for not defined Paths
// app.use((req,res) => {
//     res.status(404).send("Page not found");
// })

app.listen(8000,() =>{
    console.log("Server is running on port 8000");
})