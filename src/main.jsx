import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from '../src/components/Navbar.jsx'
import Education from '../src/components/Education.jsx'
import EducationInfo from './components/EducationInfo'
import Internship from './components/Internship'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Education />
    {/* <EducationInfo/>
    <Internship /> */}
  </React.StrictMode>,
)
