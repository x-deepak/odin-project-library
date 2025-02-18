
const library = [];

let container = document.querySelector(".container");

// Book constructor
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

// Add this function that will be available to all Book objects using prototypal inheritance
Book.prototype.toggleReadStatus = function(){
    this.readStatus = this.readStatus? false: true;
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
                    <td>Title</td>
                    <td>${title}</td>
                </tr>
                <tr>
                    <td>Author</td>
                    <td>${author}</td>
                </tr>
                <tr>
                    <td>Pages</td>
                    <td>${pages}</td>
                </tr>
                <tr>
                    <td >Read?</td>
                    <td class="radio-btn"> 
                    <input type="radio" id="read_yes" name="${index}readStatus" value="yes" ${readStatus?"checked":""}>
                    <label for="read_yes">Yes</label><br>
                    <input type="radio" id="read_no" name="${index}readStatus" value="no" ${readStatus?"":"checked"} >
                    <label for="read_no">No</label><br>
                    </td>
                </tr>

            </table>`
    card.innerHTML = html_str;
    return card;
}

// load library object array in container as cards
function load_Library_In_Container(){
    container.innerHTML = "";
    library.forEach((obj, index) => {
        let cardElem = cardGenerator(obj.title, obj.author, obj.pages, obj.readStatus, index);
        container.appendChild(cardElem);
    })
}


//delete book from library and re-render container functions:
function remove_book_from_library(index){
    // console.log(typeof index);    //index type is string but still works in splice
    library.splice(index, 1);
}
function delete_book(event){
    if (event.target.classList.contains("card-close")){
        remove_book_from_library(event.target.id)
        load_Library_In_Container();
    }
}

//add click event listener to container for deleting books
container.addEventListener("click", delete_book)


// add book button event listener to show dialog
let add_book_btn = document.querySelector("#add-book-btn");
let dialog = document.querySelector("dialog");

add_book_btn.addEventListener("click", event => {
    
    let dialog = document.querySelector("dialog");
    
    dialog.showModal();

});


// dialog submit button event listener
let dialog_submit_btn = document.querySelector("#submit-btn");

dialog_submit_btn.addEventListener("click", event =>{
    event.preventDefault();  //stop default behavior of submitting the form
    let title_input = document.querySelector("#title");
    let title = title_input.value;
    let author_input = document.querySelector("#author");
    let author = author_input.value;
    let pages_input = document.querySelector("#pages");
    let pages = pages_input.value;
    let read_input = document.querySelector("#readStatus");
    let readStatus = read_input.checked;
    console.log(title,author,pages,readStatus);
    addBookToLibrary(title,author,pages,readStatus);
    load_Library_In_Container();
    dialog.close();
});


// add event listener to container for radio button change
container.addEventListener("change", event=>{
    let book_no = parseInt(event.target.name);
    library[book_no].toggleReadStatus();
    console.log(library[book_no])
    load_Library_In_Container();
});


// add sample book
addBookToLibrary("Sample", "Sample", "121", false);
load_Library_In_Container();