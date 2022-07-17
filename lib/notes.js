const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;

    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray), 
        (err) => {
            console.log(err);
        }
    );
    return note;
};

function findIndexById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    const index = notesArray.indexOf(result);

    return index;
}

function updateNote(notesArray) {
    const renewNote = notesArray;

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(renewNote)
    );
    return renewNote;
}

module.exports = {
    createNewNote,
    findIndexById,
    updateNote
};