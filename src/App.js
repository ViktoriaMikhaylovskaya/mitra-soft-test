import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from './pages/Main/index.jsx';
import AboutMe from './pages/AboutMe/index.jsx';
import User from './pages/User/index.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/aboutMe'} element={<AboutMe />} />
        <Route path={'/user/:id'} element={<User />} />

        <Route path='*' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
