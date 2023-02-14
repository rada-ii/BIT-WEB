const player = document.getElementById('player');
const disableButton = document.getElementById('disable-button');
let enabled = true;

document.addEventListener('click', event => {
  if (enabled) {
    player.style.top = `${event.clientY - player.offsetHeight / 2}px`;
    player.style.left = `${event.clientX - player.offsetWidth / 2}px`;
  }
});

disableButton.addEventListener('click', () => {
  enabled = !enabled;
});
