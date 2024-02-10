export const fetchApi = () => {
  return fetch("http://localhost:4400/users")
    .catch(err => console.log(err))
    .then((response) => {
      return response.json();
    });
};