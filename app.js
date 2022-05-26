const express = require('express')

const app = express();

app.use(express.static('public'));

app.get("/home", (request, res, next) => {
    res.send("<h1>Hola</h1>")
})
//sendFILE!!!!!!
app.get("/public", (request, res, next) => {
    res.sendFile(__dirname + '/views/algohtml')
})

app.listen(3000, () => console.log('🚀 My first app listening on port 3000! '));
