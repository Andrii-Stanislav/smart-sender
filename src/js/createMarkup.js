import markupItem from './markup';

function createMarkup(items) {
  const quizList = document.querySelector('#quiz-list');

  const allMarkup = items.reduce((acc, item) => acc + markupItem(item), '');

  quizList.innerHTML = allMarkup;
}

export default createMarkup;
