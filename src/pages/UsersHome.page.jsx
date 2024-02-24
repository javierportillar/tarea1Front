import { useState } from "react"
import { UsersTable } from "../components/users/usersTable/UsersTable.component"
import { NewUserButton } from "../components/users/newUserButton/newUserButton.component"
import { NewUser } from "../components/users/newUser/NewUser.component"
import './usersHome.page.css'

export const UsersHomePage = () => {

  const [addUserState, setAddUserState] = useState(false);

  const openCreateNewUserDiv = () => {
    setAddUserState(true);
  }

  const closeCreateNewUser = ()=>{
    setAddUserState(false);
  }

  return (
    <div className="user-page">
      <h1 className="user-tittle">Los usuarios son los siguientes:</h1>
      <UsersTable />
      <NewUserButton openCreateNewUserDiv={openCreateNewUserDiv} />
      {addUserState && (<NewUser closeCreateNewUser={closeCreateNewUser} />)}
    </div>
  )
}