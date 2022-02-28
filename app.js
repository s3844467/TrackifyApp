// selectors
const userInput = document.querySelector("#user-input");
const submitButton = document.querySelector('#submit');
const todoList = document.querySelector('.item_container');

// event listeners
submitButton.addEventListener('click', createToDo);
submitButton.addEventListener('click', clearInput);

// create a todo
function createToDo() {
    // creates new div
    const todoDiv = document.createElement("div"); 
    todoDiv.classList.add('todo'); 

    // create item list
    const newItem = document.createElement("li");
    newItem.innerText = userInput.value; // todo-item becomes the value user enters
    newItem.classList.add('item'); 
    todoDiv.appendChild(newItem); 

    // create completed button
    const completedButton = document.createElement('button');
    completedButton.innerText = 'completed';
    completedButton.classList.add('completedbtn');
    newItem.appendChild(completedButton);

    // create remove button
    const removeButton = document.createElement('button'); 
    removeButton.innerText = 'remove'; 
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
}

// clear text input
function clearInput() {
    userInput.value = '';
} 


