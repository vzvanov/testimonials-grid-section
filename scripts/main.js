import { names } from './db.js';
import { getCard } from './template.js';

const root = document.querySelector('.root');
const TIMEOUT = 500;

const fetchNames = () => {
  showLoading(root);
  setTimeout(() => {
    showNames(root);
  }, TIMEOUT);
}

const showNames = (root) => {
  root.innerHTML = '';
  names.forEach(
    (item) => {
      let element = getCard(item);
      root.append(element);
    }
  )
}

const showLoading = (element) => {
  element.innerHTML = `<h2>Loading...</h2>`;
}

fetchNames();