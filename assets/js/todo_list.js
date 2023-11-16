const taskList = document.querySelector(".task-list");
const filterCheckBox = document.querySelector("#filter");
const form = document.querySelector(".form-contain");
const btnForm = document.getElementById("add-item");
console.log(btnForm);

taskList.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.classList.contains("btn-action-done")) {
        event.target.parentNode.parentNode.classList.toggle("done");
    }
    else if (event.target.classList.contains("btn-action-remove")) {
        event.target.parentNode.parentNode.classList.add("fall");
        const listRemove = event.target.parentNode.parentNode;
        listRemove.addEventListener("transitionend", () => {
            listRemove.remove();
        });
    }
});

filterCheckBox.addEventListener("click", (event) => {
    // console.log(event.target.checked);
    const listOfTask = taskList.querySelectorAll("li");
    listOfTask.forEach((element) => {
        if (element.classList.contains("done")) {
            element.style.display = event.target.checked ? "none" : "flex";
        }
    })
    
});

btnForm.addEventListener("click", (event) => {
    // event.preventDefault();
    const valueInput = document.querySelector("#form-input");
    if (!valueInput.value.trim()) {
        swal({
            text: "Hãy nhập tên task vào",
            icon: "info"
        });
    }
    else {
        const addList =  document.createElement("li");
        const labelList = document.createElement("span");
        labelList.className = "label";
        labelList.textContent = `${valueInput.value.trim()}`;
        addList.appendChild(labelList);
        const divContain = document.createElement("div");
        divContain.className = "btn-contain";
        divContain.innerHTML = `<input type="checkbox" class="btn-action btn-action-done">
            <button class="btn-action btn-action-remove">✖</button>`;
        addList.appendChild(divContain);
        taskList.appendChild(addList);
        valueInput.value = "";
    }
})