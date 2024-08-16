// Fetch notes from JSON
async function loadNotes() {
    const response = await fetch('notes.json');
    const notesData = await response.json();

    notesData.forEach(noteData => {
        createNoteElement(noteData);
    });
}

// Save notes to JSON (GitHub doesn't support direct saving, this would be local)
function saveNotes() {
    const notes = document.querySelectorAll('.sticky-note');
    let notesData = [];

    notes.forEach(note => {
        notesData.push({
            content: note.innerText,
            top: note.style.top,
            left: note.style.left,
            color: note.style.backgroundColor
        });
    });

    // Update local notes.json file (manually commit to GitHub)
    // You would need to automate or manually commit this file to GitHub for other users to see updates
    console.log(JSON.stringify(notesData));
}

// Call loadNotes on page load
window.onload = loadNotes;
