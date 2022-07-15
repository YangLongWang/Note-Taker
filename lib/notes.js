const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    
    // const { title, text } = body;
    // const newNote = {
    //     "title" : title,
    //     "text" : text,
    //     "id" : createId(),
    // };

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray), 
        (err) => {
            console.log(err);
        }
    );
    return note;
    // return newNote;
};

module.exports = {
    createNewNote,
};