const { createNewNote, findIndexById, updateNote } = require('../../lib/notes');
const notes = require('../../db/db');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
})

router.post('/notes', (req, res) => {
    
    req.body.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const result = findIndexById(req.params.id, notes);

    if (result === -1) {
        return res.status(404).json({});
    }

    notes.splice(result, 1);

    const update = updateNote(notes);
    res.json(update);
})

module.exports = router;