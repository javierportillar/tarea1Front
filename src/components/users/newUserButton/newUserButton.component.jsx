import { useUserContext } from '../../../context/userContext.context'
import './newUserButton.component.css'
export const NewUserButton = () => {

  const {openCreateNewUserDiv} = useUserContext();
  
  return (
    <div className="new-user-button">
      <button onClick={openCreateNewUserDiv}>Agregar Nuevo Usuario</button>
    </div>
  )
}
