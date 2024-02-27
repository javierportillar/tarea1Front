import { useEffect, useState } from 'react';
import './UsersRow.component.css'
import { useUserContext } from "../../../context/userContext.context";

export const UsersRow = ({ openEditUserState }) => {

  const { loading, error, users, userChoosed } = useUserContext();

  if (loading) {
    return (
      <tr>
        <td colSpan="3">Loading...</td>
      </tr>
    );
  }

  if (error) {
    return (
      <tr>
        <td colSpan="3">Error: {error}</td>
      </tr>
    );
  }

  const getUserFcn = (user) => {
      userChoosed(user);
      openEditUserState();
  }

  return (
    users.map((user, index) => (
      <tr key={index} className="user-row">
        <td>{user.name}</td>
        <td>{user.id}</td>
        <td>{user.age}</td>
        <td>
          <button className="user-button" onClick={() => {
            getUserFcn(user);
          }}>Edit</button>
          <button className="user-button">Delete</button>
        </td>
      </tr>
    ))
  )
}
