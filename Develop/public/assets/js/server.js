const express = require('express');
const path = require('path');
const db = require('/db.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/api/notes', (req, res) => { 
    res.json(db);
});

app.post('/api/notes', (req, res)=> {
    
  });



app.listen(PORT, () =>
console.log(`Listening at http://localhost:${PORT}`));


