import {UsersHomePage} from '../pages/UsersHome.page'
import { Navigate } from 'react-router-dom';

export const PageRoutes = [
  {
    path: '/',
    element: <Navigate to="/users" />,
  },
  {
    path:'/users',
    element: <UsersHomePage/>,
  }
];