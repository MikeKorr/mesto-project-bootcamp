import { inputAddForm } from "../components/card";
import { inputEditForm } from "../components/modal";

//Валидация

const saveButton = document.querySelector(".popup__save-button");
const addButton = document.querySelector(".popup__add-button");
const saveAllButton = document.querySelectorAll(".popup_save");

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
function enableButton(saveAllButton) {
  saveAllButton.disabled = false;
}

//функция деактивации кнопки
function disableButton(saveAllButton) {
  saveAllButton.disabled = true;
}

//функции кнопок при проверке валадиции
function checkValidForm(saveAllButton, form) {
  if (form.checkValidity()) {
    enableButton(saveAllButton);
  } else {
    disableButton(saveAllButton);
  }
}

//слушатели импутов

// inputList.forEach(function (input) {
//   formValidCheck(saveAllButton, inputAddForm);
//   input.addEventListener("input", function () {
//     validCheck(input);
//     formValidCheck(saveAllButton, inputAddForm);
//   });
// });

// inputList.forEach(function (input) {
//   formValidCheck(saveAllButton, inputEditForm);
//   input.addEventListener("input", function () {
//     validCheck(input);
//     formValidCheck(saveAllButton, inputEditForm);
//   });
// });

function setEventListeners(form, settings) {
  const inputList = form.querySelectorAll(settings.inputSelector);
  const saveAllButton = form.querySelector(settings.buttonSaveSelector);
  checkValidForm(saveAllButton, form);
  inputList.forEach(function (input) {
    input.addEventListener("input", function () {
      checkValid(input);
      checkValidForm(saveAllButton, form);
    });
  });
}

export function enableValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach(function (form) {
    setEventListeners(form, settings);
  });
}

export { disableButton, saveAllButton, saveButton, addButton };
