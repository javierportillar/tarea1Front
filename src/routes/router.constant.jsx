import {Home} from '../pages/Home'
import {UsersPage} from '../pages/UsersPage'

export const PageRoutes = [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path:'/users',
    element: <UsersPage/>,
  }
];