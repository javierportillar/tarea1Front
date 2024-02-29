import { useEffect, useState, useRef } from "react";
import './UserEdit.component.css'
import { EditUserButton } from "../editUserSend/EditUserSend";
import { useUserContext } from "../../../context/userContext.context";

export const UserEditComponent = ({ closeEditUserState }) => {

  const { selectedUser } = useUserContext();
  const [name, setName] = useState('');
  const [age, setAge] = useState();

  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  useEffect(() => {
    setName(selectedUser.name);
    setAge(selectedUser.age);
  }, [selectedUser])

  const sendData = () => {
    const data = {
      name: nameInputRef.current.value !== '' ? nameInputRef.current.value : selectedUser.name,
    age: ageInputRef.current.value !== '' ? Number(ageInputRef.current.value) : selectedUser.age
    }
    return data;
  }

  return (
    <div className='edit-user-window'>
      <div className='edit-user-inputs'>
        <button id='close-user-inputs' onClick={closeEditUserState}>X</button>
        <h2>Datos a cambiar de id: {selectedUser.id}</h2>
        <div className="name-input-change">
          <label>name:</label>
          <input type="text" placeholder={name} ref={nameInputRef} />
        </div>
        <div className="age-input-change">
          <label>age:</label>
          <input type="number" placeholder={age} ref={ageInputRef} />
        </div>
      </div>
      <EditUserButton selectedUser={selectedUser} sendData={sendData} closeEditUserState={closeEditUserState}/>
    </div>
  )
}
