import { setCards, getCards } from "./src/components/api";
const popupImage = document.querySelector(".popup__image-container");
const popupCard = document.querySelector(".popup__card");
const inputAddForm = document.forms.formAdd;
const cardsPlace = document.querySelector(".element");
const elementTemplate = document.querySelector("#element-template").content;
const nameCard = inputAddForm.inputAddName;
const urlCard = inputAddForm.inputAddUrl;

function closeOpenButton(element) {
  element.classList.toggle("popup_opened");
}

//функция отображения лайков
function handleLikeButton(evt) {
  evt.target.classList.toggle("element__button");
}

//функция удаления карточки
function handleTrashButton(element) {
  element.remove();
}

//функции передачи изображения
function changeImageContainer(event) {
  closeOpenButton(popupImage);
  document.querySelector(".popup__card-image").src = event.target.src;
  document.querySelector(".popup__card-image").alt = event.target.alt;
  document.querySelector(".popup__figure-caption").textContent =
    event.target.alt;
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
  const likeButtonCard = elementContainer.querySelector(
    ".element__button_active"
  );
  const trashButtonCard = elementContainer.querySelector(
    ".element__trash-button"
  );
  likeButtonCard.addEventListener("click", handleLikeButton);
  trashButtonCard.addEventListener("click", function () {
    handleTrashButton(elementContainer);
  });
  const elementImage = elementContainer.querySelector(".element__image");
  elementImage.addEventListener("click", changeImageContainer);
  elementContainer.querySelector(".element__text").textContent = cardName;
  elementImage.src = cardUrl;
  elementImage.alt = cardName;
  return elementContainer;
}
inputAddForm.addEventListener("submit", function (event) {
  event.preventDefault();
  setCards(nameCard, urlCard)
    .then((res) => {
      renderCards(createCard(res.nameCard.value, res.urlCard.value));
      closeOpenButton(popupCard);
    })
    .catch((err) => {
      console.log(err);
    });
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

export {
  popupImage,
  popupCard,
  inputAddForm,
  cardsPlace,
  elementTemplate,
  nameCard,
  urlCard,
};

//ПЕРВОНАЧАЛЬНЫЙ ВИД
const popupImage = document.querySelector(".popup__image-container");
const popupCard = document.querySelector(".popup__card");
const inputAddForm = document.forms.formAdd;
const cardsPlace = document.querySelector(".element");
const elementTemplate = document.querySelector("#element-template").content;
const nameCard = inputAddForm.inputAddName;
const urlCard = inputAddForm.inputAddUrl;

function closeOpenButton(element) {
  element.classList.toggle("popup_opened");
}

//функция отображения лайков
function handleLikeButton(evt) {
  evt.target.classList.toggle("element__button");
}

//функция удаления карточки
function handleTrashButton(element) {
  element.remove();
}

//функции передачи изображения
function changeImageContainer(event) {
  closeOpenButton(popupImage);
  document.querySelector(".popup__card-image").src = event.target.src;
  document.querySelector(".popup__card-image").alt = event.target.alt;
  document.querySelector(".popup__figure-caption").textContent =
    event.target.alt;
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
  const likeButtonCard = elementContainer.querySelector(
    ".element__button_active"
  );
  const trashButtonCard = elementContainer.querySelector(
    ".element__trash-button"
  );
  likeButtonCard.addEventListener("click", handleLikeButton);
  trashButtonCard.addEventListener("click", function () {
    handleTrashButton(elementContainer);
  });
  const elementImage = elementContainer.querySelector(".element__image");
  elementImage.addEventListener("click", changeImageContainer);
  elementContainer.querySelector(".element__text").textContent = cardName;
  elementImage.src = cardUrl;
  elementImage.alt = cardName;
  return elementContainer;
}
inputAddForm.addEventListener("submit", function (event) {
  event.preventDefault();
  renderCards(createCard(nameCard.value, urlCard.value));
  closeOpenButton(popupCard);
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

export {
  popupImage,
  popupCard,
  inputAddForm,
  cardsPlace,
  elementTemplate,
  nameCard,
  urlCard,
};

if (cardData.owner._id !== args._id) {
  trashButtonCard.remove();
} else {
  trashButtonCard.addEventListener("click", function () {
    deleteCards(cardData._id).then(() => {
      handleTrashButton(elementContainer);
    });
  });
}
