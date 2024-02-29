import { useRef, useState } from 'react'
import './NewUser.component.css'
import { CreateUserButton } from '../createUserButton/createUserButton.component'
import { useUserContext } from '../../../context/userContext.context'

export const NewUser = ({ closeCreateNewUser }) => {

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const { loading, error, createUser } = useUserContext();

  const handleSubmit = () => {
    const data = {
      name: nameRef.current.value,
      age: Number(ageRef.current.value)
    }
    if (data.name === "" || data.age === null) {
      alert('El nombre o edad deben tener un valor, no pueden ir vacios')
    } else {
      createUser(data);
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='new-user-window'>
      <div className='new-user-inputs'>
        <button id='close-user-inputs' onClick={closeCreateNewUser}>X</button>
        <h2>Escriba la información del nuevo usuario</h2>
        <input type="text" placeholder="Nombre" ref={nameRef} />
        <input type="number" placeholder="Edad" ref={ageRef} />
        <CreateUserButton handleSubmit={handleSubmit} closeCreateNewUser={closeCreateNewUser} />
      </div>
    </div>
  )
}
