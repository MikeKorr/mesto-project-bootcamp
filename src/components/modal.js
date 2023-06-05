import { popupProfile } from "../../index";
const inputEditForm = document.forms.formEdit;
const titleInput = inputEditForm.inputNameEdit;
const descriptionInput = inputEditForm.inputDescriptionEdit;
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

inputEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  saveProfile(titleInput.value, descriptionInput.value);
  closeOpenButton(popupProfile);
});

export {
  closeOpenButton,
  closeOverlay,
  inputEditForm,
  titleInput,
  descriptionInput,
  inputProfile,
  inputDescription,
};
