const Toggle = {
  OFF: 'toggle-off',
  ON: 'toggle-on',
};

const switchToggle = document.querySelector('#switch-toggle-consultant');
const form = document.querySelector('#consultant-form');
switchToggle.addEventListener('change', chooseSwitch);

keepToggle();

function chooseSwitch(event) {
  event.target.checked ? makeSwithOn() : makeSwithOff();
}

function makeSwithOff() {
  localStorage.setItem('switch-toggle', Toggle.OFF);
  form.classList.remove('open');
}

function makeSwithOn() {
  form.classList.add('open');
  localStorage.setItem('switch-toggle', Toggle.ON);
}

function keepToggle() {
  const currentTheme = localStorage.getItem('switch-toggle');

  switch (currentTheme) {
    case Toggle.OFF:
      makeSwithOff();
      break;
    case Toggle.ON:
      makeSwithOn();
      switchToggle.checked = true;
      break;
  }
}
