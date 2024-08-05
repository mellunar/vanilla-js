const socials = document.getElementById('socials');
const list = [
  {
    icon: 'twitch',
    username: 'mellunar',
  },
  {
    icon: 'youtube',
    username: '@mellunarttv',
  },
  {
    icon: 'instagram',
    username: '@mellunarttv',
  },
  {
    icon: 'tiktok',
    username: '@mellunarttv',
  },
];

const socialDecorator = document.createElement('img');
socialDecorator.classList.add('social-decorator');
socialDecorator.src = 'https://live.staticflickr.com/65535/53854937839_e7b6b1c853_o.png';
socials.appendChild(socialDecorator);

const socialIcon = document.createElement('i');
socialIcon.id = 'social-icon';
socials.appendChild(socialIcon);

const socialName = document.createElement('div');
socialName.id = 'social-name';
socials.appendChild(socialName);

const socialDecoratorInverse = socialDecorator.cloneNode();
socials.appendChild(socialDecoratorInverse);

let position = 0;

changeSocial();

function changeSocial() {
  if (position > list.length - 1) {
    position = 0;
  }

  const item = list[position];
  socialIcon.className = `bi bi-${item.icon}`;
  socialName.textContent = item.username;

  setTimeout(() => {
    position += 1;
    changeSocial();
  }, 5000)
};