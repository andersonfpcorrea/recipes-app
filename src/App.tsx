import { Routes, Route } from 'react-router-dom'
import Bookmarks from './pages/Bookmarks'
// import Footer from './components/Footer'
// import Header from './components/Header'
import Details from './pages/Details'
import Hero from './pages/Hero'
import Home from './pages/Home'
import Login from './pages/Login'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import Reviews from './pages/Reviews'
import Search from './pages/Search'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/reviews/:id" element={<Reviews />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
