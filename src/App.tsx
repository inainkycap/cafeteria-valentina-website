import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import SuperInternChat from './components/SuperInternChat'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <SuperInternChat />
    </>
  )
}

export default App
