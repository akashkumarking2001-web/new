import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'
import "animate.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

console.log('Initializing AOS...');
AOS.init();

console.log('Mounting React application...');
try {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <PreLoader />
      <div className="container mx-auto px-6">
        <Navbar />
        <App />
        <Footer />
      </div>
    </StrictMode>
  );
  console.log('React application mounted successfully.');
} catch (e) {
  console.error('CRITICAL: React mounting failed:', e);
}
