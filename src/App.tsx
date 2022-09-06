import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header'
import { Routers } from './routers'
import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.min.css'
import Toast from './components/toast'

function App() {
  return (
    <Router>
      <Header />
      <Routers />
      <Toast />
    </Router>
  )
}

export default App
