class Reminder {
  constructor(title, priority, color, description, time) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
    this.time = time;
    this.timeoutId = null;
  }
}

let reminders = [];

let remindersVisible = false;

document.getElementById("addReminder").addEventListener("click", function() {
  let title = document.getElementById("title").value;
  let priority = document.getElementById("priority").value;
  let color = document.getElementById("color").value;
  let description = document.getElementById("description").value;
  let time = document.getElementById("time").value;

  if (!title || !description || !time) {
    alert("Title, Description, and Time are required!");
    return;
  }

  let reminder = new Reminder(title, priority, color, description, new Date(time));

  reminders[reminders.length] = reminder;

  alert("Reminder added successfully!");

  scheduleAlert(reminder);

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("time").value = "";

  if (remindersVisible) {
    showReminders();
  }
});

function scheduleAlert(reminder) {
  let currentTime = new Date();
  let reminderTime = reminder.time;
  let timeDifference = reminderTime - currentTime;

  if (timeDifference > 0) {
    reminder.timeoutId = setTimeout(function() {
      alert(
        `Reminder: ${reminder.title}\nPriority: ${reminder.priority}\nDescription: ${reminder.description}`
      );
    }, timeDifference);
  } else {
    alert(`The time for the reminder "${reminder.title}" has already passed. It will not trigger an alert.`);
  }
}

function showReminders() {
  let container = document.getElementById("remindersContainer");
  container.innerHTML = ""; 

  if (reminders.length === 0) {
    container.innerHTML = '<div class="reminder warning">No reminders to show.</div>';
    return;
  }

  for (let i = 0; i < reminders.length; i++) {
    let reminder = reminders[i];
    let reminderDiv = document.createElement("div");
    reminderDiv.className = `reminder ${getPriorityClass(reminder.priority)}`;
    reminderDiv.style.borderColor = reminder.color;

    reminderDiv.innerHTML = `
      <h4 style="color:${reminder.color}">${reminder.title}</h4>
      <p><strong>Priority:</strong> ${reminder.priority}</p>
      <p>${reminder.description}</p>
      <p><em>${new Date(reminder.time).toLocaleString()}</em></p>
      <button class="remove-btn">Remove</button>
    `;

    reminderDiv.querySelector(".remove-btn").addEventListener("click", function() {
      removeReminder(reminder);
    });

    container.appendChild(reminderDiv);
  }
}

function removeReminder(reminderToRemove) {
  
  for (let i = 0; i < reminders.length; i++) {
    let reminder = reminders[i];
    if (
      reminder.title === reminderToRemove.title &&
      reminder.priority === reminderToRemove.priority &&
      reminder.color === reminderToRemove.color &&
      reminder.description === reminderToRemove.description &&
      reminder.time.getTime() === reminderToRemove.time.getTime()
    ) {
      if (reminder.timeoutId) {
        clearTimeout(reminder.timeoutId);
      }

      for (let j = i; j < reminders.length - 1; j++) {
        reminders[j] = reminders[j + 1];
      }
      reminders.length -= 1;

      alert(`Reminder "${reminderToRemove.title}" removed successfully!`);
      break;
    }
  }

  if (remindersVisible) {
    showReminders();
  }
}

function getPriorityClass(priority) {
  switch (priority) {
    case "High":
      return "high-priority";
    case "Medium":
      return "medium-priority";
    case "Low":
    default:
      return "low-priority";
  }
}

document.getElementById("showReminders").addEventListener("click", function() {
  let button = document.getElementById("showReminders");
  remindersVisible = !remindersVisible;

  if (remindersVisible) {
    button.textContent = "Hide Reminders";
    showReminders();
  } else {
    button.textContent = "Show Reminders";
    document.getElementById("remindersContainer").innerHTML = "";
  }
});
