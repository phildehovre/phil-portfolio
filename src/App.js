import { useState } from 'react'
import Homepage from './pages/Homepage';
import './App.css';

function App() {

  const [valueX, setValueX] = useState(0)
  const [valueY, setValueY] = useState(0)
  const [translationFactor, setTranslationFactor] = useState(25)


  const fogStyle = {
    transform: `translate(${valueX * 2}px, ${valueY * 2}px)`
  }
  const forestStyle = {
    transform: `translate(${valueX * 0.2}px, ${valueY * 0.2}px)`
  }
  const skyStyle = {
    transform: `translate(${valueX * 0}px, ${valueY * 0}px)`
  }

  document.addEventListener('pointermove', (e) => {

    setValueX(Math.abs(e.offsetX / translationFactor))
    setValueY(Math.abs(e.offsetY / translationFactor))
  })

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
