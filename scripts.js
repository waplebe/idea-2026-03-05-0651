document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    const newTaskForm = document.getElementById('new-task-form');
    const completedCheckbox = document.getElementById('completed');

    // Fetch tasks from the API
    fetch('/tasks')
        .then(response => response.json())
        .then(tasks => {
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.textContent = `${task.title} - ${task.description} - ${task.completed ? 'Completed' : 'Pending'}`;
                taskList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
            taskList.innerHTML = 'Error loading tasks.';
        });

    // Add new task
    newTaskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const completed = completedCheckbox.checked;

        if (!title) {
            alert('Title is required.');
            return;
        }

        fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, description: description, completed: completed })
        })
        .then(response => response.json())
        .then(task => {
            console.log('Task created:', task);
            newTaskForm.reset();
            fetch('/tasks')
                .then(response => response.json())
                .then(tasks => {
                    taskList.innerHTML = '';
                    tasks.forEach(t => {
                        const listItem = document.createElement('li');
                        listItem.textContent = `${t.title} - ${t.description} - ${t.completed ? 'Completed' : 'Pending'}`;
                        taskList.appendChild(listItem);
                    });
                });
        })
        .catch(error => {
            console.error('Error creating task:', error);
            alert('Error creating task.');
        });
    });

    // Toggle completed status
    completedCheckbox.addEventListener('change', function() {
        const taskId = parseInt(newTaskForm.dataset.taskId); // Assuming task ID is stored in data-taskId attribute
        if (taskId) {
            fetch(`/tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completed: completedCheckbox.checked })
            })
            .then(response => response.json())
            .then(updatedTask => {
                console.log('Task updated:', updatedTask);
                // Update the task list to reflect the change
                fetch('/tasks')
                    .then(response => response.json())
                    .then(tasks => {
                        taskList.innerHTML = '';
                        tasks.forEach(t => {
                            const listItem = document.createElement('li');
                            listItem.textContent = `${t.title} - ${t.description} - ${t.completed ? 'Completed' : 'Pending'}`;
                            taskList.appendChild(listItem);
                        });
                    });
            })
            .catch(error => {
                console.error('Error updating task:', error);
                alert('Error updating task.');
            });
        }
    });
});