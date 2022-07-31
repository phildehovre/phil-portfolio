import { useState } from 'react'
import './Hero.css';

function App() {

    const [valueX, setValueX] = useState(0)
    const [valueY, setValueY] = useState(0)
    const [translationFactor, setTranslationFactor] = useState(25)


    const topFogStyle = {
        transform: `translate(${valueX * 2.5}px, ${valueY * 2.5}px)`
    }
    const fogStyle = {
        transform: `translate(${valueX * 1}px, ${valueY * 1}px)`
    }
    const forestStyle = {
        transform: `translate(${valueX * 0.1}px, ${valueY * 0.1}px)`
    }
    const skyStyle = {
        transform: `translate(${valueX * 0}px, ${valueY * 0}px)`
    }

    document.addEventListener('pointermove', (e) => {

        setValueX(Math.abs(e.offsetX / translationFactor))
        setValueY(Math.abs(e.offsetY / translationFactor))
    })

    return (
        <div className='forest-ctn'>
            <div className='forest' style={forestStyle}></div>
            <div className='sky' style={skyStyle}></div>
            <div className='fog' style={fogStyle}></div>
            <div className='fog-top' style={topFogStyle}></div>
            <h1>Great Outdoors</h1>

        </div>
    );
}

export default App;
