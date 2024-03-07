import './deleteUser.component.css'
import { useUserContext } from '../../../context/userContext.context'
import { DeleteUserButton } from '../deleteUserButton/deleteUserButton';

export const DeleteUser = ({ }) => {

  const { selectedUser, deleteUser, closeDeletUserState } = useUserContext();


  return (
    <div className='delete-user-window'>
      <div className='delete-user'>
        <button id='close-user-inputs' onClick={closeDeletUserState}>X</button>
        <h1>la información de _ se eliminará permanentemente</h1>
        <div className='info-user-delete'>
          <h2>información del usuario:</h2>
          <p>id:{selectedUser.id}</p>
          <p>name:{selectedUser.name}</p>
          <p>age:{selectedUser.age}</p>
        </div>
        <h2>¿Está segur@ que desea confirmar los cambios?</h2>
        <DeleteUserButton selectedUser={selectedUser} deleteUser={deleteUser}/>
      </div>
    </div>
  )
}
