import { checkResponse } from "./utils";

const config = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-9",
  headers: {
    authorization: "b6d493d9-9d15-4534-b3ca-8c1e45e1565f",
    "Content-Type": "application/json",
  },
};

function postCards(name, url) {
  return fetch(config.baseUrl + `${"/cards"}`, {
    headers: config.headers,
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: url,
    }),
  }).then(checkResponse);
}

function getCards() {
  return fetch(config.baseUrl + `${"/cards"}`, {
    headers: config.headers,
    method: "GET",
  }).then(checkResponse);
}

function patchProfile(name, about) {
  return fetch(config.baseUrl + `${"/users/me"}`, {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(checkResponse);
}

function patchAvatar(url) {
  return fetch(config.baseUrl + `${"/users/me/avatar"}`, {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: url,
    }),
  }).then(checkResponse);
}

function getUsers() {
  return fetch(config.baseUrl + `${"/users/me"}`, {
    headers: config.headers,
    method: "GET",
  }).then(checkResponse);
}

function deleteCards(cardId) {
  return fetch(config.baseUrl + `${"/cards/"}` + cardId, {
    headers: config.headers,
    method: "DELETE",
  }).then(checkResponse);
}

function putLike(cardId) {
  return fetch(config.baseUrl + `${"/cards/likes/"}` + cardId, {
    headers: config.headers,
    method: "PUT",
  }).then(checkResponse);
}

function deleteLike(cardId) {
  return fetch(config.baseUrl + `${"/cards/likes/"}` + cardId, {
    headers: config.headers,
    method: "DELETE",
  }).then(checkResponse);
}

export {
  postCards,
  getCards,
  patchProfile,
  patchAvatar,
  getUsers,
  deleteCards,
  deleteLike,
  putLike,
};
