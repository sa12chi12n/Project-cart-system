
import { createRoot } from 'react-dom/client'
import {Toaster} from 'react-hot-toast'
import App from './App.jsx'
import './index.css'
import {BrowserRouter}from 'react-router-dom'



createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
    <App />
    <Toaster/>
 </BrowserRouter>
)
