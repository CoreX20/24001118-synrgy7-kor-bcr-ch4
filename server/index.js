console.log("Implement servermu disini yak 😝!");
const express = require('express');
// const http = require('http');
const path = require('path');
const PORT = 8080;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..','public','index.html'));
})

app.listen(PORT, () => {
    console.log(`this app is listening on ${PORT}`);
})