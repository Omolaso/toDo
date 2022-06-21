const input = document.getElementById('input');
const addToDo = document.getElementById('btn');
const toDoList = document.getElementById('list');

addToDo.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.innerText = input.value;
    paragraph.className = 'param';
    input.value = '';
    paragraph.addEventListener('click', () =>{
        paragraph.style.textDecoration = 'line-through'
    });
    paragraph.addEventListener('dblclick', () =>{
        toDoList.removeChild(paragraph)
    });
    toDoList.appendChild(paragraph)
})