import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FaIdCardAlt } from 'react-icons/fa'
import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactState from './context/contact/ContactState'

import './App.css'

const App = () => {
  return (
    <ContactState>
      <Router>
        <>
          <NavBar icon={<FaIdCardAlt />} title="A Banging CRM" />
          <div className="container">
            <Routes>
              <Route path="about" element={<About />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </>
      </Router>
    </ContactState>
  )
}

export default App
