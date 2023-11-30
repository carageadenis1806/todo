//button that starts the whole process module
const getStarted = () => {
    const body = document.querySelector('body');
    const button = document.createElement('button');

    button.classList.add('createButton');
    button.textContent = 'Create a To-Do list!';

    body.appendChild(button);
}

//form to fill the to do
const createForm = () => {
    const body = document.querySelector('body');
    const form = document.createElement('form');
    pageStructure();

    // Create input fields for title, due date, and priority
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';
    
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'text';
    dueDateInput.placeholder = 'Due Date';
    
    const priorityInput = document.createElement('input');
    priorityInput.type = 'text';
    priorityInput.placeholder = 'Priority';

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.classList.add('submitButton');
    submitButton.textContent = 'Add To-Do';
    
     // Add an event listener to the form for handling submission
     form.addEventListener('submit', function (event) {
        event.preventDefault();
        

        // Create a new toDo instance using the form values
        const user = new toDo(titleInput.value, dueDateInput.value, priorityInput.value);
        user.createToDo();

        // Clear the form after submitting
        form.reset();
       
    });
     // Append input fields and submit button to the form
     form.appendChild(titleInput);
     form.appendChild(dueDateInput);
     form.appendChild(priorityInput);
     form.appendChild(submitButton);
 
     // Append the form to the body
     body.appendChild(form);
 
 
 }

 //create the page structure module
const pageStructure = () => {
    const body = document.querySelector('body');
    const container = document.createElement('div');

    container.classList.add('container');

    body.appendChild(container);
    
}

 

 // dynamically create 'todos' using classses
 class toDo {

    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    createToDo() {
        domManipulation('Title: ' + this.title, 'Due date: ' + this.dueDate, 'Priority: ' + this.priority);
    }
}



//dom manipulation function
function domManipulation(dataTitle, dataDueDate,dataPriority) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    const textTitle = document.createElement('div');
    const textDueDate = document.createElement('div');
    const textPriority = document.createElement('div');
    
    card.classList.add('card');



    textTitle.textContent = dataTitle;
    textDueDate.textContent = dataDueDate;
    textPriority.textContent = dataPriority;



    card.appendChild(textTitle);
    card.appendChild(textDueDate);
    card.appendChild(textPriority);
    container.appendChild(card);

}








export  {pageStructure, getStarted, createForm}