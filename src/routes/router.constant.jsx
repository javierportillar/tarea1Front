import Home from '../pages/Home'
import UsersPage from '../pages/Home'

export const PageRoutes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path:'/users',
    component: UsersPage,
    exact: false
  }
];