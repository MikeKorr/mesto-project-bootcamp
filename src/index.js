import "./styles/index.css";

import {
  handleCardsFormSubmit,
  popupImage,
  popupCard,
  inputAddForm,
  cardsPlace,
  elementTemplate,
  nameCard,
  urlCard,
  renderAppendCards,
  renderPrependCards,
  createCard,
} from "./components/card";

import {
  openPopup,
  closePopup,
  closeOverlay,
  inputEditForm,
  titleInput,
  inputAvatarForm,
  avatarInput,
  descriptionInput,
  inputProfile,
  inputDescription,
  urlAvatar,
  saveProfile,
  changeImage,
  handleProfileFormSubmit,
  handleAvatarFormSubmit,
} from "./components/modal";

import {
  disableButton,
  enableValidation,
  // saveButton,
  // addButton,
} from "./components/validate";
import {
  getAvatar,
  getCards,
  getUsers,
  postCards,
  patchProfile,
  patchAvatar,
} from "./components/api";

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
const submitButtons = document.querySelectorAll(".popup_save");

popupProfile.addEventListener("mousedown", closeOverlay);
popupCard.addEventListener("mousedown", closeOverlay);
popupImage.addEventListener("mousedown", closeOverlay);
popupAvatar.addEventListener("mousedown", closeOverlay);

//слушатели закрытия и открытия popup
popupEditButton.addEventListener("click", function () {
  openPopup(popupProfile);
});

popupAddButton.addEventListener("click", function () {
  openPopup(popupCard);
});
profileClose.addEventListener("click", function () {
  closePopup(popupProfile);
});
cardClose.addEventListener("click", function () {
  closePopup(popupCard);
});

imageClose.addEventListener("click", function () {
  closePopup(popupImage);
});

avatarClose.addEventListener("click", function () {
  closePopup(popupAvatar);
});

avatarOpen.addEventListener("click", function () {
  openPopup(popupAvatar);
});

//сброс submit

//Валидационные настройки
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__value",
  buttonSaveSelector: ".popup_save",
};

enableValidation(validationSettings);

let userId;

inputEditForm.addEventListener("submit", handleProfileFormSubmit);

inputAddForm.addEventListener("submit", handleCardsFormSubmit);

inputAvatarForm.addEventListener("submit", handleAvatarFormSubmit);

Promise.all([getCards(), getUsers()])
  .then(([allCards, userData]) => {
    userId = userData._id;
    inputProfile.textContent = userData.name;
    inputDescription.textContent = userData.about;
    titleInput.value = userData.name;
    descriptionInput.value = userData.about;
    urlAvatar.src = userData.avatar;
    allCards.forEach((item) => {
      renderAppendCards(createCard(item, userData));
    });
  })
  .catch((e) => console.log(e));

export { popupAvatar, popupProfile, userId, submitButtons, validationSettings };
