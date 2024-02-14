const url = 'http://localhost:4400/users'

export const useUsersService = () => {
  return fetch(url).then(datos => datos.json())
}
