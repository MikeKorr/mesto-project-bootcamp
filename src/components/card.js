import {
  postCards,
  getCards,
  deleteCards,
  deleteLike,
  putLike,
  getUsers,
} from "./api";
import { renderLoading } from "./utils";
import { userId } from "../../index";
const popupImage = document.querySelector(".popup__image-container");
const popupCard = document.querySelector(".popup__card");
const inputAddForm = document.forms.formAdd;
const cardsPlace = document.querySelector(".element");
const elementTemplate = document.querySelector("#element-template").content;
const nameCard = inputAddForm.inputAddName;
const urlCard = inputAddForm.inputAddUrl;

function closeOpenButton(element) {
  element.classList.toggle("popup_opened");
}

//функция отображения лайков

function handleLikeButton(item, elem) {
  const queryMetod = item.isLiked ? deleteLike(item._id) : putLike(item._id);
  queryMetod
    .then((res) => {
      item.isLiked = isLiked(res.likes);
      counterLikes(
        res.likes,
        elem.querySelector(".element__button"),
        elem.querySelector(".element__like-number")
      );
    })
    .catch((e) => console.log(e));
}

function isLiked(likesArray) {
  return likesArray.some((item) => item._id === userId);
}

function counterLikes(likesArray, likeButton, likeCounter) {
  likeButton.classList.toggle("element__button_active", isLiked(likesArray));
  likeCounter.textContent = likesArray.length;
}

//функция удаления карточки

function handleTrashButton(element) {
  element.remove();
}

//функции передачи изображения
function changeImageContainer(event) {
  closeOpenButton(popupImage);
  document.querySelector(".popup__card-image").src = event.target.src;
  document.querySelector(".popup__card-image").alt = event.target.alt;
  document.querySelector(".popup__figure-caption").textContent =
    event.target.alt;
}

//функция рендринга
function renderPrependCards(element) {
  cardsPlace.prepend(element);
}

function renderAppendCards(element) {
  cardsPlace.append(element);
}
//функция добавления карточек
function createCard(cardData, args) {
  cardData.isLiked = isLiked(cardData.likes);
  const elementContainer = elementTemplate
    .querySelector(".element__container")
    .cloneNode(true);
  const likeButtonCard = elementContainer.querySelector(".element__button");
  const likesNumber = elementContainer.querySelector(".element__like-number");
  counterLikes(cardData.likes, likeButtonCard, likesNumber);
  const trashButtonCard = elementContainer.querySelector(
    ".element__trash-button"
  );
  if (cardData.owner && args) {
    if (cardData.owner._id !== args._id) {
      trashButtonCard.remove();
    } else {
      trashButtonCard.addEventListener("click", function () {
        deleteCards(cardData._id).then(() => {
          handleTrashButton(elementContainer);
        });
      });
    }
  }
  likeButtonCard.addEventListener("click", () =>
    handleLikeButton(cardData, elementContainer)
  );
  trashButtonCard.addEventListener("click", function () {
    handleTrashButton(elementContainer);
  });
  const elementImage = elementContainer.querySelector(".element__image");
  elementImage.addEventListener("click", changeImageContainer);
  elementContainer.querySelector(".element__text").textContent = cardData.name;
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  return elementContainer;
}

inputAddForm.addEventListener("submit", function (event) {
  event.preventDefault();
  renderLoading(true);
  postCards(nameCard.value, urlCard.value)
    .then((res) => {
      renderPrependCards(createCard(res));
      closeOpenButton(popupCard);
      renderLoading(false);
    })
    .then(getCards)
    .catch((err) => {
      console.log(err);
      renderLoading(false);
    });
});

export {
  popupImage,
  popupCard,
  inputAddForm,
  cardsPlace,
  elementTemplate,
  nameCard,
  urlCard,
  renderAppendCards,
  createCard,
};
