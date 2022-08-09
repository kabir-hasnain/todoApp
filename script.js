let newTask = document.querySelector('#new-task')
let form = document.querySelector('form')
let todoUL = document.querySelector('#items')
let completeUL = document.querySelector('.complete-list ul')

//functions

let createTask = (task) => {
    let listItem = document.createElement('li')
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    let label = document.createElement('label')
    
    label.innerText = task
    
    listItem.appendChild(checkBox)
    listItem.appendChild(label)

    return listItem
}

let addTask = (event) =>{
    event.preventDefault()
    let listItem = createTask(newTask.value)
    todoUL.appendChild(listItem)
    newTask.value = ''
    
    bindInCompleteItems(listItem, completeTask)
}

let completeTask = function() {
    let listItem = this.parentNode
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.className = 'delete'

    listItem.appendChild(deleteBtn)

    let checkBox = listItem.querySelector('input[type="checkbox"]')
    checkBox.remove()
    completeUL.appendChild(listItem)
    bindCompleteItems(listItem, deleteTask)
}

let deleteTask = function() {
    let listItem = this.parentNode
    let ul = listItem.parentNode
    ul.removeChild(listItem)
}

let bindInCompleteItems = (taskItem, checkboxClick) =>{
    let checkBox = taskItem.querySelector('input[type="checkbox"]')
    checkBox.onchange = checkboxClick;
}

let bindCompleteItems = (taskItem, deleteButtonClick) =>{
    let deleteButton = taskItem.querySelector('.delete')
    deleteButton.onclick = deleteButtonClick;
}

for(let i = 0; i<todoUL.children.length; i++){
    bindInCompleteItems(todoUL.children[i], completeTask)
}
for(let i = 0; i<completeUL.children.length; i++){
    bindCompleteItems(completeUL.children[i], deleteTask)
}

form.addEventListener('submit', addTask)
