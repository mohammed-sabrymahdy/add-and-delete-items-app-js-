// دالة لإضافة مهمة
function addTask() {
    if (document.querySelector("#newtask input").value.length == 0) {
        alert('Please enter a task');
    } else {
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button class="delete"><i class="fa-solid fa-trash"></i></button>
            </div>`;

        // إضافة حدث لحذف المهمة
        let current_delete = document.querySelectorAll(".delete");
        for (let i = 0; i < current_delete.length; i++) {
            current_delete[i].onclick = function () {
                this.parentNode.remove();
            };
        }

        // إضافة حدث لتحديد المهمة
        let tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                // إزالة التحديد من جميع المهام
                document.querySelectorAll(".task").forEach(task => {
                    task.classList.remove("selected");
                });
                // تحديد المهمة الحالية
                this.classList.add("selected");
            };
        }

        // مسح حقل الإدخال بعد إضافة المهمة
        document.querySelector("#newtask input").value = "";
    }
}

// حدث النقر على زر Add
document.querySelector("#push").onclick = addTask;

// حدث الضغط على Enter في حقل الإدخال
document.querySelector("#newtask input").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) { // 13 هو كود مفتاح Enter
        addTask();
    }
});

// حدث الضغط على Delete من الكيبورد
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 46) { // 46 هو كود مفتاح Delete
        let selectedTask = document.querySelector(".task.selected");
        if (selectedTask) {
            selectedTask.remove(); // حذف المهمة المحددة
        }
    }
});