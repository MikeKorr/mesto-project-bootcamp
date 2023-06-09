import "./styles/index.css";

import {
  popupImage,
  popupCard,
  inputAddForm,
  cardsPlace,
  elementTemplate,
  nameCard,
  urlCard,
  renderAppendCards,
  createCard,
} from "./src/components/card.js";

import {
  closeOpenButton,
  closeOverlay,
  inputEditForm,
  titleInput,
  inputAvatarForm,
  avatarInput,
  descriptionInput,
  inputProfile,
  inputDescription,
  urlAvatar,
} from "./src/components/modal";

import {
  disableButton,
  enableValidation,
  saveAllButton,
  // saveButton,
  // addButton,
} from "./src/components/validate";
import { getAvatar, getCards, getUsers } from "./src/components/api";

//переменные
const popupAvatar = document.querySelector(".popup__avatar");
const avatarClose = document.querySelector(".popup__avatar-close");
const avatarOpen = document.querySelector(".profile__avatar-ellipse");
const popupEditButton = document.querySelector(".profile__edit-button");
const popupAddButton = document.querySelector(".profile__add-button");
const popupProfile = document.querySelector(".popup__profile");
const profileClose = document.querySelector(".popup__edit-close");
const cardClose = document.querySelector(".popup__add-close");
const imageClose = document.querySelector(".popup__image-close");
const popupAvatarButton = document.querySelector(".profile__avatar-save");

popupProfile.addEventListener("mousedown", closeOverlay);
popupCard.addEventListener("mousedown", closeOverlay);
popupImage.addEventListener("mousedown", closeOverlay);
popupAvatar.addEventListener("mousedown", closeOverlay);

//слушатели закрытия и открытия popup
popupEditButton.addEventListener("click", function () {
  closeOpenButton(popupProfile);
});

popupAddButton.addEventListener("click", function () {
  closeOpenButton(popupCard);
});
profileClose.addEventListener("click", function () {
  closeOpenButton(popupProfile);
});
cardClose.addEventListener("click", function () {
  closeOpenButton(popupCard);
});

imageClose.addEventListener("click", function () {
  closeOpenButton(popupImage);
});

avatarClose.addEventListener("click", function () {
  closeOpenButton(popupAvatar);
});

avatarOpen.addEventListener("click", function () {
  closeOpenButton(popupAvatar);
});

//сброс submit
function handleCardsFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
}

inputAddForm.addEventListener("submit", handleCardsFormSubmit);

//Валидационные настройки
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__value",
  buttonSaveSelector: ".popup_save",
};

enableValidation(validationSettings);

let userId;

Promise.all([getCards(), getUsers()]).then(([allCards, userData]) => {
  (userId = userData._id),
    (inputProfile.textContent = userData.name),
    (inputDescription.textContent = userData.about),
    (urlAvatar.src = userData.avatar),
    allCards.forEach((item) => {
      renderAppendCards(createCard(item, userData));
    });
});

export { popupAvatar, popupProfile, userId };
