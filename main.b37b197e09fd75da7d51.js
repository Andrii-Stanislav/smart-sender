(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"73kS":function(e,n){var t="toggle-off",i="toggle-on",s=document.querySelector("#switch-toggle-consultant"),a=document.querySelector("#consultant-form");function o(){localStorage.setItem("switch-toggle",t),a.classList.remove("open")}function r(){a.classList.add("open"),localStorage.setItem("switch-toggle",i)}s.addEventListener("change",(function(e){e.target.checked?r():o()})),function(){switch(localStorage.getItem("switch-toggle")){case t:o();break;case i:r(),s.checked=!0}}()},QfWi:function(e,n,t){"use strict";t.r(n);t("xh0B"),t("4owi"),t("lmye"),t("Xlt+"),t("fp7Y"),t("wCa+"),t("WoWj"),t("x3Br");var i=function(e){var n=e.id,t=e.smileys?"":"without-smiles";return' <li>\n            <div class="quiz-item" data-index="'+n+'">\n              <div class="quiz-item-frame close" id="quiz-item-frame-'+n+'">\n                  <div class="frame__box-primery" id="frame__box-primery">\n                    <button class="frame-button">Отключить</button>\n                    <button class="frame-button">Копировать</button>\n                    <button class="frame-button">Логика</button>\n                    <button class="frame-button" id="open__box-move-'+n+'">Переместить</button>\n                    <button class="frame-button delete-btn">\n                      <svg width="16" height="16">\n                        <use href="./images/sprite.svg#trash"></use>\n                      </svg>\n                    </button>\n                  </div>\n                  <div class="frame__box-move close" id="frame__box-move-'+n+'">\n                    <div class="move-input-box">\n                        <input class="move-input" type="radio" data-move="up" name="move-'+n+'" id="up-radio-'+n+'">\n                        <label class="move-label frame-button" for="up-radio-'+n+'">\n                          <svg class="move-svg" width="10" height="7">\n                            <use href="./images/sprite.svg#up"></use>\n                          </svg>\n                          Вверх\n                        </label>\n                    </div>\n                    <div class="move-input-box">\n                        <input class="move-input" type="radio" data-move="down" name="move-'+n+'" id="down-radio-'+n+'">\n                        <label class="move-label frame-button" for="down-radio-'+n+'">\n                          <svg class="move-svg" width="10" height="7">\n                            <use href="./images/sprite.svg#down"></use>\n                          </svg>\n                          Вниз\n                        </label>\n                    </div>\n                    <button class="frame-button move-btn" data-index="'+n+'">Переместить</button>\n                  </div>\n                <svg class="quiz-item-frame__svg" width="20" height="8">\n                  <use href="./images/sprite.svg#parabola"></use>\n                </svg>\n              </div>\n              <div class="quiz-item-container">\n                <p> <b>№'+n+'.</b> На каком боку вы предпочитаете спать?</p>\n                <p class="description">Варианты ответов:</p>\n                <div class="quiz-item-select">\n                  <div class="quiz-item-box">\n                    <input type="radio" name="quiz-type-'+n+'" id="right-'+n+'">\n                    <label class="quiz-item-select-radio" for="right-'+n+'">\n                      <span class="'+t+'" aria-label="Иконка" role="img">\n                        😎\n                      </span>\n                      <span>На правом</span>\n                    </label>\n                  </div>\n                  <div class="quiz-item-box">\n                    <input type="radio" name="quiz-type-'+n+'" id="left-'+n+'">\n                    <label class="quiz-item-select-radio" for="left-'+n+'">\n                      <span class="'+t+'" aria-label="Иконка" role="img">\n                        😁\n                      </span>\n                      <span>На левом</span>\n                    </label>\n                  </div>\n                  <div class="quiz-item-box">\n                    <input type="radio" name="quiz-type-'+n+'" id="front-'+n+'">\n                    <label class="quiz-item-select-radio" for="front-'+n+'">\n                      <span class="'+t+'" aria-label="Иконка" role="img">\n                        😍\n                      </span>\n                      <span>На животе</span>\n                    </label>\n                  </div>\n                  <div class="quiz-item-box">\n                    <input type="radio" name="quiz-type-'+n+'" id="back-'+n+'">\n                    <label class="quiz-item-select-radio" for="back-'+n+'">\n                      <span class="'+t+'" aria-label="Иконка" role="img">\n                        😂\n                      </span>\n                      <span>На спине</span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class="quiz-item-hr"></div>\n              <div class="quiz-item-bottom">\n                <button class="quiz-item-bottom-btn">\n                  <svg width="20" height="20">\n                    <use href="./images/sprite.svg#setting"></use>\n                  </svg>\n                  <span>Редактировать</span>\n                </button>\n                <button class="quiz-item-bottom-btn">\n                  <svg width="20" height="20">\n                    <use href="./images/sprite.svg#git"></use>\n                  </svg>\n                  <span class="btn-number">1</span>\n                </button>\n              </div>\n            </div>\n            <button type="button" class="add-item" data-index="'+n+'" id="add-item-'+n+'">\n              <div class="add-item-dashed"></div>\n              <div class="add-item-plus">+</div>\n            </button>\n          </li>\n'};var s=function(e){var n=document.querySelector("#quiz-list"),t=e.reduce((function(e,n){return e+i(n)}),"");n.innerHTML=t};var a=function(e){e.map((function(e){e.addEventListener("click",(function(e){var n=e.target.localName;if("input"===n||"span"===n||"label"===n||"button"===n)return;i.classList.toggle("close"),i.classList.contains("close")&&(a.classList.remove("close"),o.classList.add("close"))}));var n=e.dataset.index,t=e.nextElementSibling,i=e.querySelector("#quiz-item-frame-"+n),s=i.querySelector("#open__box-move-"+n),a=i.querySelector(".frame__box-primery"),o=i.querySelector(".frame__box-move"),r=o.querySelector(".move-btn");t.addEventListener("click",(function(e){var n=e.currentTarget.dataset.index;d(n,"addItem")})),s.addEventListener("click",(function(){a.classList.add("close"),o.classList.remove("close")})),r.addEventListener("click",(function(e){var n=e.currentTarget.dataset.index,t=e.currentTarget.parentNode.querySelector("input:checked").dataset.move;d(n,t)}))}))},o=[{id:1,smileys:!0},{id:2,smileys:!1},{id:3,smileys:!0},{id:4,smileys:!1}];u();var r=function(e){o.splice(e,0,{id:Number(e)+1,smileys:!0}),o.map((function(n,t){return t>e&&(n.id=Number(n.id)+1),n}))},c=function(e){if(1!==Number(e)){var n=[];o.map((function(t,i){Number(t.id)+1===Number(e)?n[i+1]=Object.assign({},t,{id:t.id+1}):Number(t.id)===Number(e)?n[i-1]=Object.assign({},t,{id:t.id-1}):n[i]=t})),o=n}},l=function(e){if(Number(e)!==o.length){var n=[];o.map((function(t,i){Number(t.id)===Number(e)?n[i+1]=Object.assign({},t,{id:t.id+1}):Number(t.id)-1===Number(e)?n[i-1]=Object.assign({},t,{id:t.id-1}):n[i]=t})),o=n}};function u(e,n){if(n)switch(n){case"addItem":r(e);break;case"up":c(e);break;case"down":l(e)}s(o);var t=Array.from(document.querySelectorAll(".quiz-item"));a(t)}var d=u;t("73kS"),t("kFVz")},kFVz:function(e,n){var t=document.querySelector("#mobile-menu"),i=document.querySelector("#main-nav");t.addEventListener("click",(function(){i.classList.contains("open")?i.classList.remove("open"):i.classList.add("open")}));var s=document.querySelector("#quiz-menu"),a=document.querySelector("#aside");s.addEventListener("click",(function(){a.classList.contains("open")?a.classList.remove("open"):a.classList.add("open")}))},xh0B:function(e,n,t){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.b37b197e09fd75da7d51.js.map