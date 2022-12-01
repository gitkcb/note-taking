const noteRoutes = require('express').Router();
const fs = require('fs');

noteRoutes.get('/notes', (req, res) => {
    const results = notes;
    res.json(results);
});

noteRoutes.post('/notes', (req, res) => {
    fs.readFile('/db/db.json', (err,data) => {
        let notes = JSON.parse(data);
        const note = {
            title: req.body.title,
            text: req.body.text,
        };
    console.log(note);
    res.json(note);

    notes.push(note);
    console.log(notes);

    fs.writeFile('/db/db.json', JSON.stringify(notes, null, 2));
    });
});
module.exports = noteRoutes;