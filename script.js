
const form = document.querySelector('.toDo');
const input = document.getElementById('input');
const addTask = document.getElementById('submit');
const submitTasks = document.getElementById('submitTasks');
const mode = document.getElementById('mode');
const container = document.getElementById('container');
const ground = document.querySelector('.ground');

mode.addEventListener('click', () => {

    const contain = document.querySelector('.container');
    console.log(contain)
    contain.classList.toggle('ground'); 

    if(mode.innerText == 'Light Mode'){
        mode.style.color = 'var(--dark)';
        mode.innerText = 'Dark Mode';
    }else{
        mode.style.color = 'var(--light)';
        mode.innerText = 'Light Mode';
    }
});



form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!input.value){
        alert('Please add a task');
        return
    }


    const div = document.createElement('div');
    div.id = 'task';
    
    const divContent = document.createElement('div');
    divContent.id = 'content';

    div.appendChild(divContent);

    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.id = 'list';
    taskInput.value = input.value;
    taskInput.setAttribute('readonly', 'readonly');

    taskInput.addEventListener('click', () => {
        taskInput.style.textDecoration = 'line-through';
    });

    taskInput.addEventListener('dblclick', () => {
        taskInput.style.textDecoration = 'none';    
    })

    divContent.appendChild(taskInput);
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'btns';

    const editButton = document.createElement('button');
    editButton.id = 'edit';
    editButton.innerHTML = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete';
    deleteButton.innerHTML = 'Delete';

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);

    div.appendChild(buttonsDiv);

    submitTasks.appendChild(div);

    input.value = ''

    editButton.addEventListener('click', () => {
        if(editButton.innerText === 'Edit'){
            taskInput.removeAttribute('readonly');
            taskInput.focus();
            editButton.innerText = 'Save';
        }else{
            taskInput.setAttribute('readonly', 'readonly');
            editButton.innerText = 'Edit';
        }
    });

    deleteButton.addEventListener('click', () => {
       if(confirm('Confirm delete?')){
        submitTasks.removeChild(div)
       } else{
        alert('Cancelled')
       }
    });
});