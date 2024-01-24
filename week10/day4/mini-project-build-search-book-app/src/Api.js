
export const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  };

export const getBooks = (word) => {
    return fetch(`${BASE_URL}?q=${word}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    })
        .then(checkResponse)
  };