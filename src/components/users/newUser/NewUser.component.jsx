import { useRef, useState } from 'react'
import './NewUser.component.css'
import { CreateUserButton } from '../createUserButton/createUserButton.component'
import { useCreateUser } from '../../../hooks/useUser.hook'

export const NewUser = ({ closeNewUser }) => {

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const [userData, setUserData] = useState({});
  const { loading, error } = useCreateUser(userData);
  const handleSubmit = () => {
    const data = {
      name: nameRef.current.value,
      age: Number(ageRef.current.value)
    }
    setUserData(data);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='new-user-window'>
      <div className='new-user-inputs'>
        <button id='close-user-inputs' onClick={closeNewUser}>X</button>
        <h2>Escriba la información del nuevo usuario</h2>
        <input type="text" placeholder="Nombre" ref={nameRef} />
        <input type="number" placeholder="Edad" ref={ageRef} />
        <CreateUserButton handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}
