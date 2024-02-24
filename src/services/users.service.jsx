const url = 'http://localhost:4400/users'

export const fetchUsersService = () => {
  return fetch(url).then(datos => datos.json())
}

export const createUserService = (userData) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error("Error in fetch: ", error);
    throw error;
  });
};

