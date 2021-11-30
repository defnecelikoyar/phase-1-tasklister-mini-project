// 1. As a user, I should be able to type a task into the input field.
// 2. As a user, I should be able to click some form of a submit button. &&
// 3. As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
// 4. A delete function that will remove tasks from your list

document.addEventListener("DOMContentLoaded", () => {
// html flags -- we need to have javascript grab some html
//  <form id="create-task-form" action="" method="POST">
const form = document.querySelector("#create-task-form");
// OR, simpler but doesn't always work as intended: const form = document.querySelector("#form"). looking for any type of html element that's a form. if there is more than one, it might not work!
//if it was a class instead of an id, we would use a . before the name (instead of the #)
const taskList = document.querySelector('#tasks');
// what else might we want to put here? maybe the list, but we're not sure if we'll need to use it
const taskData = document.querySelector('#new-task-description');
form.addEventListener('submit', (e) => {
  const task = taskData.value;
  //not textContent, not innerHTML, etc
  e.preventDefault();
  const li = document.createElement('li');
  li.innerText = task;
  const button = document.createElement("button");
  button.innerText = 'X'
  li.appendChild(button);
  taskList.appendChild(li);
  //the order of appending is important
  e.target.reset();
  //or taskData.value = " ";
  button.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  })
})
});


// Once you've got the required deliverables working, you may want to try to implement one or more of the following:

// 5. A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// 6. As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// 7. An additional input field (e.g. user, duration, date due)
// 8. Ability to edit tasks
// 9. Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
