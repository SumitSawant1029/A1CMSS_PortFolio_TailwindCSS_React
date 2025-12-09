import { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ContactPage from './Components/ContactPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <ContactPage/>
    </>
  )
};


export default App
