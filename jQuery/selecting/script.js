/*Selecting
Create a page that contains navigation (ul element)
Navigation should contain odd number of elements
Select the first element of the list and give it a bottom border
Select all list elements and transform their text to uppercase
Select active element of the list and change its font color
Find the middle one and change its background color */

//Select the first element of the list and give it a bottom border

let addBorder = $('li:first').css({
  'border-bottom': '5px solid green',
});

//Select all list elements and transform their text to uppercase

let listItems = $('li').css({
  'text-transform': 'uppercase',
});

//Select active element of the list and change its font color
let liActive = $('li.active').css({
  color: 'blue',
});

//Find the middle one and change its background color

let $middleLi = $('li:nth-of-type(3)');

$middleLi.css({
  'background-color': 'orange',
});
