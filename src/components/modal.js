import { popupProfile, popupAvatar, validationSettings } from "../index";
import { renderLoading } from "./utils";
import { patchAvatar, patchProfile, getUsers, getAvatar } from "./api";
const inputEditForm = document.forms.formEdit;
const inputAvatarForm = document.forms.avatarChange;
const avatarInput = inputAvatarForm.inputAvatarChange;
const titleInput = inputEditForm.inputNameEdit;
const descriptionInput = inputEditForm.inputDescriptionEdit;
const urlAvatar = document.querySelector(".profile__avatar-ellipse");
const inputProfile = document.querySelector(".profile__title");
const inputDescription = document.querySelector(".profile__subtitle");

function closePopup(element) {
  element.classList.remove("popup_opened");
}

function openPopup(element) {
  element.classList.add("popup_opened");
}

//функция закрытия через ESC и оверлей
function escClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

document.addEventListener("keydown", escClose);

//функция закрытия через overlay
function closeOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}

//функция/кнопка сохранения изменений профиля в input
function saveProfile(titleValue, descriptionValue) {
  inputProfile.textContent = titleValue;
  inputDescription.textContent = descriptionValue;
}

function changeImage(url) {
  urlAvatar.src = url;
}

//функция сабмита профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  evt.submitter.textContent = "Сохранение...";
  patchProfile(titleInput.value, descriptionInput.value)
    .then((res) => {
      saveProfile(res.name, res.about);
      closePopup(popupProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      evt.submitter.textContent = "Сохранить";
    });
}

//сабмит аватара
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  evt.submitter.textContent = "Сохранение...";
  patchAvatar(avatarInput.value)
    .then((res) => {
      changeImage(res.avatar);
      evt.target.reset();
      evt.submitter.disabled = true;
      evt.submitter.classList.add(validationSettings.buttonSaveSelector);
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      evt.submitter.textContent = "Сохранить";
    });
}

export {
  handleAvatarFormSubmit,
  handleProfileFormSubmit,
  saveProfile,
  closePopup,
  openPopup,
  closeOverlay,
  inputEditForm,
  inputAvatarForm,
  avatarInput,
  titleInput,
  descriptionInput,
  inputProfile,
  inputDescription,
  urlAvatar,
  changeImage,
};
