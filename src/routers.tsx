import { Routes, Route } from 'react-router-dom'
import Checkout from './pages/checkout'
import Home from './pages/home'
import NotFound from './pages/404'

export const Routers = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}
