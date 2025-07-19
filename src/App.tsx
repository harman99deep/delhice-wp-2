import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import MenuPage from './pages/Menu'
import ContactPage from './pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}
