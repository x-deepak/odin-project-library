
const library = [];


function Book(title,author,pages,readStatus){
    this.title =title;
    this.author= author;
    this.pages= pages;
    this.readStatus = readStatus;
    this.info = function(){
        let temp_str = `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus?"read":"not read yet"}`;
        return temp_str;
    }
}

function addBookToLibrary(title,author,pages,readStatus) {

    let newBook = new Book(title,author,pages,readStatus);

    library.push(newBook);


}


function cardGenerator(title,author,pages,readStatus){
    let card = document.createElement("div")
    card.classList.add("card")
    let html_str=`
    
    <button class="card-close">X</button>
    <table>
                <tr>
                    <td id="title">Title</td>
                    <td for="title">${title}</td>
                </tr>
                <tr>
                    <td id="author">Author</td>
                    <td for="author">${author}</td>
                </tr>
                <tr>
                    <td id="pages">Pages</td>
                    <td for="pages">${pages}</td>
                </tr>
                <tr>
                    <td ><label for="readStatus">readStatus:</label></td>
                    <td><select name="readStatus" id="readStatus">
  <option value="read">read</option>
  <option value="unread">unread</option>
</select></td>
                </tr>

            </table>`
    card.innerHTML = html_str;
    return card;
}

let container = document.querySelector(".container");

let cardElem = cardGenerator("Noob", "PK Rwling daf dafsd", "232", "read");

container.appendChild(cardElem);