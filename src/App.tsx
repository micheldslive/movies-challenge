import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header'
import { Routers } from './routers'
import './styles/index.scss'

function App() {
  return (
    <Router>
      <Header />
      <Routers />
    </Router>
  )
}

export default App
