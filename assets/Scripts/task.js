const taskList = document.querySelector("#tasks");
const submit = document.querySelector(".submit-task");
const newTask = document.querySelector("#newTask");

const url = `http://localhost:5000`;


const getTasks = async() => {
    const response = await fetch(url + "/tasks");
    const tasks = await response.json();

    for (const task of tasks) {
        taskList.innerHTML +=
            `<li id="${task.id}" class="d-flex align-center justify-between direction-row-reverse">
                    <div class="d-flex align-center direction-row-reverse">
                        <span></span>
                       <p class="direction-rtl">${task.title}</p>
                    </div>
                   <i class='delete-icon bx bx-trash delete-todo'></i>
               </li>`;
    }
}

const addTask = async(data) => {
    const response = await fetch(url + "/tasks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const deleteTask = async(id) => {
    const response = await fetch(url + `/tasks/${id}`, {
        method: "DELETE",
    });
}

submit.addEventListener("click", function() {
    const data = {
        title: newTask.value
    };
    if (newTask.value.trim()) {
        addTask(data);
    } else
        alert("please enter a title");
});


taskList.addEventListener("click", function(e) {

    if (e.target.classList.contains("delete-icon")) {
        const id = e.target.parentElement.id;
        const deleteConfirmation = confirm("Are you sure to delete this item?");
        if (deleteConfirmation) {
            deleteTask(id);
        }
    }


});

getTasks();