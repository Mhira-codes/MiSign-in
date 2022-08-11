
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login/>} path="/" />
        <Route element={<Signup />} path="/signup" />
      </Routes>

    </div>
  );
}

export default App;
