const postPage = (() => {
    const openModal = document.querySelector('#open-modal')
    const closeModal = document.querySelector('#cancel-button')
    const header = document.getElementsByTagName('header')[0]
    const main = document.getElementsByTagName('main')[0]
    const modal = document.querySelector('#modal')
    const search = document.querySelector('#search')

    openModal.addEventListener('click', () => {
        header.className = 'blur'
        main.className = 'blur'
        search.className = 'blur'
        openModal.className = 'blur'
        modal.style.display = 'block'
    })

    closeModal.addEventListener('click', () => {
        header.className = ''
        main.className = ''
        search.className = ''
        openModal.className = ''
        modal.style.display = ''
    })
})()

async function defineNote() {
    const title = document.getElementById('title').value
    const topic = document.getElementById('topic').value
    const description = document.getElementById('description').value
    const reference = document.getElementById('reference').value

    fetch('/others/notes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            title,
            topic,
            reference,
            description,            
        })
    })
    .then(res => console.log(res.json()))
    .then(data => console.log(data))
    .catch(err => console.error(`Error => ${err}`))
}

const generateNote = (() => {
    const submitButton = document.getElementById('submit')

    submitButton.addEventListener('click', () => {
        defineNote()
        location.reload()
    })
})()