import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './pages/Hero';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/home'
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
    </Routes>
  );
}

export default App;
