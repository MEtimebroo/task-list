const vars = document.getElementById("vars");
const add = document.getElementById("add");
const listVars = document.getElementById("list-vars");
let counter = 1;

add.addEventListener("click", function() {
    let val = listVars.value;
    const task = document.createElement("input");
    task.id = `task${counter}`;
    task.setAttribute("class", "tasks");
    task.setAttribute("type", "checkbox");
    const label = document.createElement("label");
    label.setAttribute("for", task.id);
    label.innerText = `${val}`;
    const del = document.createElement("button");
    del.id = `del${counter}`;
    del.setAttribute("class", "dels");
    del.innerHTML = "<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'><path d='M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z'/></svg>";
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.appendChild(task);
    taskContainer.appendChild(label);
    taskContainer.appendChild(del);
    vars.appendChild(taskContainer);
    listVars.value = '';
    counter++;
    del.addEventListener("click", function() {
        taskContainer.remove();
    })
})

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let val = listVars.value;
        const task = document.createElement("input");
        task.id = `task${counter}`;
        task.setAttribute("class", "tasks");
        task.setAttribute("type", "checkbox");
        const label = document.createElement("label");
        label.setAttribute("for", task.id);
        label.innerText = `${val}`;
        const del = document.createElement("button");
        del.id = `del${counter}`;
        del.setAttribute("class", "dels");
        del.innerHTML = "<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'><path d='M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z'/></svg>";
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        taskContainer.appendChild(task);
        taskContainer.appendChild(label);
        taskContainer.appendChild(del);
        vars.appendChild(taskContainer);
        listVars.value = '';
        counter++;
        del.addEventListener("click", function() {
            taskContainer.remove();
        })
    }
})
