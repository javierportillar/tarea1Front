import { useUserContext } from "../../../context/userContext.context";

export const DeleteUserButton = ({ selectedUser, deleteUser }) => {
  const { closeDeletUserState } = useUserContext();
  const sendDeleteRequest = () => {
    closeDeletUserState();
    deleteUser(selectedUser.id);
  }
  return (
    <button onClick={sendDeleteRequest}>Confirmar</button>
  )
}
