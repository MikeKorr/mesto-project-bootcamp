import { popupProfile, popupAvatar } from "../../index";
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

function closeOpenButton(element) {
  element.classList.toggle("popup_opened");
}

//функция закрытия через ESC и оверлей
function escClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closeOpenButton(openedPopup);
  }
}

document.addEventListener("keydown", escClose);

//функция закрытия через overlay
function closeOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closeOpenButton(evt.target);
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

inputEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  renderLoading(true);
  patchProfile(titleInput.value, descriptionInput.value)
    .then((res) => {
      saveProfile(res.name, res.about);
      closeOpenButton(popupProfile);
      renderLoading(false);
    })
    .catch((err) => {
      console.log(err);
      renderLoading(false);
    });
});

inputAvatarForm.addEventListener("submit", function (event) {
  event.preventDefault();
  renderLoading(true);
  patchAvatar(avatarInput.value)
    .then((res) => {
      changeImage(res.avatar);
      closeOpenButton(popupAvatar);
      renderLoading(false);
    })
    .catch((err) => {
      console.log(err);
      renderLoading(false);
    });
});

export {
  closeOpenButton,
  closeOverlay,
  inputEditForm,
  inputAvatarForm,
  avatarInput,
  titleInput,
  descriptionInput,
  inputProfile,
  inputDescription,
  urlAvatar,
};
