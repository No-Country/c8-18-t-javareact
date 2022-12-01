import Category from '../routes/Category/Category';
import Home from '../routes/Home/Home';
import NotFound from '../routes/NotFound/NotFound';
import Login from '../routes/Signin/Signin';
import Signup from '../routes/Signup/Signup';

export const menu = [
  {
    path: '/',
    exact: true,
    element: Home,
  },
  {
    path: '/signin',
    exact: true,
    element: Login,
  },
  {
    path: '/signup',
    exact: true,
    element: Signup,
  },
  {
    path: '/category',
    exact: true,
    element: Category,

  },
  {
    path: '*',
    element: NotFound,
  },
];
