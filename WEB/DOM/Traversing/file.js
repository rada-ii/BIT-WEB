/*Traversing 
Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its
background color.
Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element in the
first unordered list using node relations.
Apply class to that newly selected <li> element */

let listItems1 = document.querySelectorAll('div:first-of-type li');
let listItems2 = document.querySelectorAll('div:last-of-type li');
let activeListItem = document.querySelector('.active');
let button = document.querySelector('#move-button');

function moveActiveClass() {
  activeListItem.classList.remove('active');
  listItems1[0].classList.add('active');
}

button.addEventListener('click', moveActiveClass);
