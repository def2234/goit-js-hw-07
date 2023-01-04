import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', createImageMarkup(galleryItems));

function createImageMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>`;
    })
    .join('');
}

galleryEl.addEventListener('click', onClickImg);

function onClickImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"
/>`);
  instance.show();

  galleryEl.addEventListener('keydown', onClickImgClose);
  function onClickImgClose(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

console.log(galleryItems);
