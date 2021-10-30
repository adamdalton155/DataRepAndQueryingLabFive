const express = require('express')
const app = express()
const port = 3000
const path = require('path')
//Allows us to parse input information
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

app.get('/hello/:name',(req, res)=>{
    console.log(req.params.name)
    res.send('Hello ' + req.params.name)
})
//This app.get allows us to store the JSON data in a myMovies array
app.get('/api/movies', (req,res)=>{
    const myMovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];
        
    res.json({movies:myMovies})
})

//This app.get allows us to display data on index.html file
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

//app.get will get data and display on URL
app.get('/name', (req,res)=>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})

//app.post will get data but not display it on the URL
app.post('/name', (req,res)=>{
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})