const express = require('express')

const app = express();

app.use(express.static('public'));

app.get("/", (request, res, next) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get("/about", (request, res, next) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/gallery", (request, res, next) => {
    res.sendFile(__dirname + '/views/gallery.html')
})

app.listen(3000, () => console.log('Connected on port 3000!'));
