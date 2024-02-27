import { useState } from "react";
import { UsersTable } from "../components/users/usersTable/UsersTable.component";
import { NewUserButton } from "../components/users/newUserButton/newUserButton.component";
import { NewUser } from "../components/users/newUser/NewUser.component";
import { UserProvider } from "../context/userContext.context";
import { UserEditComponent } from "../components/usersOptions/userEdit/UserEdit.component";
import './usersHome.page.css';

export const UsersHomePage = () => {

  const [addUserState, setAddUserState] = useState(false);
  const [editUserState, setEditUserState] = useState(false);
  const [deletUserState, setDeletUserState] = useState(false);

  const openEditUserState = () => {
    setEditUserState(true);
  }

  const closeEditUserState = () => {
    setEditUserState(false);
  }

  const openDeletUserState = () => {
    
  }

  const closeDeletUserState = () => {

  }


  const openCreateNewUserDiv = () => {
    setAddUserState(true);
  }

  const closeCreateNewUser = () => {
    setAddUserState(false);
  }

  return (
    <div className="user-page">
      <h1 className="user-tittle">Los usuarios son los siguientes:</h1>
      <UserProvider>
        <UsersTable openEditUserState={openEditUserState} />
        <NewUserButton openCreateNewUserDiv={openCreateNewUserDiv} />
        {addUserState && (<NewUser closeCreateNewUser={closeCreateNewUser} />)}
        {editUserState && (<UserEditComponent closeEditUserState = {closeEditUserState}/>)}
      </UserProvider>
    </div>
  )
}