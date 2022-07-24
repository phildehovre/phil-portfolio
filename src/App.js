import { useState } from 'react'
import './App.css';

function App() {

  const [valueX, setValueX] = useState(0)
  const [valueY, setValueY] = useState(0)
  const [translationFactor, setTranslationFactor] = useState(25)


  let fogStyle = {
    transform: `translate(${valueX * 0.8}px, ${valueY * 0.8}px)`,
    height: '150vh',
    width: '150vw',
    backgroundImage: 'url("/fog.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    marginTop: '-10%',
    marginRight: '-25%',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 100,
  }
  let forestStyle = {
    transform: `translate(${valueX * 0.4}px, ${valueY * 0.4}px)`,
    height: '150vh',
    width: '150vw',
    border: '2px solid red',
    backgroundImage: 'url("/forest.png")',
    backgroundSize: '80%',
    backgroundRepeat: 'no-repeat',
    marginTop: '-10%',
    marginLeft: '-15%',
    overflow: 'hidden',
    zIndex: '10',
    backgroundColor: 'transparent',
    position: 'absolute',
  }
  let skyStyle = {
    transform: `translate(${valueX * 0.1}px, ${valueY * 0.1}px)`,
    height: '150vh',
    width: '150vw',
    border: '2px solid red',
    backgroundImage: 'url("/sky.png")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    marginTop: '-25%',
    marginLeft: '-25%',
    overflow: 'hidden',
    position: 'absolute'
  }

  document.addEventListener('pointermove', (e) => {

    setValueX(Math.abs(e.offsetX / translationFactor))
    setValueY(Math.abs(e.offsetY / translationFactor))
  })

  return (
    <div className="App">
      <div className='forest-ctn'>
        <div className='forest' style={forestStyle}></div>
        <div className='sky' style={skyStyle}></div>
        <div className='fog' style={fogStyle}></div>

      </div>
      <header className="App-header">
      </header >
    </div>
  );
}

export default App;
