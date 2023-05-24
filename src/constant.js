import Main from './pages/Main/index.jsx';
import AboutMe from './pages/AboutMe/index.jsx';
import User from './pages/User/index.jsx'; 

export const ROUTE_LIST = [
  {
    link: '/',
    component: <Main />,
  },
  {
    link: '/aboutMe',
    component: <AboutMe />,
  },
  {
    link: '/user/:id',
    component: <User />,
  },
  {
    link: '*',
    component: <Main />,
  },
]