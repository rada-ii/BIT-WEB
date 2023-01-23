const player = $('#player');
const disableButton = $('#disable-button');
let enabled = true;

$(document).on('click', event => {
  if (enabled) {
    player.css({
      top: `${event.clientY - player.height() / 2}px`,
      left: `${event.clientX - player.width() / 2}px`,
    });
  }
});

disableButton.on('click', () => {
  enabled = !enabled;
});
