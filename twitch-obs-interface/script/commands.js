function toggleCommands() {
  const menuButton = document.getElementById('menu-btn');
  const value = menuButton.getAttribute('data-open') === 'true' ? true : false;

  if (!value) {
    menuButton.setAttribute('data-open', true);
    menuButton.textContent = 'close menu';
    return;
  }

  menuButton.setAttribute('data-open', false);
  menuButton.textContent = 'open menu';
}

document.getElementById('menu-btn').onclick = () => {
  toggleCommands();
};
