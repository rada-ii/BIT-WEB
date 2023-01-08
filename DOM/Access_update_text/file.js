/*Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.
Create a function that takes text from one of the <li> elements and presents it on
screen using alert.

Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with
text passed as the function argument.*/
// select the list, list items, and button
let list = document.querySelector('ul');
let listItems = document.querySelectorAll('li');
let button = document.querySelector('#replace-button');

function displayListItemText(event) {
  let listItem = event.target;
  alert(listItem.innerHTML);
}

listItems.forEach(listItem => {
  listItem.addEventListener('click', displayListItemText);
});

// create a function to replace the text of the last list item
function replaceLastListItemText(text) {
  let lastListItem = list.lastElementChild;
  lastListItem.innerHTML = text;
}

button.addEventListener('click', () => {
  replaceLastListItemText('New Text');
});
