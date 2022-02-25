let toDo = []
let restore = []

let btnCreate = document.getElementById('create_task')
let filter = document.getElementById('filter')

let toDoList = document.querySelector('.toDo--list')
let restoreList = document.querySelector('.restore--list')

btnCreate.addEventListener('click', () => {
    let text = document.getElementById('text').value
    let select = document.getElementById('select').value
    let date = new Date()
    let task = {
        text,
        date,
        select,
    }
    toDo.push(task)
    console.log(toDo)

    toDoList.insertAdjacentHTML('afterbegin', `
        <li class="toDo--item" id="task*${toDo.length-1}">
            <div class="item--task">${text}</div>
            <div class="item--tag">${select}</div>
            <div class="item--date">${date.toUTCString()}</div>
            <div class="btn btn-delete" onclick="moveToRestore(this)"><i class="fa-solid fa-xmark fa-2x"></i></div>
        </li>
    `)
})

function moveToRestore(el) {
    let currentEl = el.closest('.toDo--item')
    restoreList.prepend(currentEl)
    currentEl.querySelector('.btn-delete').remove()
    currentEl.insertAdjacentHTML('beforeend', `
        <div class="btn btn-restore" onclick="restoreToTodo(this)"><i class="fa-solid fa-trash-arrow-up fa-2x"></i></div>
        <div class="btn btn-delete" onclick="deleteFromRestore(this)"><i class="fa-solid fa-xmark fa-2x"></i></div>    
    `)
}

function restoreToTodo(el) {
    let currentEl = el.closest('.toDo--item')
    toDoList.prepend(currentEl)
    currentEl.querySelector('.btn-delete').remove()
    currentEl.querySelector('.btn-restore').remove()
    currentEl.insertAdjacentHTML('beforeend',`
    <div class="btn btn-delete" onclick="moveToRestore(this)"><i class="fa-solid fa-xmark fa-2x"></i></div>
    `)
}

function deleteFromRestore(el){
    let currentEl = el.closest('.toDo--item')
    currentEl.remove()
}

filter.addEventListener('change', () =>{
    let filterValue = filter.value
    toDoList.innerHTML = ``
    for (const iterator of toDo) {
        if(iterator.select == filterValue){
            toDoList.insertAdjacentHTML('afterbegin', `
            <li class="toDo--item" id="task*${toDo.length-1}">
                <div class="item--task">${iterator.text}</div>
                <div class="item--tag">${iterator.select}</div>
                <div class="item--date">${iterator.date.toUTCString()}</div>
                <div class="btn btn-delete" onclick="moveToRestore(this)"><i class="fa-solid fa-xmark fa-2x"></i></div>
            </li>
         `)
        }
        
    }
    
})
