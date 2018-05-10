/* 
Use DOM manipulation to create the sidebar elements (heading and paragraphs) 
and text content shown in the mocks.pdf image, and then append them to the DOM.

For styling purposes, use the following HTML elements and structure:

div class="sidebar"   // parent element: already in the HTML file
  h3
  p
  p
  img    // BONUS
  h3     // BONUS
  ul     // BONUS
    li   // BONUS
    ...
*/

// * STEP 1
// Write a statement to create the h3 element, then write statements to create 
// the two p elements.
// (HINT: Create variables to store each of the newly created elements.)

let h3 = document.createElement('h3');
let p1 = document.createElement('p');
let p2 = document.createElement('p');


// * STEP 2
// Write a statement to create the text node for the h3 element, using the text "About Us"
let h3Text = document.createTextNode('About Us');

// Write statements to create the text nodes for the two p 
// elements, using the following text values:

//     Text for the first paragraph:
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.

let p1Text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.");

//     Text for the second paragraph:
//     Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.

let p2Text = document.createTextNode("Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.");


// * STEP 3
// Make the heading text node a child of the heading element
// Make the paragraph text nodes children of their respective paragraph elements
h3.appendChild(h3Text);
p1.appendChild(p1Text);
p2.appendChild(p2Text);


// * STEP 4
// Write a statement to create a variable called sidebar and set its value to reference the div with class 'sidebar'.
let sidebar = document.querySelector('.sidebar');


// * STEP 5
// Make the h3 a child of the sidebar
// Make the 2 paragraphs children of the sidebar

sidebar.appendChild(h3);
sidebar.appendChild(p1);
sidebar.appendChild(p2);


// * STEP 6
// Save your changes, open index.html in your browser, then compare the web page to the mocks.pdf image.


// ** BONUS 1: Add the image shown in the mocks-bonus.pdf image. Specify 
// "images/about.jpg" as the source file.
// (HINT: The image should be a sibling of the h3 and p elements you already added.)
let img = document.createElement('img');
img.src = 'images/about.jpg';

sidebar.appendChild(img);


// ** BONUS 2: Add "Recent issues" heading and the list of issues, as shown in 
// the mocks-bonus.pdf image.
// (HINT: The list should be a sibling to the h3 and p elements you already added.)

let recentIssuesHeading = document.createElement('h3');
let recentIssuesHeadingText = document.createTextNode('Recent Issues');
recentIssuesHeading.appendChild(recentIssuesHeadingText);

sidebar.appendChild(recentIssuesHeading);

let issueList = document.createElement('ul');

let issue19 = document.createElement('li');
let issue19Text = document.createTextNode('Issue Nineteen - Camping');
issue19.appendChild(issue19Text);
issueList.appendChild(issue19);

let issue18 = document.createElement('li');
let issue18Text = document.createTextNode('Issue Eighteen - Food');
issue18.appendChild(issue18Text);
issueList.appendChild(issue18);

let issue17 = document.createElement('li');
let issue17Text = document.createTextNode('Issue Seventeen - Signs');
issue17.appendChild(issue17Text);
issueList.appendChild(issue17);

let issue16 = document.createElement('li');
let issue16Text = document.createTextNode('Issue Sixteen - Friends');
issue16.appendChild(issue16Text);
issueList.appendChild(issue16);

let issue15 = document.createElement('li');
let issue15Text = document.createTextNode('Issue Fifteen - Carnivals');
issue15.appendChild(issue15Text);
issueList.appendChild(issue15);

let issue14 = document.createElement('li');
let issue14Text = document.createTextNode('Issue Fourteen - Gatherings');
issue14.appendChild(issue14Text);
issueList.appendChild(issue14);

sidebar.appendchild(issuelist);