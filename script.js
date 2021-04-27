let myLibrary = []

//constructor
function Book(title, author, year, pages, status) {
    this.title = title,
    this.author = author,
    this.year = year,
    this.pages = pages,
    this.status = status
}

//adding function
function addBook(book) {
    myLibrary = [...myLibrary, book]
    createCard(book)
}


const table = document.querySelector('.table')

function createCard(book) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.id = myLibrary.indexOf(book)

    let closeCard = document.createElement('span')
    closeCard.classList.add('closeCard')
    closeCard.id = myLibrary.indexOf(book)
    closeCard.innerHTML = '&times;'
    card.appendChild(closeCard)

    let title = document.createElement('h2')
    title.textContent = book.title
    card.appendChild(title)

    let author = document.createElement('h3')
    author.textContent = `Written by ${book.author}`
    card.appendChild(author)

    let year = document.createElement('h3')
    year.textContent = `Published in ${book.year}`
    card.appendChild(year)

    let pages = document.createElement('h3')
    pages.textContent = `${book.pages} pages`
    card.appendChild(pages)

    let status = document.createElement('div')
    status.classList.add('status')
    card.appendChild(status)

    let statusText = document.createElement('h4')
    statusText.textContent = 'Completed reading'
    status.appendChild(statusText)

    let checkbox = document.createElement('INPUT')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = (book.status == true) ? true : false
    status.appendChild(checkbox)

    table.appendChild(card)
}

const form = document.querySelector("#form")

const button = document.querySelector("#newButton")
button.addEventListener("click", e => {
    form.style.display = "block"
})

const submitButton = document.querySelector("#submitButton")
submitButton.addEventListener("click", e => {
    let newTitle = document.querySelector("#titleInput").value
    let newAuthor = document.querySelector("#authorInput").value
    let newYear = document.querySelector("#yearInput").value
    let newPages = document.querySelector("#pagesInput").value
    let newStatus = document.querySelector("#statusInput").checked
    addBook(new Book(newTitle, newAuthor, newYear, newPages, newStatus))
    form.style.display = 'none'
})

const closeButton = document.querySelector(".closeForm")
closeButton.addEventListener("click", e => {
    form.style.display = 'none'
})

table.addEventListener("click", e => {
    let allCards = document.querySelectorAll('.card')
    if (e.target.classList.contains('closeCard')) {
        allCards.forEach (card => {
            if(card.id == e.target.id) {
                table.removeChild(card)
            }
        })
    }
});

addBook({
    title: "Crazy Rich Asians",
    author: "Kevin Kwan",
    year: 2015,
    pages: 450,
    status: true
})
addBook({
    title: "Harry Potter",
    author: "JK Rowling",
    year: 2001,
    pages: 750,
    status: false
})