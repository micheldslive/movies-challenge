import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/cart'
import Home from './pages/home'
import Details from './pages/pdp'

export const Routers = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pdp' element={<Details />} />
        </Routes>
      </Router>
    </main>
  )
}
