import createMarkup from './createMarkup';
import makeListners from './frame';

let state = [
  { id: 1, smileys: true },
  { id: 2, smileys: false },
  { id: 3, smileys: true },
  { id: 4, smileys: false },
];

changeState();

const stateActions = {
  addItem(idItem) {
    state.splice(idItem, 0, { id: Number(idItem) + 1, smileys: true });
    state.map((item, index) => {
      if (index > idItem) {
        item.id = Number(item.id) + 1;
      }
      return item;
    });
  },
  moveUp(idItem) {
    if (Number(idItem) === 1) {
      return;
    }
    const newState = [];
    state.map((item, index) => {
      if (Number(item.id) + 1 === Number(idItem)) {
        newState[index + 1] = { ...item, id: item.id + 1 };
      } else if (Number(item.id) === Number(idItem)) {
        newState[index - 1] = { ...item, id: item.id - 1 };
      } else {
        newState[index] = item;
      }
    });
    state = newState;
  },
  moveDown(idItem) {
    if (Number(idItem) === state.length) {
      return;
    }
    const newState = [];
    state.map((item, index) => {
      if (Number(item.id) === Number(idItem)) {
        newState[index + 1] = { ...item, id: item.id + 1 };
      } else if (Number(item.id) - 1 === Number(idItem)) {
        newState[index - 1] = { ...item, id: item.id - 1 };
      } else {
        newState[index] = item;
      }
    });
    state = newState;
  },
};

function changeState(idItem, change) {
  if (change) {
    switch (change) {
      case 'addItem':
        stateActions.addItem(idItem);
        break;
      case 'up':
        stateActions.moveUp(idItem);
        break;
      case 'down':
        stateActions.moveDown(idItem);
        break;
    }
  }
  createMarkup(state);

  const quizItems = Array.from(document.querySelectorAll('.quiz-item'));
  makeListners(quizItems);
}

export default changeState;
