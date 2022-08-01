/* containers and fathers labels */
const todoContainer = document.querySelector('.todo-container');
const todosContainer = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const todoItem = document.querySelector('.todo-item');

/* others importants elements */
const searchInput = document.querySelector('.search-input');
const submitBtn = document.querySelector('.submit-btn');
const input = document.querySelector('.form-input');

/* todo structure */
const generateTodos = todo => {
    const text = `
        <li class="todo-item">
            <span class="todo-text">${ todo }</span>
            <i class="fas fa-trash delete"></i>
        </li>
    `;

    todosContainer.innerHTML += text;
};

/* add todos */
todoForm.addEventListener('submit', e => {
    e.preventDefault();

    /* get value in the input */
    const todo = input.value.trim();
    
    /* generate a todo only if thre are values in the input */
    if(todo) {
        generateTodos(todo)
        input.value = '';
    }
});

/* delete */
todosContainer.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    };
});

/* toggle completed */
todosContainer.addEventListener('dblclick', e => {
    
    /* toggle class */
    if(e.target.classList.contains('todo-item')) {
        e.target.classList.toggle('completed');
    };
});

/* search items on todo */
searchInput.addEventListener('keyup', (e) => {
    const search = e.target.value.toLowerCase();
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.indexOf(search) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});