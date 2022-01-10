const showNotes = (() => {
    fetch('http://localhost:80/others/notes')
    .then(response => response.json())
    .then((note) => {
        note.forEach(element => {
            createNode(element.title, element.description, element.reference, element.topic)
        });
    })
})()

async function createNode(title, description, reference, topic) {
    const noteList = document.getElementsByTagName('ul')[0]
    const note = document.createElement('li')    
    note.className = 'notes'

    const noteTitle = document.createElement('h2')
    noteTitle.innerText = await title
    noteTitle.className = 'note-title'
    note.appendChild(noteTitle)

    const noteTopic = document.createElement('span')
    noteTopic.innerText = await topic
    noteTopic.className = 'note-topic'
    note.appendChild(noteTopic)

    const noteDescription = document.createElement('p')
    noteDescription.innerText = await description
    noteDescription.className = 'note-description'
    note.appendChild(noteDescription)

    const noteReference = document.createElement('a')
    noteReference.innerHTML = 'Reference'
    noteReference.href = await reference
    noteReference.target = "_blank"
    noteReference.className = 'note-reference'
    note.appendChild(noteReference)

    noteList.appendChild(note)
}
