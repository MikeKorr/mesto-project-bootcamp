const config = {
  baseUrl: "https://nomoreparties.co/v1/cohort-9",
  headers: {
    authorization: "b6d493d9-9d15-4534-b3ca-8c1e45e1565f",
    "Content-Type": "application/json",
  },
};

function postCards(name, url) {
  return fetch("https://nomoreparties.co/v1/wbf-cohort-9/cards", {
    headers: config.headers,
    method: "POST",
    body: JSON.stringify({
      name: name,
      link: url,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function getCards() {
  return fetch("https://nomoreparties.co/v1/wbf-cohort-9/cards", {
    headers: config.headers,
    method: "GET",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function patchProfile(name, about) {
  return fetch("https://nomoreparties.co/v1/wbf-cohort-9/users/me", {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function patchAvatar(url) {
  return fetch("https://nomoreparties.co/v1/wbf-cohort-9/users/me/avatar", {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: url,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function getUsers() {
  return fetch("https://nomoreparties.co/v1/wbf-cohort-9/users/me", {
    headers: config.headers,
    method: "GET",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function deleteCards(cardId) {
  return fetch("https://nomoreparties.co/v1/wbf-cohort-9/cards/" + cardId, {
    headers: config.headers,
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function putLike(cardId) {
  return fetch(
    "https://nomoreparties.co/v1/wbf-cohort-9/cards/likes/" + cardId,
    {
      headers: config.headers,
      method: "PUT",
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

function deleteLike(cardId) {
  return fetch(
    "https://nomoreparties.co/v1/wbf-cohort-9/cards/likes/" + cardId,
    {
      headers: config.headers,
      method: "DELETE",
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
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
