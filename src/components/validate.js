import { inputAddForm } from "../components/card";
import { inputEditForm, inputAvatarForm } from "../components/modal";
import { submitButton } from "..";
//Валидация

// const saveButton = document.querySelector(".popup__save-button");
// const addButton = document.querySelector(".popup__add-button");
// const submitButton = form.querySelector(settings.buttonSaveSelector);

//функция, показывающая ошибку
function showError(input, errorMessage) {
  const spanId = `error-${input.id}`;
  const errorField = document.getElementById(spanId);
  errorField.textContent = errorMessage;
}

//функция, скрывающая ошибку
function hideError(input) {
  const spanId = `error-${input.id}`;
  const errorField = document.getElementById(spanId);
  errorField.textContent = "";
}

// функция проверки валидации
function checkValid(input) {
  if (input.validity.valid) {
    hideError(input);
  } else {
    showError(input, input.validationMessage);
  }
}

// функия активной кнопки
function enableButton(submitButton) {
  submitButton.disabled = false;
}

//функция деактивации кнопки
function disableButton(submitButton) {
  submitButton.disabled = true;
}

//функции кнопок при проверке валадиции
function checkValidForm(submitButton, form) {
  if (form.checkValidity()) {
    enableButton(submitButton);
  } else {
    disableButton(submitButton);
  }
}

function setEventListeners(form, settings) {
  const inputList = form.querySelectorAll(settings.inputSelector);
  const submitButton = form.querySelector(settings.buttonSaveSelector);
  checkValidForm(submitButton, form);
  inputList.forEach(function (input) {
    input.addEventListener("input", function () {
      checkValid(input);
      checkValidForm(submitButton, form);
    });
  });
}

export function enableValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach(function (form) {
    setEventListeners(form, settings);
  });
}

export { disableButton /*saveButton, addButton*/ };
