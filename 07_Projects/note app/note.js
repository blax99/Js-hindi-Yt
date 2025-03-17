const noteContainer = document.getElementById('note')
const addNoteButton = noteContainer.querySelector('.add-note')

getNotes().forEach(note => {
    const noteElement = createElement(note.id, note.content)
    noteContainer.insertBefore(noteElement, addNoteButton)
});

addNoteButton.addEventListener('click', addNotes)

function getNotes(){
    return JSON.parse(localStorage.getItem('sticky-note') || '[]')
}

function setNotes(notes){
    localStorage.setItem('sticky-note', JSON.stringify(notes))
}

function createElement(id, content){
    const element = document.createElement('textarea')
    element.classList.add('note-box')
    element.placeholder = `An empty note-box`
    element.value = content

    element.addEventListener('change', ()=>{
        updateNotes(id, element.value)
    })

    element.addEventListener('dblclick', ()=>{
        const doDelete = confirm('Are you sure you want to delete the note-box!')
        if(doDelete){
            deleteNotes(id, element)
        }
    })

    return element
}
function addNotes(){
    const notes = getNotes()
    const notesObj = {
        id: Math.floor(Math.random() * 1000),
        content: ''
    }

    const noteElement = createElement(notesObj.id, notesObj.content)
    noteContainer.insertBefore(noteElement, addNoteButton)

    notes.push(notesObj)
    setNotes(notes)
}
function updateNotes(id, newContent){
    const notes = getNotes()
    const targetNotes = notes.filter(note => note.id == id) [0]
    
    targetNotes.content = newContent
    setNotes(notes)
}

function deleteNotes(id, element){
    const notes = getNotes().filter(note => note.id != id)
    setNotes(notes)
    noteContainer.removeChild(element) 
}