// STEP 1 - Create a new li element
// Add the 'list-group-item' class to it
const li = document.createElement('li');
li.classList.add('list-group-item');
console.log(li);


// STEP 2 - Create text content for it
// The text content should equal 'Walk the dog'
li.textContent = 'Walk the dog';


// STEP 3 - Add the text content as the li's child


// STEP 4 - Add the content to the dom
document.querySelector('#surveyList').appendChild(li);
