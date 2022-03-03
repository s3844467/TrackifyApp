// selectors
const userInput = document.querySelector("#user-input");
const submitButton = document.querySelector('#submit');
const todoList = document.querySelector('.todo-list');

// event listeners
submitButton.addEventListener('click', createToDo);
window.addEventListener('DOMContentLoaded', showSavedTodos);

// create a todo
function createToDo() {
    if (userInput.value !== '') {
        // creates new div
        const todoDiv = document.createElement("div"); 
        todoDiv.classList.add('todo-container'); 

        saveLocalTodos(userInput.value);
        // create item list
        const newItem = document.createElement("li");
        newItem.innerText = userInput.value; // todo-item becomes the value user enters
        newItem.classList.add('todo-item'); 
        todoDiv.appendChild(newItem); 

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editButton.classList.add('editbtn');
        editButton.title = 'Edit field';
        newItem.appendChild(editButton);

        // create completed button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        completedButton.classList.add('completedbtn');
        completedButton.title = 'Mark task as "completed"';
        newItem.appendChild(completedButton);

        // create remove button
        const removeButton = document.createElement('button'); 
        removeButton.innerHTML= '<i class="fa-solid fa-trash"></i>'; 
        removeButton.classList.add('removebtn'); 
        removeButton.title = 'Remove task';
        newItem.appendChild(removeButton);
        todoList.appendChild(todoDiv); // adds tododiv to main container

        // edit text field 
        editButton.addEventListener('click', () => {
            console.log("testing edit button");
        })

        // dash line through item when completed
        completedButton.addEventListener('click', () => {
            newItem.classList.toggle('completed');
            toggleTaskStatus(newItem, 'completed');
        })

        // remove item from list
        removeButton.addEventListener('click', () => {
            todoList.removeChild(todoDiv);
        })

        // task status on hover
        newItem.addEventListener('mouseover', () => {
            if (newItem.classList.contains('completed')) {
                newItem.title = 'Task completed';
            } else {
                newItem.title = 'Task pending';
            }
        })
        clearInput(); // clears text field
    } else {
        alert("You forgot to enter something!");
    }
   
}

// add todo by hitting enter keys
function addTaskWithEnter() {
    const enterKey = 13;
    userInput.addEventListener("keyup", (e) => {
        if (e.keyCode === enterKey) {
            e.preventDefault();
            submitButton.click();
        }
    }) 
}
addTaskWithEnter();

// clear text input
function clearInput() {
    userInput.value = '';
} 

// change the colour of the task status with border
function toggleTaskStatus(el, className) {
    if (el.classList.contains(className)) {
        el.style.borderLeftColor = '#06d6a0';
    } else {
        el.style.borderLeftColor = '#ff9d00';
    }
}

// save todos to local storage
function saveLocalTodos(todo) {
    let list = JSON.parse(localStorage.getItem('list'));
    if (list === null) {
        tasks = [];
    } else {
        tasks = list;
    }
    tasks.push(todo);
    localStorage.setItem('list', JSON.stringify(tasks));
}

// display todos saved in local storage
function showSavedTodos() {
    console.log("hello");
    let tasks;
    let list = JSON.parse(localStorage.getItem('list'));
    if (list === null) {
        tasks = [];
    } else {
        tasks = list;
    }
    tasks.forEach(function(todo) {
        // creates new div
        const todoDiv = document.createElement("div"); 
        todoDiv.classList.add('todo-container'); 

        // create item list
        const newItem = document.createElement("li");
        newItem.innerText = todo; // todo-item becomes the value user enters
        newItem.classList.add('todo-item'); 
        todoDiv.appendChild(newItem); 

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editButton.classList.add('editbtn');
        editButton.title = 'Edit field';
        newItem.appendChild(editButton);

        // create completed button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        completedButton.classList.add('completedbtn');
        completedButton.title = 'Mark task as "completed"';
        newItem.appendChild(completedButton);

        // create remove button
        const removeButton = document.createElement('button'); 
        removeButton.innerHTML= '<i class="fa-solid fa-trash"></i>'; 
        removeButton.classList.add('removebtn'); 
        removeButton.title = 'Remove task';
        newItem.appendChild(removeButton);
        todoList.appendChild(todoDiv); // adds tododiv to main container

        // edit text field 
        editButton.addEventListener('click', () => {
            console.log("testing edit button");
        })

        // dash line through item when completed
        completedButton.addEventListener('click', () => {
            newItem.classList.toggle('completed');
            toggleTaskStatus(newItem, 'completed');
        })

        // remove item from list
        removeButton.addEventListener('click', () => {
            todoList.removeChild(todoDiv);
        })

        // task status on hover
        newItem.addEventListener('mouseover', () => {
            if (newItem.classList.contains('completed')) {
                newItem.title = 'Task completed';
            } else {
                newItem.title = 'Task pending';
            }
        })
    })
}