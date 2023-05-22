//переменные
const popupEdit = document.querySelector(".profile__edit-button");
const popupAdd = document.querySelector(".profile__add-button");
const popupEditOpenClose = document.querySelector(".popup__profile");
const popupAddOpenClose = document.querySelector(".popup__card");
const editCloseButton = document.querySelector(".popup__edit-close");
const addCloseButton = document.querySelector(".popup__add-close");
const saveButton = document.querySelector(".popup__save-button");
const addButton = document.querySelector(".popup__add-button");
const cardsPlace = document.querySelector(".element");

//функции открытия и закрытия popup
function editOpenClose() {
  popupEditOpenClose.classList.toggle("popup_opened");
}

function addOpenClose() {
  popupAddOpenClose.classList.toggle("popup_opened");
}

function editCloseButon() {
  popupEditOpenClose.classList.toggle("popup_opened");
}

function addCloseButon() {
  popupAddOpenClose.classList.toggle("popup_opened");
}

//слушатели закрытия и открытия popup
popupEdit.addEventListener("click", editOpenClose);
popupAdd.addEventListener("click", addOpenClose);
editCloseButton.addEventListener("click", editCloseButon);
addCloseButton.addEventListener("click", addCloseButon);

//функция/кнопка сохранения изменений профиля в input
const inputEditForm = document.querySelector("#editFormContainer");
inputEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const titleInput = document.querySelector("#inputName");
  const descriptionInput = document.querySelector("#inputDescription");
  saveProfile(titleInput.value, descriptionInput.value);
  titleInput.value = titleInput.value;
  descriptionInput.value = descriptionInput.value;
  editCloseButon();
});
function saveProfile(titleValue, descriptionValue) {
  document.querySelector(".profile__title").textContent = titleValue;
  document.querySelector(".profile__subtitle").textContent = descriptionValue;
}

//функция добавления карточек
const inputAddForm = document.querySelector("#inputAddCard");
function addCard(cardName, cardUrl) {
  const elementTemplate = document.querySelector("#element-template").content;
  const elementContainer = elementTemplate
    .querySelector(".element__container")
    .cloneNode(true);
  elementContainer
    .querySelector(".element__button_active")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("element__button");
    });
  elementContainer
    .querySelector(".element__trash-button")
    .addEventListener("click", function () {
      elementContainer.remove();
    });
  elementContainer
    .querySelector(".element__image")
    .addEventListener("click", function (event) {
      document
        .querySelector(".popup__image-container")
        .classList.toggle("popup_opened");
      document.querySelector(".popup__card-image").src = event.target.src;
      document.querySelector(".popup__card-image").alt = event.target.cardName;
    });

  elementContainer.querySelector(".element__text").textContent = cardName;
  elementContainer.querySelector(".element__image").src = cardUrl;
  elementContainer.querySelector(".element__image").alt = cardName;
  cardsPlace.prepend(elementContainer);
}
inputAddForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameCard = document.querySelector("#inputAddName");
  const urlCard = document.querySelector("#inputAddUrl");
  addCard(nameCard.value, urlCard.value);
  nameCard.value = nameCard.value;
  urlCard.value = urlCard.value;
  addCloseButon();
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
  const elementTemplate = document.querySelector("#element-template").content;
  const elementContainer = elementTemplate
    .querySelector(".element__container")
    .cloneNode(true);
  elementContainer.querySelector(".element__text").textContent = element.name;
  elementContainer.querySelector(".element__image").src = element.link;
  elementContainer.querySelector(".element__image").alt = element.name;
  cardsPlace.append(elementContainer);

  elementContainer
    .querySelector(".element__trash-button")
    .addEventListener("click", function () {
      elementContainer.remove();
    });

  elementContainer
    .querySelector(".element__button_active")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("element__button");
    });
});

//открытие и закрытие полного изображения массива карточек
const fullImage = document.querySelectorAll(".element__container");

fullImage.forEach(function (element) {
  console.log(element.children);
  element.children[0].addEventListener("click", function (event) {
    console.log(event.target.src);
    event.target;
    openCardImage(event.target.src);
  });
});
closeCardImage();

function openCardImage(urlImage) {
  document
    .querySelector(".popup__image-container")
    .classList.toggle("popup_opened");
  document.querySelector(".popup__card-image").src = urlImage;
  document.querySelector(".popup__card-image").alt = urlImage;
}
function closeCardImage() {
  const imageCloseButton = document.querySelector(".popup__image-close");
  imageCloseButton.addEventListener("click", function () {
    document
      .querySelector(".popup__image-container")
      .classList.toggle("popup_opened");
  });
}
