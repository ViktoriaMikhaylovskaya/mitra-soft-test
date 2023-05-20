import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from './pages/Main/index.jsx';
import UserInfo from './pages/UserInfo/index.jsx';
import UserDetails from './pages/UserDetails/index.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/user'} element={<UserInfo />} />
        <Route path={'/details'} element={<UserDetails />} />

        <Route path='*' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
