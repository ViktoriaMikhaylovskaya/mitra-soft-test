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

export const SORTING = {
    DEFAULT: 'default',
    ASC: 'asc',
    DESC: 'desc',
}

export const ELEMENTS_PER_STEP = 5;