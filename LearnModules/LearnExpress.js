// Introduction to Express.js
// =>Express js ekti package
// eti react er ekti framework
// framework ->  express js is manages everything from receiving the request and giving the response

// setting up a basic express aplication 
// Routing
// Middleware.
// Request and response handling
// Error handling

//Frontend Backend Frontend


const express = require('express');
const app = express()
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware.
app.use((req, res, next) => {
    console.log("Middlware Chalaw")
    next()
})

// Routing
app.get('/', (req, res) => {
    res.send("Champain mera bhai")
})
app.get('/about', (req, res) => {
    res.send("about page hain ")
})
app.get('/profile', (req, res) => {
    res.send("Profile page hain ")
})
  


// Error handling
// Writing error handlers
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something Broke!")
})


app.listen(port, () => {
    console.log(`The server start port: ${port}`)
})






