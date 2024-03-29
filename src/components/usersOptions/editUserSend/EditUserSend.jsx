import { useState, useEffect } from 'react';
import { useUserContext } from '../../../context/userContext.context';
import './EditUserSend.css';

export const EditUserButton = ({ selectedUser, sendData }) => {

  const {updateUser, closeEditUserState} = useUserContext();
  const [id, setId] = useState('');

  useEffect(()=>{
    setId(selectedUser.id);
  },[])

  const sendPutRequest = () => {
    updateUser(id,sendData());
    closeEditUserState();
  }

  return (
    <div className='send-edit-user'>
      <button onClick={sendPutRequest}>Send</button>
    </div>
  )
}
