/*Attributes
Create a form that contains multiple input elements with labels.
Some of those elements should be required.
Create a function that validates the form.
The function checks each input element that belongs to the form.
If the element has the required attribute and no data, it should get red borders. */

const form = document.getElementById('myForm');

function validateForm() {
  const inputs = form.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute('required') && !inputs[i].value) {
      inputs[i].style.border = '5px solid red';
    }
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent the form from submitting
  validateForm(); // validate the form
});
