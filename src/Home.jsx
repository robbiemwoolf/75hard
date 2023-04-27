import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const [aDone, setADone] = useState(false)
  const [bDone, setBDone] = useState(false)
  const [cDone, setCDone] = useState(false)
  const [dDone, setDDone] = useState(false)
  const [eDone, setEDone] = useState(false)
  const [fDone, setFDone] = useState(false)

  const [streak, setStreak] = useState(1)
  const streakCounter = () => {
    if (aDone && bDone && cDone && dDone && eDone && fDone) {
        setStreak((streak) => streak + 1)
    }
  }

  const aToggle = aDone ? 'done' : null
  const bToggle = bDone ? 'done' : null
  const cToggle = cDone ? 'done' : null
  const dToggle = dDone ? 'done' : null
  const eToggle = eDone ? 'done' : null
  const fToggle = fDone ? 'done' : null

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