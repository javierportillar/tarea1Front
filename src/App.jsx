import './App.css'
import { RouterC } from './routes/router.component'
import { UserProvider } from "./context/userContext.context";
function App() {

  return (
    <>
      <UserProvider>
        <RouterC />
      </UserProvider>
    </>
  )
}

export default App
