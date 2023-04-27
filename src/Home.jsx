import React, { useEffect, useState } from 'react'
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
    }
  }

  return (
    <div className='container'>
        <div className="heading">
            <button onClick={streakCounter}><h1>{streak}/75</h1></button>
        </div>
        <div className="box">
            <button className={`${aToggle}`} onClick={() => setADone(!aDone)}><img src='src/assets/Water.png' /></button>
        </div>
        <div className="box">
            <button className={`${bToggle}`} onClick={() => setBDone(!bDone)}><img src='src/assets/Book.png' /></button>
        </div>
        <div className="box">
            <button className={`${cToggle}`} onClick={() => setCDone(!cDone)}><img src='src/assets/Camera.png' /></button>
        </div>
        <div className="box">
            <button className={`${dToggle}`} onClick={() => setDDone(!dDone)}><img src='src/assets/Tree.png' /></button>
        </div>
        <div className="box">
            <button className={`${eToggle}`} onClick={() => setEDone(!eDone)}><img src='src/assets/Apple.png' /></button>
        </div>
        <div className="box">
            <button className={`${fToggle}`} onClick={() => setFDone(!fDone)}><img src='src/assets/Dumbbell.png' /></button>
        </div>
        <div className="footer">
            <div className="ftrbtn">
                <Link to={`rules`}><button>Rules</button></Link>
            </div>
            {/* <div className="ftrbtn">
                <button>Settings</button>
            </div> */}
        </div>
    </div>
  )
}

export default Home