import { useUserContext } from "../../../context/userContext.context";

export const CreateUserButton = ({ handleSubmit }) => {
  const {closeCreateNewUser} = useUserContext();
  return (
    <button onClick={() => {
      handleSubmit();
      closeCreateNewUser();
    }}>Guardar</button>
  )
}
