/*InnerHTML
Do the following exercise in two ways: using DOM manipulation methods and
using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second
is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the
select element.
Add the whole dropdown list to DOM .
Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page. */
let options = ['Option 1', 'Option 2', 'Option 3'];
let button = document.querySelector('#build-dropdown-button');
let container1 = document.querySelector('#dropdown-container1');
let container2 = document.querySelector('#dropdown-container2');

function buildDropdown(options, parentNode) {
  // create the select element
  let select = document.createElement('select');

  // create the options and add them to the select element
  options.forEach(option => {
    let optionNode = document.createElement('option');
    optionNode.value = option;
    optionNode.innerHTML = option;
    select.appendChild(optionNode);
  });

  // add the select element to the DOM
  parentNode.appendChild(select);
}

button.addEventListener('click', () => {
  buildDropdown(options, container1);
  buildDropdown(options, container2);
});

/*inner */
let options1 = ['Option 1', 'Option 2', 'Option 3'];
let button2 = document.querySelector('#build-dropdown-button2');
let container3 = document.querySelector('#dropdown-container3');
let container4 = document.querySelector('#dropdown-container4');

function buildDropdown(options, parentNode) {
  // create the options HTML
  let optionsHTML = '';
  options.forEach(option => {
    optionsHTML += `<option value="${option}">${option}</option>`;
  });

  // create the select element and add the options HTML
  let selectHTML = `<select>${optionsHTML}</select>`;

  // add the select element to the DOM
  parentNode.innerHTML = selectHTML;
}

button2.addEventListener('click', () => {
  buildDropdown(options1, container3);
  buildDropdown(options1, container4);
});
