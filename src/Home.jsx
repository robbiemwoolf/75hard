import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    const [streak, setStreak] = useState(() => {
        const saved = window.localStorage.getItem('streak')
        const initial = JSON.parse(saved)
        return initial || 1
    })
    useEffect(() => {
        window.localStorage.setItem('streak', JSON.stringify(streak))
    }, [streak])

    const [aDone, setADone] = useState(() => {
        const saved = window.localStorage.getItem('aDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('aDone', JSON.stringify(aDone))
    }, [aDone])

    const [bDone, setBDone] = useState(() => {
        const saved = window.localStorage.getItem('bDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('bDone', JSON.stringify(bDone))
    }, [bDone])

    const [cDone, setCDone] = useState(() => {
        const saved = window.localStorage.getItem('cDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('cDone', JSON.stringify(cDone))
    }, [cDone])

    const [dDone, setDDone] = useState(() => {
        const saved = window.localStorage.getItem('dDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('dDone', JSON.stringify(dDone))
    }, [dDone])

    const [eDone, setEDone] = useState(() => {
        const saved = window.localStorage.getItem('eDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('eDone', JSON.stringify(eDone))
    }, [eDone])

    const [fDone, setFDone] = useState(() => {
        const saved = window.localStorage.getItem('fDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('fDone', JSON.stringify(fDone))
    }, [fDone])

  const aToggle = aDone ? 'done' : null
  const bToggle = bDone ? 'done' : null
  const cToggle = cDone ? 'done' : null
  const dToggle = dDone ? 'done' : null
  const eToggle = eDone ? 'done' : null
  const fToggle = fDone ? 'done' : null

  const streakToggle = (aDone && bDone && cDone && dDone && eDone && fDone) ? 'inc' : null

  const streakCounter = () => {
    if (aDone && bDone && cDone && dDone && eDone && fDone) {
        setStreak((streak) => streak + 1)
        setADone(false)
        setBDone(false)
        setCDone(false)
        setDDone(false)
        setEDone(false)
        setFDone(false)
    }
  }

  return (
    <div className='container'>
        <div className="heading">
            <button className={`streak ${streakToggle}`} onClick={streakCounter}><h1>{streak}/75</h1></button>
        </div>
        <div className='habits'>
            <div className="box" onClick={() => setADone(!aDone)}>
                <button className={`${aToggle}`}><img src='Water.png' /></button>
                <div className='rule'>
                    <div className='text'>Drink one gallon of water.</div>
                </div>
            </div>
            <div className="box" onClick={() => setBDone(!bDone)}>
                <button className={`${bToggle}`}><img src='Book.png' /></button>
                <div className='rule'>
                    <div className='text'>Read 10 pages of a self-improvement book.</div>
                </div>
            </div>
            <div className="box" onClick={() => setCDone(!cDone)}>
                <button className={`${cToggle}`}><img src='Camera.png' /></button>
                <div className='rule'>
                    <div className='text'>Take a progess photo.</div>
                </div>
            </div>
            <div className="box" onClick={() => setDDone(!dDone)}>
                <button className={`${dToggle}`}><img src='Tree.png' /></button>
                <div className='rule'>
                    <div className='text'>Do a 45 minute workout outdoors.</div>
                </div>
            </div>
            <div className="box" onClick={() => setEDone(!eDone)}>
                <button className={`${eToggle}`}><img src='Apple.png' /></button>
                <div className='rule'>
                    <div className='text'>Stick to your diet (no alcohol).</div>
                </div>
            </div>
            <div className="box" onClick={() => setFDone(!fDone)}>
                <button className={`${fToggle}`}><img src='Dumbbell.png' /></button>
                <div className='rule'>
                    <div className='text'>Do another 45 minute workout.</div>
                </div>
            </div>
        </div>
        <div className="footer">
                <Link to={`rules`} style={{ textDecoration: 'none' }}><button className="ftrbtn">Rules</button></Link>
        </div>
    </div>
  )
}

export default Home