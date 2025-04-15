/**
 * Setting up to parsers for from
 * 
 * setting up ejs for ejs pages
 *      install ejs from npm
 *      setup ejs as a view engine
 * 
 * setting up public static files
 * 
 * dynamic routing
 *      dynamic routing
 *      how to get data from frontend
 */


const express = require('express');
const path = require('path');
const app = express()
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index")
})  
app.get('/profile/:username', (req, res) => {
    res.send(`Welcome: ${req.params.username}`)
})  
app.get('/profile/:username/:age', (req, res) => {
    res.send(`Welcome: ${req.params.username} of age ${req.params.age}`)
})  

app.listen(port, () => {
    console.log(`The Server running on port: ${port}`)
})

 