
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addscanning from './components/Addscanning/Addscanning';
import Adlogin from './Admin/Adlogin';
import Editscanning from './components/Editscanning/Editscanning';
import ViewScanning from './components/Viewscanning/Viewscanning';
import Adregister from './Admin/Adregister';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path={'/signin'} element={<Adlogin/>}></Route> 
      <Route path={'/addscan'} element={<Addscanning />}></Route>
      <Route path={'/signup'} element={<Adregister />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
