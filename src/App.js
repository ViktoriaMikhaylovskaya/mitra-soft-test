import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ROUTE_LIST } from './constants.js';
import { GlobalStyle } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {ROUTE_LIST.map((el) => (
          <Route key={el.link} path={el.link} element={el.component} />
          ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
