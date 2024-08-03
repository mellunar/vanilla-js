const chatbox = document.getElementById('chatbox');
let count = 0;

function addChatMessage() {
  const inputUsername = document.getElementById('alert-box-input');
  const inputMessage = document.getElementById('chat-box-input');
  const inputRole = document.getElementById('chat-box-role');

  if (!inputMessage.value) {
    return;
  }

  count += 1;

  const node = document.createElement('div');
  node.classList.add('chat-animated');
  node.classList.add('chat-role-' + inputRole.value);
  node.setAttribute('data-count', count);

  const wrapper = document.createElement('div');
  wrapper.classList.add('chat-wrapper');
  node.appendChild(wrapper);

  const meta = document.createElement('div');
  meta.classList.add('chat-meta');
  meta.classList.add('chat-animated');
  meta.classList.add(true ? 'chat-tag-default' : 'chat-tag-featured');
  wrapper.appendChild(meta);

  const tags = document.createElement('span');
  tags.classList.add('chat-tags');
  meta.appendChild(tags);

  if (inputRole.value !== 'none') {
    const tag = document.createElement('span');
    tag.classList.add('chat-tag');
    tag.textContent = getRoleName(inputRole.value);
    tags.appendChild(tag);
  }

  const name = document.createElement('span');
  name.classList.add('chat-name');
  name.textContent = inputUsername.value || 'mellunar';
  meta.appendChild(name);

  const message = document.createElement('div');
  message.classList.add('chat-message');
  message.classList.add('chat-animated');
  message.textContent = inputMessage.value;
  wrapper.appendChild(message);

  const messageContent = document.createElement('span');
  messageContent.classList.add('chat-animated');
  message.appendChild(messageContent);

  document.getElementById('menu-btn').click();
  chatbox.appendChild(node);

  if (chatbox.childElementCount > 4) {
    const id = chatbox.firstElementChild.getAttribute('data-count');
    removeMessage(id);
  }

  setTimeout(() => {
    inputUsername.value = '';
    inputMessage.value = '';
    inputRole.value = 'none';
  }, 200);

  setTimeout(() => {
    removeMessage(Number(node.getAttribute('data-count')));
  }, 10000);
}

function getRoleName(value) {
  switch (value) {
    case 'mod':
      return 'Mod';
    case 'owner':
      return 'Queen';
    case 'sub':
      return 'Sub';
    default:
      return '';
  }
}

function removeMessage(id) {
  const element = chatbox.querySelector(`[data-count="${id}"]`);

  if (element) {
    element.classList.add('chat-fade-out');

    setTimeout(() => {
      element.remove();
    }, 800);
  }
}

document.getElementById('chat-box-btn').onclick = () => {
  addChatMessage();
};
