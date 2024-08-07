import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Landingpage from './landingpage/landingpage.jsx';
import BodyPage from './landingpage/bodypage.jsx';
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'atropos/css'; // Ensure CSS is imported
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from './landingpage/navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Landingpage />
    <BodyPage />
  </React.StrictMode>,
)
