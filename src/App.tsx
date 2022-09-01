import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<Hero />} />
    </Routes>
  );
}

export default App;
