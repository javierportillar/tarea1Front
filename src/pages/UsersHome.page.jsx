import { UsersTable } from "../components/users/usersTable/UsersTable.component";
import { NewUserButton } from "../components/users/newUserButton/newUserButton.component";
import { NewUser } from "../components/users/newUser/NewUser.component";
import { useUserContext } from "../context/userContext.context";
import { UserEditComponent } from "../components/usersOptions/userEdit/userEdit.component";
import { DeleteUser } from "../components/usersOptions/userDelete/deleteUser.component";
import './usersHome.page.css';

export const UsersHomePage = () => {

  const { addUserState, editUserState, deletUserState } = useUserContext();

  return (
    <div className="user-page">
      <h1 className="user-tittle">Los usuarios son los siguientes:</h1>
      <UsersTable />
      <NewUserButton />
      {addUserState && (<NewUser />)}
      {editUserState && (<UserEditComponent />)}
      {deletUserState && (<DeleteUser />)}
    </div>
  )
}