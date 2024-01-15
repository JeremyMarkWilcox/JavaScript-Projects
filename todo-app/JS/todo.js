document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("add");
    const taskInput = document.getElementById("task");
    const todosContainer = document.getElementById("todos");

    // Function to add a new to-do item
    function addTodo() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const todoItem = document.createElement("li"); // Changed to list item
            todoItem.className = "todo-item";
            todoItem.innerHTML = `<span>${taskText}</span>
                                  <div>
                                    <button class="complete-btn">Complete</button>
                                    <button class="delete-btn">Delete</button>
                                  </div>`;

            todoItem.addEventListener("click", function(event) {
                if (event.target.classList.contains("complete-btn")) {
                    todoItem.classList.toggle("completed");
                } else if (event.target.classList.contains("delete-btn")) {
                    todoItem.remove();
                }
            });

            todosContainer.appendChild(todoItem);
            taskInput.value = "";
        } else {
            alert("Please enter a task before adding!");
        }
    }

    // Event listener for the "Add Item" button
    addBtn.addEventListener("click", addTodo);

    // Event listener for the "Enter" key press in the input field
    taskInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });
});
