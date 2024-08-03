const mainContainer = document.querySelector('main');

const node = document.createElement('div');
node.classList.add('system');
node.style =
  'display: block; width: 100%; height: 100%; position: absolute; inset: 0;';

const alertAudio = document.createElement('audio');
alertAudio.id = 'alert-audio';
alertAudio.src =
  'https://www.myinstants.com/media/sounds/life_is_strange-consequences.mp3';
alertAudio.controls = false;
mainContainer.appendChild(alertAudio);

const systemText = document.createElement('div');
systemText.classList.add('absolute-center');
systemText.classList.add('text');
systemText.classList.add('system');
systemText.textContent = 'new\nfollower';
node.appendChild(systemText);

const usernameText = document.createElement('div');
usernameText.classList.add('absolute-center');
usernameText.classList.add('text');
usernameText.classList.add('username');
usernameText.textContent = 'username';
node.appendChild(usernameText);

const outerCircle = document.createElement('div');
outerCircle.id = 'circle-outer';
outerCircle.classList.add('circle');
outerCircle.classList.add('absolute-center');
node.appendChild(outerCircle);

const outerImage = document.createElement('img');
outerImage.classList.add('circle-image');
outerImage.src =
  'https://live.staticflickr.com/65535/53856677454_38bc40b5b4_o.png';
outerCircle.appendChild(outerImage);

const innerCircle = document.createElement('div');
innerCircle.id = 'circle-inner';
innerCircle.classList.add('circle');
innerCircle.classList.add('absolute-center');
node.appendChild(innerCircle);

const innerImage = document.createElement('img');
innerImage.classList.add('circle-image');
innerImage.src =
  'https://live.staticflickr.com/65535/53856781615_a97d8c8804_o.png';
innerCircle.appendChild(innerImage);

const middleCircle = document.createElement('div');
middleCircle.id = 'circle-middle';
middleCircle.classList.add('circle');
middleCircle.classList.add('absolute-center');
node.appendChild(middleCircle);

function callAlert() {
  if (node.parentElement === mainContainer) {
    return;
  }
  const input = document.getElementById('alert-box-input');

  usernameText.textContent = input.value || 'mellunar';
  document.getElementById('menu-btn').click();
  input.value = '';
  mainContainer.appendChild(node);
  alertAudio.play();

  setTimeout(() => {
    node.classList.add('system-fade');
    removeAlert();
  }, 6000);
}

function removeAlert() {
  setTimeout(() => {
    mainContainer.removeChild(node);
    node.classList.remove('system-fade');
  }, 201);
}

document.getElementById('alert-box-btn').onclick = () => {
  callAlert();
};
