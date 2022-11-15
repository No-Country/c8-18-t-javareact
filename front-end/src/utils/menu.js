import Category from '../routes/Category/Category';
import Home from '../routes/Home/Home';
import MyCar from '../routes/MyCar/MyCar';
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
    path: '/:slug',
    exact: true,
    element: Category,

  },
  {
    path: '/car',
    exact: true,
    element: MyCar,

  },
  {
    path: '*',
    element: NotFound,
  },
];
