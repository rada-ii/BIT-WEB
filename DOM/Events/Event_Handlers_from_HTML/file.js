let toggleBtn = document.getElementById('toggle-btn');
let cancelBtn = document.getElementById('cancel-btn');
let intervalId;

function toggleColor() {
  let body = document.getElementsByTagName('body')[0];
  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = 'darkslategrey';
  } else {
    body.style.backgroundColor = 'white';
  }
}

function startToggle() {
  intervalId = setInterval(toggleColor, 1000);
}

function cancelToggle() {
  clearInterval(intervalId);
}

toggleBtn.addEventListener('click', startToggle);
cancelBtn.addEventListener('click', cancelToggle);

// let buttonText = 'ON';

// function toggleButton() {
//   if (buttonText === 'ON') {
//     buttonText = 'OFF';
//   } else {
//     buttonText = 'ON';
//   }
//   document.getElementById('button').innerHTML = buttonText;
// }

// document.getElementById('button').addEventListener('click', toggleButton);
