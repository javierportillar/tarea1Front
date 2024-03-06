import './UsersRow.component.css'
import { useUserContext } from "../../../context/userContext.context";

export const UsersRow = () => {

  const { loading, error, users, userChoosed, openEditUserState, openDeletUserState } = useUserContext();

  if (loading) {
    return (
      <tr>
        <td colSpan="4">Loading...</td>
      </tr>
    );
  }

  if (error) {
    return (
      <tr>
        <td colSpan="4">Error: {error}</td>
      </tr>
    );
  }

  const getUserFcn = (user, param) => {
    userChoosed(user,param);
  }

  return (
    users.map((user ) => (
      <tr key={user.id} className="user-row">
        <td>{user.name}</td>
        <td>{user.id}</td>
        <td>{user.age}</td>
        <td>
          <button className="user-button" onClick={() => {
            getUserFcn(user, 'edit');
          }}>Edit</button>
          <button className="user-button" onClick={() => {
            getUserFcn(user, 'delete');
          }}>Delete</button>
        </td>
      </tr>
    ))
  )
}
