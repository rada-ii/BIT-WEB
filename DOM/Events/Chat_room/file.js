const form = document.getElementById('form');
const messages = document.getElementById('messages');

form.addEventListener('submit', event => {
  event.preventDefault();
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  messageInput.value = '';
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.textContent = message;
  messages.appendChild(messageElement);
});
