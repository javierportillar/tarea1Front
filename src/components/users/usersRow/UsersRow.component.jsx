import './UsersRow.component.css'
import { useUserContext } from "../../../context/userContext.context";

export const UsersRow = () => {
  const { loading, error, users } = useUserContext();

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
    users.map((user, index) => (
      <tr key={index} className="user-row">
        <td>{user.name}</td>
        <td>{user.id}</td>
        <td>{user.age}</td>
        <td>
          <button className="user-button">Edit</button>
          <button className="user-button">Delete</button>
          </td>
      </tr>
    ))
  )

}
