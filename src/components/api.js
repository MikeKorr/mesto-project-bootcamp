function setCards(name, url) {
  return fetch("https://nomoreparties.co/v1/cohort-9/cards", {
    headers: {
      authorization: "b6d493d9-9d15-4534-b3ca-8c1e45e1565f",
    },
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

function getCards(name, url) {
  return fetch("https://nomoreparties.co/v1/cohort-9/cards", {
    headers: {
      authorization: "b6d493d9-9d15-4534-b3ca-8c1e45e1565f",
    },
    method: "GET",
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

export { setCards, getCards };
