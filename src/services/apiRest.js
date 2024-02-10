export const fetchApi = () => {
  return fetch("http://localhost:4400/users").then((response) => {
    return response.json();
  });
};
