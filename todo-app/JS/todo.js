/* This function gets the task from input */
function get_todos() {
    /* This creates an array of tasks that are inputed */
    var todos = new Array;
    /* This pulls the task that was saved in the web browser memory */
    var todos_str=localStorage.getItem('todo');
    /* If the input is not null then JSON.parse will
    communitcare with the web browser to make the task a JavaScript object */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/* Thus function adds the inputed task to the get_todos function array */
function add () {
    /* This takes the inputed task and creates a variable of it */
    var task = document.getElementById('task').value;
    var todos = get_todos();
    /* This adds a new task the end of the array */
    todos.push(task);
    /* This converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/* This function keeps the tasks permanetly displayed on the screen */
function show() {
    /* This sets the task that was retrieved as a variable */
    var todos = get_todos();

    /* This sets up each task as an unordered list */
    var html = '<url>';
    /* This displays a task to the lisr in the order that is is inputed */
    for (var i = 0; i < todos.length; i++) {
        /* This also displays the task as a list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + ' ">x</button></li>';
    };
    html += '</ul>';
    /* This displays the task as a list */
    document.getElementById('todos').innerHTML = html;


}
/* This displays the task when the 'Add Item' Button is clicked */
document.getElementById('add').addEventListener('click', add);
/* This will keep the inputs displated permantaly on the screen */
show();

function remove(index) {
    var todos = get_todos();
    todos.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" onclick="remove(' + i + ')">x</button></li>';
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
}

document.getElementById('add').addEventListener('click', add);
show();