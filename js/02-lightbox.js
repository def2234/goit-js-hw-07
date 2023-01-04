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
        
        alt="${description}"
      />
    </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'botom',
  captionDelay: 250,
});

console.log(galleryItems);
