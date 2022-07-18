# Note Taker

<details>
<summary>Table of Content</summary>

- [Overview](#overview)
  - [Description](#description)
  - [Usage](#usage)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Video](#video)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
</details>

## Overview

### Description

Be able to write and save notes, so that users can organize thoughts and keep track of tasks that need to complete.

### Usage

The application will be deployed on Heroku, link: https://note-taker-app-6408.herokuapp.com/.

### The challenge

Users should be able to:

- click the link button to the notes page.
- enter any notes and click save icon.
- click write icon in the navigation at the top of page to get empty fields to enter a new note.
- click and check any existing notes.
- delete any notes.

### Screenshot

![](./res/images/Note%20Taker.png)
![](./res/images/Note%20Taker2.png)

### Video

- Video link: [https://drive.google.com/file/d/1VUGSm0Am_V7-9DflT9l9DMLq0mJysNsU/view](https://drive.google.com/file/d/1VUGSm0Am_V7-9DflT9l9DMLq0mJysNsU/view)

### Links

- Solution URL: [https://github.com/YangLongWang/Note-Taker](https://github.com/YangLongWang/Note-Taker)
- Deployed URL: [https://note-taker-app-6408.herokuapp.com/](https://note-taker-app-6408.herokuapp.com/)

## My process

### Built with

- HTML
- CSS
- JavaScript

### What I learned

- setting delete router and its function

To see how I add code snippets, see below:

```JS
router.delete('/notes/:id', (req, res) => {
    const result = findIndexById(req.params.id, notes);

    notes.splice(result, 1);

    const update = updateNote(notes);
    res.json(update);
})

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

```

## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)