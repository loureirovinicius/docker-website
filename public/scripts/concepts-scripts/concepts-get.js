const showNotes = () => {
    fetch('/concepts/notes')
    .then(response => response.json())
    .then((note) => {
        note.forEach(element => {
            createNote(element.title, element.topic, element.description, element.technology, element.reference)
        });
    })
}

const searchNotes = (() => {
    showNotes()
    const searchButton = document.querySelector('#search')
    const searchInput = document.querySelector('#search-input')
    searchButton.addEventListener('click', () => {
        searchInput.style.display = 'inline'
    })

    searchInput.addEventListener('input', (e) => {
        const search = searchInput.value
        const notes = document.getElementsByTagName('ul')[0]    
        notes.replaceChildren('')

        if (e.data === null) {
            notes.replaceChildren('')
            return showNotes()
        }

        return fetch(`/concepts/notes?title=${search}`)
        .then(res => res.json())
        .then((note) => {
            note.forEach(element => {
                createNote(element.title, element.topic, element.description, element.technology, element.reference)
            });
        })
    })
})()

async function createNote(title, topic, description, technology, reference) {
    const noteList = document.getElementsByTagName('ul')[0]
    const note = document.createElement('li')    
    note.className = 'notes'

    const noteInformation = document.createElement('div')
    noteInformation.className = 'note-information'

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

    const noteTechnology = document.createElement('p')
    noteTechnology.innerText = await technology
    noteTechnology.className = 'note-technology'
    note.appendChild(noteTechnology)

    const noteReference = document.createElement('a')
    noteReference.innerHTML = 'Reference'
    noteReference.href = await reference
    noteReference.target = "_blank"
    noteReference.className = 'note-reference'
    note.appendChild(noteReference)

    noteInformation.appendChild(noteTechnology)
    noteInformation.appendChild(noteReference)
    note.appendChild(noteInformation)
    noteList.appendChild(note)
}
