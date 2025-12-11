import { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ContactPage from './Components/ContactPage';
import Block from './Components/Block';
import About from './Components/About';
import Slider from './Components/Slider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Slider/>
      <About/>
      <Block/>
      <ContactPage/>
    </>
  )
};


export default App
