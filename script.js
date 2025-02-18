
const library = [];

let container = document.querySelector(".container");

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


function cardGenerator(title,author,pages,readStatus,index){
    let card = document.createElement("div")
    card.classList.add("card")
    let html_str=`
    
    <button class="card-close" id="${index}">X</button>
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






function load_Library_In_Container(){
    container.innerHTML = "";
    library.forEach((obj, index) => {
        let cardElem = cardGenerator(obj.title, obj.author, obj.pages, obj.readStatus, index);
        container.appendChild(cardElem);
    })
}



function remove_book_from_library(index){
    // console.log(typeof index);
    library.splice(index, 1);
}


function delete_book(event){
    if (event.target.classList.contains("card-close")){
        remove_book_from_library(event.target.id)
        load_Library_In_Container();
    }
}


addBookToLibrary("harry", "noob", "2323", true);
load_Library_In_Container();

container.addEventListener("click", delete_book)


let add_book_btn = document.querySelector("#add-book-btn");


let dialog = document.querySelector("dialog");

add_book_btn.addEventListener("click", event => {
    
    let dialog = document.querySelector("dialog");
    
    dialog.showModal();

});


let submit_btn = document.querySelector("#submit-btn");

submit_btn.addEventListener("click", event =>{
    event.preventDefault();
    let title_input = document.querySelector("#title");
    let title = title_input.value;
    console.log(title);
    dialog.close();
});