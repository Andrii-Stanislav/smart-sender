const togleBtn = document.querySelector('#mobile-menu');
const mainNav = document.querySelector('#main-nav');
togleBtn.addEventListener('click', () => {
  if (mainNav.classList.contains('open')) {
    mainNav.classList.remove('open');
  } else {
    mainNav.classList.add('open');
  }
});

const togleBtnQuiz = document.querySelector('#quiz-menu');
const quizList = document.querySelector('#aside');
togleBtnQuiz.addEventListener('click', () => {
  if (quizList.classList.contains('open')) {
    quizList.classList.remove('open');
  } else {
    quizList.classList.add('open');
  }
});
