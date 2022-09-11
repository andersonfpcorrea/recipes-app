import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Details from './pages/Details'
import Hero from './pages/Hero'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route path="/search" element={<Search />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}

export default App
