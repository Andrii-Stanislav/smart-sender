const markupItem = ({ id, smileys }) => {
  const smileysStyle = smileys ? '' : 'without-smiles';

  return ` <li>
            <div class="quiz-item" data-index="${id}">
              <div class="quiz-item-frame close" id="quiz-item-frame-${id}">
                  <div class="frame__box-primery" id="frame__box-primery">
                    <button class="frame-button">Отключить</button>
                    <button class="frame-button">Копировать</button>
                    <button class="frame-button">Логика</button>
                    <button class="frame-button" id="open__box-move-${id}">Переместить</button>
                    <button class="frame-button delete-btn">
                      <svg width="16" height="16">
                        <use href="./images/sprite.svg#trash"></use>
                      </svg>
                    </button>
                  </div>
                  <div class="frame__box-move close" id="frame__box-move-${id}">
                    <div class="move-input-box">
                        <input class="move-input" type="radio" data-move="up" name="move-${id}" id="up-radio-${id}">
                        <label class="move-label frame-button" for="up-radio-${id}">
                          <svg class="move-svg" width="10" height="7">
                            <use href="./images/sprite.svg#up"></use>
                          </svg>
                          Вверх
                        </label>
                    </div>
                    <div class="move-input-box">
                        <input class="move-input" type="radio" data-move="down" name="move-${id}" id="down-radio-${id}">
                        <label class="move-label frame-button" for="down-radio-${id}">
                          <svg class="move-svg" width="10" height="7">
                            <use href="./images/sprite.svg#down"></use>
                          </svg>
                          Вниз
                        </label>
                    </div>
                    <button class="frame-button move-btn" data-index="${id}">Переместить</button>
                  </div>
                <svg class="quiz-item-frame__svg" width="20" height="8">
                  <use href="./images/sprite.svg#parabola"></use>
                </svg>
              </div>
              <div class="quiz-item-container">
                <p> <b>№${id}.</b> На каком боку вы предпочитаете спать?</p>
                <p class="description">Варианты ответов:</p>
                <div class="quiz-item-select">
                  <div class="quiz-item-box">
                    <input type="radio" name="quiz-type-${id}" id="right-${id}">
                    <label class="quiz-item-select-radio" for="right-${id}">
                      <span class="${smileysStyle}" aria-label="Иконка" role="img">
                        😎
                      </span>
                      <span>На правом</span>
                    </label>
                  </div>
                  <div class="quiz-item-box">
                    <input type="radio" name="quiz-type-${id}" id="left-${id}">
                    <label class="quiz-item-select-radio" for="left-${id}">
                      <span class="${smileysStyle}" aria-label="Иконка" role="img">
                        😁
                      </span>
                      <span>На левом</span>
                    </label>
                  </div>
                  <div class="quiz-item-box">
                    <input type="radio" name="quiz-type-${id}" id="front-${id}">
                    <label class="quiz-item-select-radio" for="front-${id}">
                      <span class="${smileysStyle}" aria-label="Иконка" role="img">
                        😍
                      </span>
                      <span>На животе</span>
                    </label>
                  </div>
                  <div class="quiz-item-box">
                    <input type="radio" name="quiz-type-${id}" id="back-${id}">
                    <label class="quiz-item-select-radio" for="back-${id}">
                      <span class="${smileysStyle}" aria-label="Иконка" role="img">
                        😂
                      </span>
                      <span>На спине</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="quiz-item-hr"></div>
              <div class="quiz-item-bottom">
                <button class="quiz-item-bottom-btn">
                  <svg width="20" height="20">
                    <use href="./images/sprite.svg#setting"></use>
                  </svg>
                  <span>Редактировать</span>
                </button>
                <button class="quiz-item-bottom-btn">
                  <svg width="20" height="20">
                    <use href="./images/sprite.svg#git"></use>
                  </svg>
                  <span class="btn-number">1</span>
                </button>
              </div>
            </div>
            <button type="button" class="add-item" data-index="${id}" id="add-item-${id}">
              <div class="add-item-dashed"></div>
              <div class="add-item-plus">+</div>
            </button>
          </li>
`;
};

export default markupItem;
