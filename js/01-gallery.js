import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryHTML = galleryItems
  .map(
    (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryHTML);

galleryContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
    const largeImageUrl = event.target.dataset.source;

    const lightbox = basicLightbox.create(
      `<img src="${largeImageUrl}" alt="Image description" />`
    );
    lightbox.show();

    document.addEventListener("keydown", escapePress);
    function escapePress(eventKey) {
      if (eventKey.code === "Escape") {
        lightbox.close();
        document.removeEventListener("keydown", escapePress);
      }
    }
  }
});
