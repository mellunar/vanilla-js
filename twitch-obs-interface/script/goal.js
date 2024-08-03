const goalContainer = document.getElementById('goal');
goalContainer.style.setProperty('--thickness', 36 + 'px');
let percentage = calcPercent(18, 50);

const goalBar = document.createElement('div');
goalBar.classList.add('goal-flex');
goalBar.classList.add('goal-full-width');
goalBar.style.position = 'relative';
goalContainer.appendChild(goalBar);

const goalTarget = document.createElement('div');
goalTarget.id = 'goal-target';
goalTarget.classList.add('goal-shadow');
goalTarget.textContent = '50';
goalBar.appendChild(goalTarget);

const goalBarOuter = document.createElement('div');
goalBarOuter.id = 'goal-bar-outer';
goalBarOuter.classList.add('goal-flex');
goalBar.appendChild(goalBarOuter);

const goalLightSweep = document.createElement('div');
goalLightSweep.classList.add('goal-light-sweep');
goalBarOuter.appendChild(goalLightSweep);

const goalBarInner = document.createElement('div');
goalBarInner.id = 'goal-bar-inner';
goalBarOuter.appendChild(goalBarInner);

const goalBarProgress = document.createElement('div');
goalBarProgress.id = 'goal-bar';
goalBarProgress.style.width = percentage + '%';
goalBarInner.appendChild(goalBarProgress);

const goalBarCurrent = document.createElement('div');
goalBarCurrent.id = 'goal-current';
goalBarCurrent.textContent = `18 (${Math.floor(percentage)}%)`;
goalBarInner.appendChild(goalBarCurrent);

const goalInfo = document.createElement('div');
goalInfo.classList.add('goal-flex');
goalInfo.classList.add('goal-full-width');
goalInfo.classList.add('goal-info');
goalInfo.classList.add('goal-shadow');
goalContainer.appendChild(goalInfo);

const goalDecorator = document.createElement('img');
goalDecorator.classList.add('goal-decorator');
goalDecorator.src =
  'https://live.staticflickr.com/65535/53854937839_e7b6b1c853_o.png';
goalInfo.appendChild(goalDecorator);

const goalTitle = document.createElement('div');
goalTitle.id = 'goal-title';
goalTitle.textContent = 'Followers';
goalInfo.appendChild(goalTitle);

const goalDecoratorInverse = goalDecorator.cloneNode();
goalInfo.appendChild(goalDecoratorInverse);

function calcPercent(partialValue, totalValue) {
  let count = (100 * partialValue) / totalValue;
  if (isNaN(count) || count < 0) {
    count = 0;
  } else if (count > 100) {
    count = 100;
  }
  return count;
}
