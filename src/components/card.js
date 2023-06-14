import {
  postCards,
  getCards,
  deleteCards,
  deleteLike,
  putLike,
  getUsers,
} from "./api";
import { renderLoading } from "./utils";
import { userId, validationSettings } from "../index";
import { openPopup, closePopup } from "./modal";
const popupImage = document.querySelector(".popup__image-container");
const popupCard = document.querySelector(".popup__card");
const cardImage = document.querySelector(".popup__card-image");
const cardCaption = document.querySelector(".popup__figure-caption");
const inputAddForm = document.forms.formAdd;
const cardsPlace = document.querySelector(".element");
const elementTemplate = document.querySelector("#element-template").content;
const nameCard = inputAddForm.inputAddName;
const urlCard = inputAddForm.inputAddUrl;

//функция отображения лайков

function handleLikeButton(item, elem) {
  const queryMetod = item.isLiked ? deleteLike(item._id) : putLike(item._id);
  queryMetod
    .then((res) => {
      item.isLiked = isLiked(res.likes);
      setCounterLikes(
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

function setCounterLikes(likesArray, likeButton, likeCounter) {
  likeButton.classList.toggle("element__button_active", isLiked(likesArray));
  likeCounter.textContent = likesArray.length;
}

//функция удаления карточки

function handleTrashButton(element) {
  element.remove();
}

//функции передачи изображения
function changeImageContainer(event) {
  openPopup(popupImage);
  cardImage.src = event.target.src;
  cardImage.alt = event.target.alt;
  cardCaption.textContent = event.target.alt;
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
  setCounterLikes(cardData.likes, likeButtonCard, likesNumber);
  const trashButtonCard = elementContainer.querySelector(
    ".element__trash-button"
  );
  if (cardData.owner && args) {
    if (cardData.owner._id !== args._id) {
      trashButtonCard.remove();
    } else {
      trashButtonCard.addEventListener("click", function () {
        deleteCards(cardData._id)
          .then(() => {
            handleTrashButton(elementContainer);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }
  likeButtonCard.addEventListener("click", () =>
    handleLikeButton(cardData, elementContainer)
  );

  const elementImage = elementContainer.querySelector(".element__image");
  elementImage.addEventListener("click", changeImageContainer);
  elementContainer.querySelector(".element__text").textContent = cardData.name;
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  return elementContainer;
}

//функция сабмита карточки
function handleCardsFormSubmit(evt) {
  evt.preventDefault();
  evt.submitter.textContent = "Сохранение...";
  postCards(nameCard.value, urlCard.value)
    .then((res) => {
      renderPrependCards(createCard(res, res.owner));
      evt.target.reset();
      evt.submitter.disabled = true;
      evt.submitter.classList.add(validationSettings.buttonSaveSelector);
      closePopup(popupCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      evt.submitter.textContent = "Сохранить";
    });
}

export {
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
};
