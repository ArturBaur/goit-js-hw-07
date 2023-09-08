import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryHTML = galleryItems
  .map(
    (item) => `
  <li>
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>`
  )
  .join("");

galleryContainer.innerHTML = galleryHTML;

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
