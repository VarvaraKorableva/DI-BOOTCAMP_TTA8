export const BASE_URL = '//localhost:3001';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else if (res.status === 500) {
    return Promise.reject(res.status);
  } else {
    return res.json()
      .then(data => {
        const errorMessage = data.error || "Unknown error";
        return Promise.reject(errorMessage);
      });
  }
}

export const register = ({ firstName, lastName, email, username, password }) => {
    return fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName:lastName, 
        email: email, 
        username: username, 
        password: password,
      })
    })
    .then((res) => {
      console.log(res);
      return checkResponse(res);
    })
    .catch((error) => {
      console.error('Error when sending a request:', error);
      throw error;
    });
  };

export const authorize = ( {username, password} ) => {
    return fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          username: username,
          password: password, 
        })
    })
        .then(checkResponse)
};  