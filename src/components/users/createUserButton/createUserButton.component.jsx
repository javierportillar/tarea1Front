
export const CreateUserButton = ({ handleSubmit, closeCreateNewUser }) => {
  return (
    <button onClick={() => {
      handleSubmit();
      closeCreateNewUser();
    }}>Guardar</button>
  )
}
