import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ButtonPage from './pages/button'
import ButtonDetail from './pages/button/ButtonDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/button" element={<ButtonPage />} />
      <Route path="/button/:id" element={<ButtonDetail />} />
    </Routes>
  )
}
