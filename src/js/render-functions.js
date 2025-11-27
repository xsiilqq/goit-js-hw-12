// src/js/render-functions.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function getRefs() {
  return {
    galleryEl: document.querySelector('.gallery'),
    loaderEl: document.querySelector('.loader'),
    loadMoreBtn: document.querySelector('.load-more'),
  };
}

let lightbox = null;

export function createGallery(images) {
  const { galleryEl } = getRefs();
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

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  const { galleryEl } = getRefs();
  if (galleryEl) galleryEl.innerHTML = '';
}

// экран загрузки
export function showLoader() {
  const { loaderEl, loadMoreBtn } = getRefs();
  if (loadMoreBtn) loadMoreBtn.classList.add('is-hidden');
  if (loaderEl) {
    loaderEl.textContent = 'Loading images, please wait…';
    loaderEl.classList.remove('is-hidden');
  }
}

export function hideLoader() {
  const { loaderEl, loadMoreBtn } = getRefs();
  if (loaderEl) {
    loaderEl.textContent = '';
    loaderEl.classList.add('is-hidden');
  }
  if (loadMoreBtn) loadMoreBtn.classList.remove('is-hidden');
}

export function showLoadMoreButton() {
  const { loadMoreBtn } = getRefs();
  if (loadMoreBtn) loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  const { loadMoreBtn } = getRefs();
  if (loadMoreBtn) loadMoreBtn.classList.add('is-hidden');
}
