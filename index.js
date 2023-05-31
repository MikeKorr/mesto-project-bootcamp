import "./styles/index.css";

import {
  popupImage,
  popupCard,
  inputAddForm,
  imageClose,
  cardsPlace,
  elementTemplate,
  nameCard,
  urlCard,
} from "./src/components/card.js";

import {
  buttonOpenClose,
  overlayClose,
  inputEditForm,
  titleInput,
  descriptionInput,
  inputProfile,
  inputDescription,
} from "./src/components/modal";

import {
  enableValidation,
  saveAllButton,
  inputList,
  saveButton,
  addButton,
} from "./src/components/validate";

//переменные
const popupEditButton = document.querySelector(".profile__edit-button");
const popupAddButton = document.querySelector(".profile__add-button");
export const popupProfile = document.querySelector(".popup__profile");
const profileClose = document.querySelector(".popup__edit-close");
const cardClose = document.querySelector(".popup__add-close");

popupProfile.addEventListener("mousedown", overlayClose);
popupCard.addEventListener("mousedown", overlayClose);
popupImage.addEventListener("mousedown", overlayClose);

//слушатели закрытия и открытия popup
popupEditButton.addEventListener("click", function () {
  buttonOpenClose(popupProfile);
});
popupAddButton.addEventListener("click", function () {
  buttonOpenClose(popupCard);
});
profileClose.addEventListener("click", function () {
  buttonOpenClose(popupProfile);
});
cardClose.addEventListener("click", function () {
  buttonOpenClose(popupCard);
});

//сброс submit
function handleSubmitForm(evt) {
  evt.preventDefault();
  // evt.target.reset();
  // buttonDisable(evt.submitter);
}

inputEditForm.addEventListener("submit", handleSubmitForm);
inputAddForm.addEventListener("submit", handleSubmitForm);

//Валидационные настройки
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__value",
  buttonSaveSelector: ".popup_save",
};

enableValidation(validationSettings);
