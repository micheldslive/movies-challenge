import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import { Routers } from './routers'
import './styles/index.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routers />
      <Footer />
    </Router>
  )
}

export default App
