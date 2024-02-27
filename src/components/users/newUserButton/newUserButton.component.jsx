import './newUserButton.component.css'
export const NewUserButton = ({openCreateNewUserDiv}) => {
  
  return (
    <div className="new-user-button">
      <button onClick={openCreateNewUserDiv}>Agregar Nuevo Usuario</button>
    </div>
  )
}
