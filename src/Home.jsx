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
            <button className='streak' onClick={streakCounter}><h1>{streak}/75</h1></button>
        </div>
        <div className='habits'>
            <div className="box">
                <button className={`${aToggle}`} onClick={() => setADone(!aDone)}><img src='Water.png' /></button>
            </div>
            <div className="box">
                <button className={`${bToggle}`} onClick={() => setBDone(!bDone)}><img src='Book.png' /></button>
            </div>
            <div className="box">
                <button className={`${cToggle}`} onClick={() => setCDone(!cDone)}><img src='Camera.png' /></button>
            </div>
            <div className="box">
                <button className={`${dToggle}`} onClick={() => setDDone(!dDone)}><img src='Tree.png' /></button>
            </div>
            <div className="box">
                <button className={`${eToggle}`} onClick={() => setEDone(!eDone)}><img src='Apple.png' /></button>
            </div>
            <div className="box">
                <button className={`${fToggle}`} onClick={() => setFDone(!fDone)}><img src='Dumbbell.png' /></button>
            </div>
        </div>
        <div className="footer">
                <Link to={`rules`}><button className="ftrbtn">Rules</button></Link>
        </div>
    </div>
  )
}

export default Home