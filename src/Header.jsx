import { Link } from 'react-router-dom'
import './main.css'
import { OneHook, TwoHook, ThreeHook, FourHook, FiveHook, SixHook, StreakHook } from './states'
// ! still need to check for states when there is an update to the local storage, so that the Header component does not require a refresh to know that all the goals have been completed
function Header() {
    const length = 75

    const { oneDone, setOneDone } = OneHook()
    const { twoDone, setTwoDone } = TwoHook()
    const { threeDone, setThreeDone } = ThreeHook()
    const { fourDone, setFourDone } = FourHook()
    const { fiveDone, setFiveDone } = FiveHook()
    const { sixDone, setSixDone } = SixHook()
    const { streak, setStreak } = StreakHook()

    // increase streak total and reset goal states
    const incCounter = () => {
        if (oneDone && twoDone && threeDone && fourDone && fiveDone && sixDone) {
            console.log('All goals complete! Increasing streak!')
            setStreak((streak) => streak + 1)
            setOneDone(false)
            setTwoDone(false)
            setThreeDone(false)
            setFourDone(false)
            setFiveDone(false)
            setSixDone(false)
        }
    }

    const handleCounterOnClick = () => {
        if (window.location.pathname === '/') {
            console.log('path ', window.location.pathname)
            console.log('Clicked header button to attempt increase in streak total.')
            incCounter()    
        }
        if (window.location.pathname === '/rules') {
            console.log('path ', window.location.pathname)
            console.log('Clicked header button to go home.')    
        }
    }

    const streakToggle = (oneDone && twoDone && threeDone && fourDone && fiveDone && sixDone) ? 'inc' : null

    return (
        <Link to={`/`} style={{ textDecoration: 'none' }} onClick={handleCounterOnClick}>
                <button className={`header ${streakToggle}`}>Your Challenge<br />{streak}/{length}</button>
        </Link>
    )
}

export default Header