document.addEventListener("DOMContentLoaded", () => {
    // your code here

    const formTwo = document.getElementById("newform");
    const taskDiscript = document.getElementById("newdescription");
    const newPriority = document.getElementById("newtaskdiscri");

    const newdoc = document.getElementById("tasks");

    formTwo.addEventListener("submit", createNewTask);
});
const createNewTask = event => {
    event.preventDefault();
    //stop this form  not  to submit
    const taskDiscript = document.getElementById("newdescription");
    const newTask = document.createElement("li");
    newTask.innerText = .value;

    appendNewTask(newTask);
    event.target.reset();
};

const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
};