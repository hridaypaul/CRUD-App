let addBtn = document.getElementById('add_btn');
addBtn.addEventListener('click', addPost)
let parentList = document.getElementById('parentList');

function addPost(e) {
    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let currentPost = currentInput.value

    let newLi = document.createElement('li')
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = `<h5 class="flex-grow-1"> ${currentPost} </h5>
    <button class="btn btn-success mx-2" onclick="editPost(this)">Edit </button>
    <button class="btn btn-danger mx-1" onclick="removePost(this)">Remove </button>`

    parentList.appendChild(newLi)
}
function removePost(currentElement) {
    currentElement.parentElement.remove()
    let parentList = document.getElementById('parentList');
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h4")
        newEmptyMsg.classList.add("emptyMsg")
        newEmptyMsg.textContent = "No post uploaded here , Please add post !"
        parentList.appendChild(newEmptyMsg)
    }
}
function editPost(currentElement) {
    if (currentElement.textContent == "Done") {
        currentElement.textContent = "Edit"
        let currentPost = currentElement.previousElementSibling.value
        let currentHeading = document.createElement('h4');
        currentHeading.className = "flex-grow-1"
        currentHeading.textContent =  currentPost
        currentElement.parentElement.replaceChild(currentHeading, currentElement.previousElementSibling)
        
 
    } else {

        currentElement.textContent = "Done"
        let currentPost = currentElement.previousElementSibling.textContent
        let currentInput = document.createElement('input');
        currentInput.type = "text"
        currentInput.placeholder = "previous post"
        currentInput.className = "form-control"
        currentInput.value = currentPost;

        currentElement.parentElement.replaceChild(currentInput, currentElement.previousElementSibling)
    }

}