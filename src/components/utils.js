import { saveAllButton } from "./validate";

function renderLoading(isLoading) {
  if (isLoading) {
    saveAllButton.forEach(function (element) {
      element.textContent = "Сохранение...";
    });
  } else {
    saveAllButton.forEach(function (element) {
      element.textContent = "Сохранить";
    });
  }
}

export { renderLoading };
