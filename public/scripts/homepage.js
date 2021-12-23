const redirects = (() => {
    let cards = document.getElementsByClassName('button')

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', () => {
            switch (cards[i]) {
                case cards[0]:
                    window.open('https://www.docker.com/node/17911', '_blank')
                    break
                case cards[1]:
                    window.open('https://www.docker.com/get-started', '_blank')
                    break
                case cards[2]:
                    window.open('https://docs.docker.com/', '_blank')
                    break
            }
        })
    }
})()