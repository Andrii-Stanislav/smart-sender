import changeState from './state';

function makeListners(items) {
  items.map(item => {
    //
    item.addEventListener('click', openFrame);
    const id = item.dataset.index;

    const addItemBtn = item.nextElementSibling;

    const quizItemFrame = item.querySelector(`#quiz-item-frame-${id}`);

    const openMoveBoxBtn = quizItemFrame.querySelector(`#open__box-move-${id}`);
    const primeryBox = quizItemFrame.querySelector('.frame__box-primery');
    const moveBox = quizItemFrame.querySelector('.frame__box-move');

    const moveItemBtn = moveBox.querySelector('.move-btn');

    addItemBtn.addEventListener('click', addItem);
    openMoveBoxBtn.addEventListener('click', openMoveBox);

    moveItemBtn.addEventListener('click', event => {
      const id = event.currentTarget.dataset.index;
      const checked = event.currentTarget.parentNode.querySelector(
        'input:checked',
      );
      const move = checked.dataset.move;
      changeState(id, move);
    });

    function addItem(event) {
      const id = event.currentTarget.dataset.index;
      changeState(id, 'addItem');
    }

    function openFrame(event) {
      const target = event.target.localName;
      if (
        target === 'input' ||
        target === 'span' ||
        target === 'label' ||
        target === 'button'
      ) {
        return;
      }
      quizItemFrame.classList.toggle('close');

      if (quizItemFrame.classList.contains('close')) {
        closeMoveBox();
      }
    }

    function openMoveBox() {
      primeryBox.classList.add('close');
      moveBox.classList.remove('close');
    }

    function closeMoveBox() {
      primeryBox.classList.remove('close');
      moveBox.classList.add('close');
    }
    //
  });
}

export default makeListners;
