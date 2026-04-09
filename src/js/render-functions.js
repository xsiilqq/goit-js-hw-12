import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader'); // <span class="loader">
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  if (!galleryEl) return;

  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
        </a>
        <div class="gallery-info">
          <p class="gallery-info-item"><span>Likes</span> ${likes}</p>
          <p class="gallery-info-item"><span>Views</span> ${views}</p>
          <p class="gallery-info-item"><span>Comments</span> ${comments}</p>
          <p class="gallery-info-item"><span>Downloads</span> ${downloads}</p>
        </div>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  if (!galleryEl) return;
  galleryEl.innerHTML = '';
}

// показываем текст, прячем кнопку
export function showLoader() {
  if (loadMoreBtn) {
    loadMoreBtn.classList.add('is-hidden');
  }
  if (loaderEl) {
    loaderEl.classList.remove('is-hidden');
  }
}

// прячем текст, показываем кнопку
export function hideLoader() {
  if (loaderEl) {
    loaderEl.classList.add('is-hidden');
  }
  if (loadMoreBtn) {
    loadMoreBtn.classList.remove('is-hidden');
  }
}

export function showLoadMoreButton() {
  if (loadMoreBtn) {
    loadMoreBtn.classList.remove('is-hidden');
  }
}

export function hideLoadMoreButton() {
  if (loadMoreBtn) {
    loadMoreBtn.classList.add('is-hidden');
  }
}
