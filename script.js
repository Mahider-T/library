const form = document.getElementById("myForm");

const button = document.getElementById("Add");

const add = document.getElementById("add_a_book")

let display = document.getElementById("listOfBooks");

form.style.display = "none";


let myLibrary = [];

function book(title, author, numberOfPages){
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
}

function addBookToLibrary(title, author, numberOfPages){
    const newBook = new book(title, author, numberOfPages)
    return newBook;
}

add.addEventListener("click", () => {
    form.style.display = "block";
})

form.addEventListener("submit", (event) => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const numberOfPages = document.getElementById("num_pages").value;
    event.preventDefault();

    const details = document.createElement("div")
   
    book1 = addBookToLibrary(title, author, numberOfPages)
    myLibrary.push(book1);

    for( let i = 0 ; i < myLibrary.length; i++){
        let para = document.createElement("p")
        para.textContent = myLibrary[i].title
        details.appendChild(para)

    }
    display.appendChild(details)

})
