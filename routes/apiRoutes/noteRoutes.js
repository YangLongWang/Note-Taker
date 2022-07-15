const { createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
})

router.post('/notes', (req, res) => {
    // id number
    req.body.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.')
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;