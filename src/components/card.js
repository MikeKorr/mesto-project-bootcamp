const popupImage = document.querySelector(".popup__image-container");
const popupCard = document.querySelector(".popup__card");
const inputAddForm = document.forms.formAdd;
const imageClose = document.querySelector(".popup__image-close");
const cardsPlace = document.querySelector(".element");
const elementTemplate = document.querySelector("#element-template").content;
const nameCard = inputAddForm.inputAddName;
const urlCard = inputAddForm.inputAddUrl;

export {
  popupImage,
  popupCard,
  inputAddForm,
  imageClose,
  cardsPlace,
  elementTemplate,
  nameCard,
  urlCard,
};

function buttonOpenClose(element) {
  element.classList.toggle("popup_opened");
}

//функция отображения лайков
function likeButton(evt) {
  evt.target.classList.toggle("element__button");
}

//функция удаления карточки
function trashButton(element) {
  element.remove();
}

//функции передачи изображения
function imageContainer(event) {
  buttonOpenClose(popupImage);
  document.querySelector(".popup__card-image").src = event.target.src;
  document.querySelector(".popup__card-image").alt = event.target.cardName;
}

//функция рендринга
function renderCards(element) {
  cardsPlace.prepend(element);
}

//функция добавления карточек
function createCard(cardName, cardUrl) {
  const elementContainer = elementTemplate
    .querySelector(".element__container")
    .cloneNode(true);
  elementContainer
    .querySelector(".element__button_active")
    .addEventListener("click", likeButton);
  elementContainer
    .querySelector(".element__trash-button")
    .addEventListener("click", function () {
      trashButton(elementContainer);
    });
  elementContainer
    .querySelector(".element__image")
    .addEventListener("click", imageContainer);
  const elementImage = elementContainer.querySelector(".element__image");
  elementContainer.querySelector(".element__text").textContent = cardName;
  elementImage.src = cardUrl;
  elementImage.alt = cardName;
  return elementContainer;
}
inputAddForm.addEventListener("submit", function (event) {
  event.preventDefault();
  nameCard.value = nameCard.value;
  urlCard.value = urlCard.value;
  renderCards(createCard(nameCard.value, urlCard.value));
  buttonOpenClose(popupCard);
});

//6 стартовых карточек
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

initialCards.forEach(function (element) {
  renderCards(createCard(element.name, element.link));
});

imageClose.addEventListener("click", function () {
  buttonOpenClose(popupImage);
});
