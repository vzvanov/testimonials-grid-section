import { IMG_BASE_URL, orders, sizes } from './db.js';

const getCard = (item) => {
  const { img, name, status, short, info, colorStyle, id } = item;
  let element = document.createElement('div');
  element.className = `card ${colorStyle} ${orders[id]} ${sizes[id]}`;
  let card = `
      <div class="wrapper">
        <div class="card__title">
          <div class="card__title-img">
            <img src=${IMG_BASE_URL + img} alt="">
          </div>
          <div class="cart__title-right">
            <h2 class="card__title-name">
              ${name}
            </h2>
            <div class="card__title-status">
              ${status}
            </div>
          </div>
        </div>
        <div class="card__body">
          <p class="card__body-short">
            ${short}
          </p>
          <p class="card__body-info">
            ${info}
          </p>
        </div>
      </div>
    `;
  element.innerHTML = card;
  return element;
}

export { getCard };