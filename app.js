// selectors
const userInput = document.querySelector("#user-input");
const submitButton = document.querySelector('#submit');
const todoList = document.querySelector('.todo-list');

// event listeners
submitButton.addEventListener('click', createToDo);
submitButton.addEventListener('click', clearInput);

// create a todo
function createToDo() {

    if (userInput.value !== '') {
        // creates new div
        const todoDiv = document.createElement("div"); 
        todoDiv.classList.add('todo-container'); 

        // create item list
        const newItem = document.createElement("li");
        newItem.innerText = userInput.value; // todo-item becomes the value user enters
        newItem.classList.add('todo-item'); 
        todoDiv.appendChild(newItem); 

        // create completed button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        completedButton.classList.add('completedbtn');
        newItem.appendChild(completedButton);

        // create remove button
        const removeButton = document.createElement('button'); 
        removeButton.innerHTML= '<i class="fa-solid fa-trash"></i>'; 
        removeButton.classList.add('removebtn'); 
        newItem.appendChild(removeButton);
        todoList.appendChild(todoDiv); // adds tododiv to main container

        // dash line through item when completed
        completedButton.addEventListener('click', () => {
            newItem.classList.toggle('completed');
        })

        // remove item from list
        removeButton.addEventListener('click', () => {
            todoList.removeChild(todoDiv);
        })
    } else {
        alert("You did not enter anything");
    }
   
}

// add todo by hitting enter key
function submitTaskWithEnter() {
    userInput.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            submitButton.click();
        }
    }) 
}
submitTaskWithEnter();


// clear text input
function clearInput() {
    userInput.value = '';
} 


