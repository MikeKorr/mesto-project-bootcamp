import "./styles/index.css";

import {
  popupImage,
  popupCard,
  inputAddForm,
  cardsPlace,
  elementTemplate,
  nameCard,
  urlCard,
} from "./src/components/card.js";

import {
  closeOpenButton,
  closeOverlay,
  inputEditForm,
  titleInput,
  descriptionInput,
  inputProfile,
  inputDescription,
} from "./src/components/modal";

import {
  disableButton,
  enableValidation,
  saveAllButton,
  saveButton,
  addButton,
} from "./src/components/validate";

//import { setCards, getCards } from "./src/components/api";
//переменные
const popupEditButton = document.querySelector(".profile__edit-button");
const popupAddButton = document.querySelector(".profile__add-button");
export const popupProfile = document.querySelector(".popup__profile");
const profileClose = document.querySelector(".popup__edit-close");
const cardClose = document.querySelector(".popup__add-close");
const imageClose = document.querySelector(".popup__image-close");

popupProfile.addEventListener("mousedown", closeOverlay);
popupCard.addEventListener("mousedown", closeOverlay);
popupImage.addEventListener("mousedown", closeOverlay);

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
