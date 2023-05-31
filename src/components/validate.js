import { inputAddForm } from "../components/card";
import { inputEditForm } from "../components/modal";

//Валидация

const inputList = document.querySelectorAll(".popup__value");
const saveButton = document.querySelector(".popup__save-button");
const addButton = document.querySelector(".popup__add-button");
const saveAllButton = document.querySelectorAll(".popup_save");

export { saveAllButton, inputList, saveButton, addButton };

//функция, показывающая ошибку
function errorShow(input, errorMessage) {
  const spanId = `error-${input.id}`;
  const errorField = document.getElementById(spanId);
  errorField.textContent = errorMessage;
}

//функция, скрывающая ошибку
function errorHide(input) {
  const spanId = `error-${input.id}`;
  const errorField = document.getElementById(spanId);
  errorField.textContent = "";
}

// функция проверки валидации
function validCheck(input) {
  if (input.validity.valid) {
    errorHide(input);
  } else {
    errorShow(input, input.validationMessage);
  }
}

// функия активной кнопки
function buttonEnable(saveAllButton) {
  saveAllButton.disabled = false;
}

//функция деактивации кнопки
function buttonDisable(saveAllButton) {
  saveAllButton.disabled = true;
}

//функции кнопок при проверке валадиции
function formValidCheck(saveAllButton, form) {
  if (form.checkValidity()) {
    buttonEnable(saveAllButton);
  } else {
    buttonDisable(saveAllButton);
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
  formValidCheck(saveAllButton, form);
  inputList.forEach(function (input) {
    input.addEventListener("input", function () {
      validCheck(input);
      formValidCheck(saveAllButton, form);
    });
  });
}

export function enableValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach(function (form) {
    setEventListeners(form, settings);
  });
}
