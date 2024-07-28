import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation';
import ContactHeder from './components/ContactHeader/ContactHeder';
import ContactForm from './components/ContactForm/ContactForm';
import Button from './components/Button/Button';
function App() {
  
  return <div>
    <Navigation />
    <main className='main_container'>
      <ContactHeder />
      <ContactForm />
    </main>
    
    
  </div>;
}

export default App
