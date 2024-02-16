import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let galleryLightbox = new SimpleLightbox('.image-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form');
const searchInput = document.querySelector('.input-name');
const loader = document.querySelector('.loader');

const gallery = document.querySelector('.gallery');

form.addEventListener('submit', getPhoto);

function getPhoto(event) {
  event.preventDefault();

  const searchQuery = searchInput.value.trim();

  if (searchQuery === '') {
    iziToast.show({
      title: 'Error',
      message: 'Please enter a search query',
    });
  }

  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '42310325-d8e2b88bd4f4d7db9639050a5';
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  loader.classList.add('visible');

  fetch(url)
    .then(res => res.json())
    .then(data => {
      renderPhotos(data.hits);
      loader.classList.remove('visible');
    })
    .catch(error => {
      console.log('Error fetching data:', error);
      loader.classList.remove('visible');
    });
}

function makeMarkup(
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads
) {
  return `<li class="photo">
  <div class="photo-card">
    <a class="image-link" data-lightbox="image" href="${largeImageURL}">
    <img class="gallery-image" data-source="${largeImageURL}"  src="${webformatURL}" alt="${tags}"></img>
    </a>
    </div>
      <div class="description">
        <p class="description-item"> Likes ${likes}</p>
        <p class="description-item"> Views ${views}</p>
        <p class="description-item"> Comments ${comments}</p>
        <p class="description-item"> Downloads ${downloads}</p>
    
    </div>
  </li>`;
}

function renderPhotos(photos) {
  gallery.innerHTML = '';

  if (photos.length === 0) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: 'red',
      messageColor: 'white',
      messageSize: '25',
    });
  }
  photos.forEach(photo => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = photo;
    const photoElement = makeMarkup(
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads
    );
    gallery.insertAdjacentHTML('beforeend', photoElement);
  });

  galleryLightbox.refresh();
}
