import { useEffect, useState } from "react";
import { useUsers } from "../../../hooks/useUser.hook";
import './UsersRow.component.css'

export const UsersRow = () => {
  const { loading, error, data } = useUsers();

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

    return (
      data.map((user, index) => (
        <tr key={index} className="user-row">
          <td>{user.name}</td>
          <td>{user.id}</td>
          <td>{user.age}</td>
        </tr>
      ))
    )
  
}
