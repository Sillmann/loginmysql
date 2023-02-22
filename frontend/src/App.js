import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './loginmysql/pages/Login';
import Menu from './loginmysql/pages/Menu';
import Setting from './loginmysql/pages/Setting';

function App() {
  return (
    <div className="App">

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