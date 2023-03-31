// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems){ 
    return galleryItems.map(({preview, original, description}) => {
        return `<li class = "gallery__item"><a class="gallery__link" href = "${original}" target = "_self"><img class = "gallery__image" src="${preview}" alt = "${description}"/></a></li>`;
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
 });

console.log(galleryItems);
console.log(galleryItems);
