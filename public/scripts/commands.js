const showNotes = (() => {
    fetch('http://localhost:80/commands/notes')
    .then(response => response.json())
    .then((note) => {
        note.forEach(element => {
            element.outdated === true ? element.outdated = 'Valid' : element.outdated = 'Outdated'

            createNode(element.title, element.command, element.description, element.reference, element.technology)
        });
    })
})()

async function createNode(title, command, description, reference, technology) {
    const noteList = document.getElementsByTagName('ul')[0]
    const note = document.createElement('li')    
    note.className = 'notes'

    const noteInformation = document.createElement('div')
    noteInformation.className = 'note-information'

    const noteTitle = document.createElement('h2')
    noteTitle.innerText = await title
    noteTitle.className = 'note-title'
    note.appendChild(noteTitle)

    const noteCommand = document.createElement('span')
    noteCommand.innerText = await command
    noteCommand.className = 'note-command'
    note.appendChild(noteCommand)

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
    
    const noteTechnology = document.createElement('p')
    noteTechnology.innerText = await technology
    noteTechnology.className = 'note-technology'
    note.appendChild(noteTechnology)

    noteInformation.appendChild(noteTechnology)
    noteInformation.appendChild(noteReference)
    note.appendChild(noteInformation)
    noteList.appendChild(note)
}
