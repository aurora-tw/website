let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul.todoUl");
let list = document.querySelectorAll("li.todoList")


function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.classList.add("todoList")
    let newDeleteButton = document.createElement("button")
    newDeleteButton.classList.add("delete", "fa", "fa-trash")
    let newCheckbox = document.createElement("input")
    newCheckbox.setAttribute("type", "checkbox")
    deleteElementOnDone(newDeleteButton)
    toggleDoneClass(li,newCheckbox)
    li.appendChild(newCheckbox)
    li.appendChild(document.createTextNode(input.value + " "));
    li.appendChild(newDeleteButton)
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteElementOnDone(child) {
    child.addEventListener("click", function () {
        child.parentElement.remove()
    })
}

function toggleDoneClass(element,element2) {

    element2.addEventListener("click", function () {
        element.classList.toggle("done")
    })
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.forEach(function (item) {
    let deleteButton = item.querySelector("button.delete")
    let checkboxInput = item.querySelector("input")
    toggleDoneClass(item,checkboxInput)
    deleteElementOnDone(deleteButton)
})






