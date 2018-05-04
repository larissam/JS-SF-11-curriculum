let mainHeading = document.createElement("h1");
let headingText = document.createTextNode("Reminders");
mainHeading.appendChild(headingText);
document.querySelector('header').appendChild(mainHeading);

// STEP 1 - add an event listener to the window for when the document loads

// STEP 2 - move all the code into the event handler for the window on load event

// STEP 3 - in the window on load event handler, select the element with the id 'addReminder', 'reminder', and 'reminderList'

// STEP 4 - add a click event listener for the 'addReminder' button

// STEP 5 - in the event handler for the 'addReminder' button:
// - prevent the form from being submitted
// - get the value from the 'reminder' input
// - create a new li and textnode with the 'reminder' input value
// - set the new li's className to be 'list-group-item'
// - attach the new li to the DOM
// - clear the 'reminder' input
  