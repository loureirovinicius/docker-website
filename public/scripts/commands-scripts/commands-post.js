(function postPage() {
    const openModal = document.querySelector('#open-modal')
    const closeModal = document.querySelector('#cancel-button')
    const header = document.getElementsByTagName('header')[0]
    const main = document.getElementsByTagName('main')[0]
    const modal = document.querySelector('#modal')
    const search = document.querySelector('#search')
    const searchInput = document.querySelector('#search-input')

    openModal.addEventListener('click', () => {
        header.className = 'blur'
        main.className = 'blur'
        search.className = 'blur'
        searchInput.className = 'blur'
        openModal.className = 'blur'
        modal.style.display = 'block'
    })

    closeModal.addEventListener('click', () => {
        header.className = ''
        main.className = ''
        search.className = ''
        searchInput.className = ''
        openModal.className = ''
        modal.style.display = ''
    })
})()

const errorMessage = (errorDescription) => {
    const errorMessage = document.createElement('span')
    errorMessage.className = 'error-message'
    errorMessage.innerText = `${errorDescription}`

    const modal = document.querySelector('#error-message-container')
    modal.appendChild(errorMessage)
}

const noteValidator = (note) => {

    if(note.title.length < 2 || note.title.length > 20) {
        errorMessage('You must insert a title with length between 2 or 20.')
    } else if (note.title === '') {
        errorMessage('You must insert a title')
    }
    
    if(note.command.length < 3) {
        errorMessage('Your command is too short, please fix it.')
    } else if (note.command === '') {
        errorMessage('You must insert a command')
    }

    if(note.description.length < 10) {
        errorMessage('Your description is too short, please fix it.')
    } else if (note.description === '') {
        errorMessage('You must insert a description')
    }

    if(note.reference.length < 15) {
        errorMessage('Your reference is too short, please fix it.')
    } else if (note.reference === '') {
        errorMessage('You must insert a reference')
    }

    if(note.technology.length < 1 || note.technology.length > 15) {
        errorMessage('You must insert a technology with length between 2 or 20.')
    } else if (note.technology === '') {
        errorMessage('You must insert a technology')
    }
}

async function defineNote() {
    const note = {
        title: await document.getElementById('title').value,
        command: await document.getElementById('command').value,
        description: await document.getElementById('description').value,
        technology: await document.getElementById('technology').value,
        reference: await document.getElementById('reference').value
    }

    noteValidator(note)
    
    fetch('/commands/notes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            title: note.title,
            command: note.command,
            description: note.description,
            technology: note.technology,
            reference: note.reference
        })
    })
    .then((res) => {
        if (res.status === 400) {
            throw new Error('You must insert valid data in order to continue.')
        }
        return console.log(res.json())
    })
    .then(data => location.reload())
    .catch(err => errorMessage(err))
}


const generateNote = (() => {
    const submitButton = document.getElementById('submit')

    submitButton.addEventListener('click', () => {
        defineNote()
    })
})()