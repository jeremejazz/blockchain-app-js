const express = require('express')
const app = express();
const port = 3000;

app.get('/blockchain', (req,res) => {

})

app.post('/transaction', (req, res) => {

})

app.get('/mine', (req, res) =>{
    
})

app.listen(port, ()=> console.log(`Listening on port ${port}`))