import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MoenyState } from './components/context/MoenyState.jsx'
import StudentState from './student/StudentState.jsx'

createRoot(document.getElementById('root')).render(
  <MoenyState>
    <StudentState>
    <App />
    </StudentState>
  </MoenyState>,
)
