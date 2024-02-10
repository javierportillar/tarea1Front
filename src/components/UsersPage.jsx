import { UsersTable } from "./UsersTable"

export const UsersPage = () => {
  return (
    <div className="user-page">
      <h1 className="user-tittle">Los usuarios son los siguientes:</h1>
      <UsersTable/>
    </div>
  )
}
