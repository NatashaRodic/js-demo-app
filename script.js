document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';

            li.querySelector('span').addEventListener('click', function () {
                li.classList.toggle('completed');
            });

            li.querySelector('.delete-btn').addEventListener('click', function () {
                taskList.removeChild(li);
            });
        }
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
