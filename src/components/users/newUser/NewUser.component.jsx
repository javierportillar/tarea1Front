import './NewUser.component.css'
import { CreateUserButton } from '../createUserButton/createUserButton.component'

export const NewUser = ({closeNewUser}) => {
  return (
    <div className='new-user-window'>
      <div className='new-user-inputs'>
        <button id='close-user-inputs' onClick={closeNewUser}>X</button>
        <h2>Escriba la información del nuevo usuario</h2>
        <input type="text" placeholder="Nombre" />
        <input type="number" placeholder="Edad" />
        <CreateUserButton/>
      </div>
    </div>
  )
}
