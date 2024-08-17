document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        addTodo(todoText);
        todoInput.value = ''; // Clear input
    }
});

function addTodo(text) {
    const todoList = document.getElementById('todoList');
    
    const li = document.createElement('li');
    li.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    li.appendChild(deleteButton);
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    todoList.appendChild(li);
}
