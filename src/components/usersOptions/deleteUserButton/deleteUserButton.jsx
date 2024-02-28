export const DeleteUserButton = ({ selectedUser, deleteUser, closeDeletUserState }) => {

  const sendDeleteRequest = () => {
    closeDeletUserState();
    deleteUser(selectedUser.id);
  }
  return (
    <button onClick={sendDeleteRequest}>Confirmar</button>
  )
}
