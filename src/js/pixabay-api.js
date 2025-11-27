// src/js/pixabay-bay.js
import axios from 'axios';

const API_KEY = '53375029-d8153a1ccdcfd643a785188b2';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

/**
 * Запрос картинок по строке поиска
 * @param {string} query - поисковое слово
 * @param {number} page  - номер страницы
 * @returns {Promise<Object>} data из ответа API
 */
export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}

export { PER_PAGE };
