import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

import useLongPress from './hooks/use-long-press'

function Home() {
    const [oneDone, setOneDone] = useState(() => {
        const saved = window.localStorage.getItem('oneDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('done', JSON.stringify(oneDone))
    }, [oneDone])
    const [twoDone, setTwoDone] = useState(() => {
        const saved = window.localStorage.getItem('twoDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('done', JSON.stringify(twoDone))
    }, [twoDone])
    const [threeDone, setThreeDone] = useState(() => {
        const saved = window.localStorage.getItem('threeDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('done', JSON.stringify(threeDone))
    }, [threeDone])
    const [fourDone, setFourDone] = useState(() => {
        const saved = window.localStorage.getItem('fourDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('done', JSON.stringify(fourDone))
    }, [fourDone])
    const [fiveDone, setFiveDone] = useState(() => {
        const saved = window.localStorage.getItem('fiveDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('done', JSON.stringify(fiveDone))
    }, [fiveDone])
    const [sixDone, setSixDone] = useState(() => {
        const saved = window.localStorage.getItem('sixDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    useEffect(() => {
        window.localStorage.setItem('done', JSON.stringify(sixDone))
    }, [sixDone])

    const handleOnClick = () => {
        streakCounter()
        console.log('streak clicked')
    }
    const handleOneOnClick = () => {setOneDone(!oneDone), console.log('one')}
    const handleTwoOnClick = () => {setTwoDone(!twoDone), console.log('two')}
    const handleThreeOnClick = () => {setThreeDone(!threeDone), console.log('three')}
    const handleFourOnClick = () => {setFourDone(!fourDone), console.log('four')}
    const handleFiveOnClick = () => {setFiveDone(!fiveDone), console.log('five')}
    const handleSixOnClick = () => {setSixDone(!sixDone), console.log('six')}

    const { handlers} = useLongPress({
        onClick: handleOnClick
    })
    const { showRule: oneShowRule, handlers: oneHandlers } = useLongPress({
        onClick : handleOneOnClick
    })
    const { showRule: twoShowRule, handlers: twoHandlers } = useLongPress({
        onClick : handleTwoOnClick
    })
    const { showRule: threeShowRule, handlers: threeHandlers } = useLongPress({
        onClick : handleThreeOnClick
    })
    const { showRule: fourShowRule, handlers: fourHandlers } = useLongPress({
        onClick : handleFourOnClick
    })
    const { showRule: fiveShowRule, handlers: fiveHandlers } = useLongPress({
        onClick : handleFiveOnClick
    })
    const { showRule: sixShowRule, handlers: sixHandlers } = useLongPress({
        onClick : handleSixOnClick
    })

    const [streak, setStreak] = useState(() => {
        const saved = window.localStorage.getItem('streak')
        const initial = JSON.parse(saved)
        return initial || 1
    })
    useEffect(() => {
        window.localStorage.setItem('streak', JSON.stringify(streak))
    }, [streak])

    useEffect(() => {
        window.localStorage.setItem('oneDone', JSON.stringify(oneDone))
    }, [oneDone])
    useEffect(() => {
        window.localStorage.setItem('twoDone', JSON.stringify(twoDone))
    }, [twoDone])
    useEffect(() => {
        window.localStorage.setItem('threeDone', JSON.stringify(threeDone))
    }, [threeDone])
    useEffect(() => {
        window.localStorage.setItem('fourDone', JSON.stringify(fourDone))
    }, [fourDone])
    useEffect(() => {
        window.localStorage.setItem('fiveDone', JSON.stringify(fiveDone))
    }, [fiveDone])
    useEffect(() => {
        window.localStorage.setItem('sixDone', JSON.stringify(sixDone))
    }, [sixDone])


  const oneToggle = oneDone ? 'done' : null
  const twoToggle = twoDone ? 'done' : null
  const threeToggle = threeDone ? 'done' : null
  const fourToggle = fourDone ? 'done' : null
  const fiveToggle = fiveDone ? 'done' : null
  const sixToggle = sixDone ? 'done' : null

  const streakToggle = (oneDone && twoDone && threeDone && fourDone && fiveDone && sixDone) ? 'inc' : null

  const streakCounter = () => {
    if (oneDone && twoDone && threeDone && fourDone && fiveDone && sixDone) {
        setStreak((streak) => streak + 1)
        setOneDone(false)
        setTwoDone(false)
        setThreeDone(false)
        setFourDone(false)
        setFiveDone(false)
        setSixDone(false)
    }
  }

  return (
    <div className='container'>
        <div className="heading">
            <button className={`streak ${streakToggle}`} {...handlers}><h1>{streak}/75</h1></button>
        </div>
        <div className='habits'>
            <div className="box" {...oneHandlers}>
                <button className={`${oneToggle}`}><img src='Water.png' /></button>
                {oneShowRule === true && <div className='rule'>
                    <div className='text'>Drink one gallon of water.</div>
                </div>}
            </div>
            <div className="box" {...twoHandlers}>
                <button className={`${twoToggle}`}><img src='Book.png' /></button>
                {twoShowRule === true &&<div className='rule'>
                    <div className='text'>Read 10 pages of a self-improvement book.</div>
                </div>}
            </div>
            <div className="box" {...threeHandlers}>
                <button className={`${threeToggle}`}><img src='Camera.png' /></button>
                {threeShowRule === true &&<div className='rule'>
                    <div className='text'>Take a progess photo.</div>
                </div>}
            </div>
            <div className="box" {...fourHandlers}>
                <button className={`${fourToggle}`}><img src='Tree.png' /></button>
                {fourShowRule === true &&<div className='rule'>
                    <div className='text'>Do a 45 minute workout outdoors.</div>
                </div>}
            </div>
            <div className="box" {...fiveHandlers}>
                <button className={`${fiveToggle}`}><img src='Apple.png' /></button>
                {fiveShowRule === true &&<div className='rule'>
                    <div className='text'>Stick to your diet (no alcohol).</div>
                </div>}
            </div>
            <div className="box" {...sixHandlers}>
                <button className={`${sixToggle}`}><img src='Dumbbell.png' /></button>
                {sixShowRule === true &&<div className='rule'>
                    <div className='text'>Do another 45 minute workout.</div>
                </div>}
            </div>
        </div>
        <div className="footer">
                <Link to={`rules`} style={{ textDecoration: 'none' }}><button className="ftrbtn">Rules</button></Link>
        </div>
    </div>
  )
}

export default Home