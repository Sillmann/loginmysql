import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './loginmysql/pages/Login';
import Menu from './loginmysql/pages/Menu';
import Setting from './loginmysql/pages/Setting';
import './global.css'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;