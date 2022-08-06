//todo app....

const newTask = document.querySelector("#new-task")
//const addTask = document.querySelector("#addTask")
const form = document.querySelector("form")
const incomUL = document.querySelector("#items")
const comUL = document.querySelector(".complete-list ul")

//functions
const createTask = (task) =>{
    const list = document.createElement('li')
    const checkBox = document.createElement('input')
    const label = document.createElement('label');

    checkBox.type = 'checkbox'
    label.innerText = task

    list.appendChild(checkBox)
    list.appendChild(label)

    return list
}

const addTask = (event)=>{
    event.preventDefault()
    const list = createTask(newTask.value)
    incomUL.appendChild(list)
    newTask.value = ''
    bindInCompleteItems(list, completeTask)
}

const bindInCompleteItems = (taskItem, checkboxclick)=>{
    const checkBox = taskItem.querySelector('input[type="checkbox"]')
    checkBox.onchange = checkboxclick
}

const completeTask = ()=>{
    const list = this.parentNode
    const deleteBtn = document.createComment('delete')
    deleteBtn.innerText = 'Delete'
    deleteBtn.className = 'delete'

    list.appendChild(deleteBtn)

    const checkBox = list.querySelector('input[type="checkbox"]')

    checkBox.remove()

    comUL.appendChild(list)

    bindCompleteItems(list, deleteTask)
}

const deleteTask = ()=>{
    const list = this.parentNode
    const ul = list.parentNode
    ul.removeChild(list)
}

const bindCompleteItems = (taskItem, deleteButtonClick)=>{
    const deleteButton = taskItem.querySelector('.delete')
    deleteButton.onclick = deleteButtonClick
}


form.addEventListener('submit', addTask)