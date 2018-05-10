// STEP 1 - Create a new li element
// Add the 'list-group-item' class to it
let li = document.createElement('li');
li.classList.add('list-group-item');

// STEP 2 - Create text content for it
// The text content should equal 'Walk the dog'
let liText = document.createTextNode('Walk the dog');

// STEP 3 - Add the text content as the li's child
li.appendChild(liText);

// STEP 4 - Add the content to the dom
document.querySelector('#surveyList').appendChild(li);