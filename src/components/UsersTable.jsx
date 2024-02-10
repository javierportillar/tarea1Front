import { useEffect, useState } from "react"
import { fetchApi } from '../services/apiRest'

export const UsersTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchApi()
    .then(data=>setData(data));
  }, [])

  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>id</td>
            <td>age</td>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.id}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
