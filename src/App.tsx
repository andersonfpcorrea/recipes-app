import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
