const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
    const results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
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
module.exports = router;