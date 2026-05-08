const calendar = document.getElementById("calendar");

/* CREATE CALENDAR */

function createCalendar(){

    calendar.innerHTML = "";

    for(let i = 1; i <= 31; i++){

        const day = document.createElement("div");

        day.classList.add("day");

        day.id = `day-${i}`;

        day.innerHTML = `
            <div class="day-number">${i}</div>
        `;

        calendar.appendChild(day);
    }
}

createCalendar();

/* LOGIN */

function login(){

    const username =
        document.getElementById("username").value;

    if(username === ""){

        alert("Please enter your name");

        return;
    }

    document.getElementById("loginContainer")
        .style.display = "none";

    document.getElementById("appContainer")
        .style.display = "block";

    document.getElementById("welcomeText")
        .innerHTML = `🎓 Welcome, ${username}`;

    alert(`Welcome ${username} 🚀`);
}

/* LOGOUT */

function logout(){

    document.getElementById("loginContainer")
        .style.display = "flex";

    document.getElementById("appContainer")
        .style.display = "none";

    document.getElementById("username").value = "";
}

/* ADD TASK */

function addTask(){

    const day =
        document.getElementById("taskDay").value;

    const taskText =
        document.getElementById("taskText").value;

    const taskTime =
        document.getElementById("taskTime").value;

    if(day === "" || taskText === "" || taskTime === ""){

        alert("Please fill all fields");

        return;
    }

    if(day < 1 || day > 31){

        alert("Enter valid day");

        return;
    }

    const task = document.createElement("div");

    task.classList.add("task");

    task.innerHTML = `📌 ${taskText}`;

    document.getElementById(`day-${day}`)
        .appendChild(task);

    /* REMINDER */

    const reminderTime =
        new Date(taskTime).getTime();

    const currentTime =
        new Date().getTime();

    const timeDifference =
        reminderTime - currentTime;

    if(timeDifference > 0){

        setTimeout(() => {

            alert(`⏰ Reminder: ${taskText}`);

        }, timeDifference);
    }

    alert("Task Added Successfully ✅");

    document.getElementById("taskDay").value = "";
    document.getElementById("taskText").value = "";
    document.getElementById("taskTime").value = "";
}