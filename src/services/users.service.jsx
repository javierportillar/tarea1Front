const url = 'http://localhost:4400/users/'

export const fetchUsersService = () => {
  return fetch(url).then(datos => datos.json())
}

export const updateUserService = (id, userData) => {
  const urlFetch = url+id;
  return fetch(urlFetch,{
    method: 'PUT',
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

export const deleteUserService = (id) => {
  const urlFetch = url + id;
  return fetch(urlFetch, { method: 'DELETE' })
}