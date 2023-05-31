import { popupProfile } from "../../index";
const inputEditForm = document.forms.formEdit;
const titleInput = inputEditForm.inputNameEdit;
const descriptionInput = inputEditForm.inputDescriptionEdit;
const inputProfile = document.querySelector(".profile__title");
const inputDescription = document.querySelector(".profile__subtitle");

export {
  buttonOpenClose,
  overlayClose,
  inputEditForm,
  titleInput,
  descriptionInput,
  inputProfile,
  inputDescription,
};

function buttonOpenClose(element) {
  element.classList.toggle("popup_opened");
}

//функция закрытия через ESC и оверлей
function escClose(evt) {
  const openedPopup = document.querySelector(".popup_opened"); //локальное объявление, так как при глобальном перестает работать
  if (evt.key === "Escape") {
    buttonOpenClose(openedPopup);
  }
}

document.addEventListener("keydown", escClose);

//функция закрытия через overlay
function overlayClose(evt) {
  const openedPopup = document.querySelector(".popup_opened"); //локальное объявление, так как при глобальном перестает работать
  if (evt.target.classList.contains("popup")) {
    buttonOpenClose(openedPopup);
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
  titleInput.value = titleInput.value;
  descriptionInput.value = descriptionInput.value;
  buttonOpenClose(popupProfile);
});
