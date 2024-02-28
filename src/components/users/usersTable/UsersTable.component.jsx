import './UsersTable.component.css'
import { UsersRow } from "../usersRow/UsersRow.component";

export const UsersTable = ({ openEditUserState, openDeletUserState }) => {

  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>id</td>
            <td>age</td>
            <td>options</td>
          </tr>
        </thead>
        <tbody>
          <UsersRow openEditUserState={openEditUserState} openDeletUserState={openDeletUserState} />
        </tbody>
      </table>
    </div>
  );
};