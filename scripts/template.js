import { IMG_BASE_URL, orders, sizes } from './db.js';

const getCard = (item) => {
  const { img, name, status, short, info, colorStyle, id } = item;
  let element = document.createElement('section');
  element.className = `card ${colorStyle} ${orders[id]} ${sizes[id]}`;
  let card = `
      <div  class="wrapper">
        <figure class="card__title">
          <div class="card__title-img">
            <img src=${IMG_BASE_URL + img} alt="">
          </div>
          <figcaption class="cart__title-right">
            <h2 class="card__title-name">
              ${name}
            </h2>
            <div class="card__title-status">
              ${status}
            </div>
          </figcaption>
        </figure>
        <div class="card__body">
          <p class="card__body-short">
            ${short}
          </p>
          <blockquote class="card__body-info">
            ${info}
          </blockquote>
        </div>
      </div >
    `;
  element.innerHTML = card;
  return element;
}

export { getCard };