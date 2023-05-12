import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import './goal.css'
import challenges from './challenges'
import { OneHook, TwoHook, ThreeHook, FourHook, FiveHook, SixHook, StreakHook, BaseOneHook, ChoiceOneHook, TextOneHook, BaseTwoHook, ChoiceTwoHook, TextTwoHook, BaseThreeHook, ChoiceThreeHook, TextThreeHook, BaseFourHook, ChoiceFourHook, TextFourHook, BaseFiveHook, ChoiceFiveHook, TextFiveHook, BaseSixHook, ChoiceSixHook, TextSixHook } from './states'


function ChoiceOne({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}
function ChoiceTwo({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}
function ChoiceThree({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}
function ChoiceFour({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}
function ChoiceFive({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}
function ChoiceSix({ handleClick, handleRuleClick, handleCancel }) {     
    return (
        <div className='habitContainer'>
            <button className='displayRule' onClick={() => handleRuleClick()}>Show Rule?</button>
            <div className='completedContainer'>
                <button className='cancel' onClick={() => handleCancel()}>X</button>
                <button className='check' onClick={handleClick}>CHECK</button>
            </div>
        </div>
    )
}



function Body() {
    // states
    const { oneDone, setOneDone } = OneHook()
    const { twoDone, setTwoDone } = TwoHook()
    const { threeDone, setThreeDone } = ThreeHook()
    const { fourDone, setFourDone } = FourHook()
    const { fiveDone, setFiveDone } = FiveHook()
    const { sixDone, setSixDone } = SixHook()
    const { streak, setStreak } = StreakHook()
    const { displayOne, setDisplayOne } = BaseOneHook()
    const { displayChoiceOne, setDisplayChoiceOne } = ChoiceOneHook()
    const { textOne, setTextOne } = TextOneHook()
    const { displayTwo, setDisplayTwo } = BaseTwoHook()
    const { displayChoiceTwo, setDisplayChoiceTwo } = ChoiceTwoHook()
    const { textTwo, setTextTwo } = TextTwoHook()
    const { displayThree, setDisplayThree } = BaseThreeHook()
    const { displayChoiceThree, setDisplayChoiceThree } = ChoiceThreeHook()
    const { textThree, setTextThree } = TextThreeHook()
    const { displayFour, setDisplayFour } = BaseFourHook()
    const { displayChoiceFour, setDisplayChoiceFour } = ChoiceFourHook()
    const { textFour, setTextFour } = TextFourHook()
    const { displayFive, setDisplayFive } = BaseFiveHook()
    const { displayChoiceFive, setDisplayChoiceFive } = ChoiceFiveHook()
    const { textFive, setTextFive } = TextFiveHook()
    const { displaySix, setDisplaySix } = BaseSixHook()
    const { displayChoiceSix, setDisplayChoiceSix } = ChoiceSixHook()
    const { textSix, setTextSix } = TextSixHook()


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

    // setItem
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
    useEffect(() => {
        window.localStorage.setItem('streak', JSON.stringify(streak))
    }, [streak])

    // click handlers
    const handleCounterOnClick = () => {
        console.log('path: ', window.location.pathname)
        console.log('Clicked header button to attempt increase in streak total.')
        incCounter()
    }

    const handleBaseOneClick = () => {
        setDisplayOne(false)
        setDisplayChoiceOne(true)
    }
    const handleBaseTwoClick = () => {
        setDisplayTwo(false)
        setDisplayChoiceTwo(true)
    }
    const handleBaseThreeClick = () => {
        setDisplayThree(false)
        setDisplayChoiceThree(true)
    }
    const handleBaseFourClick = () => {
        setDisplayFour(false)
        setDisplayChoiceFour(true)
    }
    const handleBaseFiveClick = () => {
        setDisplayFive(false)
        setDisplayChoiceFive(true)
    }
    const handleBaseSixClick = () => {
        setDisplaySix(false)
        setDisplayChoiceSix(true)
    }

    // show rule handlers
    function handleRuleOneClick() {
        setTextOne(challenges[0].rules[0].description)
        setDisplayChoiceOne(false)
        setDisplayOne(true)
    }
    function handleRuleTwoClick() {
        setTextTwo(challenges[0].rules[1].description)
        setDisplayChoiceTwo(false)
        setDisplayTwo(true)
    }
    function handleRuleThreeClick() {
        setTextThree(challenges[0].rules[2].description)
        setDisplayChoiceThree(false)
        setDisplayThree(true)
    }
    function handleRuleFourClick() {
        setTextFour(challenges[0].rules[3].description)
        setDisplayChoiceFour(false)
        setDisplayFour(true)
    }
    function handleRuleFiveClick() {
        setTextFive(challenges[0].rules[4].description)
        setDisplayChoiceFive(false)
        setDisplayFive(true)
    }
    function handleRuleSixClick() {
        setTextSix(challenges[0].rules[5].description)
        setDisplayChoiceSix(false)
        setDisplaySix(true)
    }
    
    // cancels
    function handleCancelOne() {
        setOneDone(false)
        setTextOne("")
        setDisplayChoiceOne(false)
        setDisplayOne(true)
    }
    function handleCancelTwo() {
        setTwoDone(false)
        setTextTwo("")
        setDisplayChoiceTwo(false)
        setDisplayTwo(true)
    }
    function handleCancelThree() {
        setThreeDone(false)
        setTextThree("")
        setDisplayChoiceThree(false)
        setDisplayThree(true)
    }
    function handleCancelFour() {
        setFourDone(false)
        setTextFour("")
        setDisplayChoiceFour(false)
        setDisplayFour(true)
    }
    function handleCancelFive() {
        setFiveDone(false)
        setTextFive("")
        setDisplayChoiceFive(false)
        setDisplayFive(true)
    }
    function handleCancelSix() {
        setSixDone(false)
        setTextSix("")
        setDisplayChoiceSix(false)
        setDisplaySix(true)
    }
    

    // completes
    function handleOneCompleted() {
        setOneDone(true)
        setTextOne("")
        setDisplayChoiceOne(false)
        setDisplayOne(true)
    }
    function handleTwoCompleted() {
        setTwoDone(true)
        setTextTwo("")
        setDisplayChoiceTwo(false)
        setDisplayTwo(true)
    }
    function handleThreeCompleted() {
        setThreeDone(true)
        setTextThree("")
        setDisplayChoiceThree(false)
        setDisplayThree(true)
    }
    function handleFourCompleted() {
        setFourDone(true)
        setTextFour("")
        setDisplayChoiceFour(false)
        setDisplayFour(true)
    }
    function handleFiveCompleted() {
        setFiveDone(true)
        setTextFive("")
        setDisplayChoiceFive(false)
        setDisplayFive(true)
    }
    function handleSixCompleted() {
        setSixDone(true)
        setTextSix("")
        setDisplayChoiceSix(false)
        setDisplaySix(true)
    }

    // toggle streak animation
    const streakToggle = (oneDone && twoDone && threeDone && fourDone && fiveDone && sixDone) ? 'inc' : null

    // toggle 'done' class
    const toggleOne = oneDone ? 'done' : null
    const toggleTwo = twoDone ? 'done' : null
    const toggleThree = threeDone ? 'done' : null
    const toggleFour = fourDone ? 'done' : null
    const toggleFive = fiveDone ? 'done' : null
    const toggleSix = sixDone ? 'done' : null

    // toggle 'ruleText' class
    const toggleRuleOne = textOne ? 'ruleText' : null
    const toggleRuleTwo = textTwo ? 'ruleText' : null
    const toggleRuleThree = textThree ? 'ruleText' : null
    const toggleRuleFour = textFour ? 'ruleText' : null
    const toggleRuleFive = textFive ? 'ruleText' : null
    const toggleRuleSix = textSix ? 'ruleText' : null

    return (
        <>
            <Link to={`/`} style={{ textDecoration: 'none' }} onClick={handleCounterOnClick}>
                <button className={`header ${streakToggle}`}>Your Challenge<br />{streak}/{challenges[0].length}</button>
            </Link>
            <div className='body'>
                <div>
                    {displayOne ? 
                    <button className={`base oneLogo ${toggleOne}`} onClick={handleBaseOneClick}><p className={`${toggleRuleOne}`}>{textOne}</p></button> 
                    : null}
                    {displayChoiceOne ? <ChoiceOne handleRuleClick={handleRuleOneClick} handleClick={handleOneCompleted} handleCancel={handleCancelOne} /> : null}
                </div>
                <div>
                    {displayTwo ? 
                    <button className={`base twoLogo ${toggleTwo}`} onClick={handleBaseTwoClick}><p className={`${toggleRuleTwo}`}>{textTwo}</p></button> 
                    : null}
                    {displayChoiceTwo ? <ChoiceTwo handleRuleClick={handleRuleTwoClick} handleClick={handleTwoCompleted} handleCancel={handleCancelTwo} /> : null}
                </div>
                <div>
                    {displayThree ? 
                    <button className={`base threeLogo ${toggleThree}`} onClick={handleBaseThreeClick}><p className={`${toggleRuleThree}`}>{textThree}</p></button> 
                    : null}
                    {displayChoiceThree ? <ChoiceThree handleRuleClick={handleRuleThreeClick} handleClick={handleThreeCompleted} handleCancel={handleCancelThree} /> : null}
                </div>
                <div>
                    {displayFour ? 
                    <button className={`base fourLogo ${toggleFour}`} onClick={handleBaseFourClick}><p className={`${toggleRuleFour}`}>{textFour}</p></button> 
                    : null}
                    {displayChoiceFour ? <ChoiceFour handleRuleClick={handleRuleFourClick} handleClick={handleFourCompleted} handleCancel={handleCancelFour} /> : null}
                </div>
                <div>
                    {displayFive ? 
                    <button className={`base fiveLogo ${toggleFive}`} onClick={handleBaseFiveClick}><p className={`${toggleRuleFive}`}>{textFive}</p></button> 
                    : null}
                    {displayChoiceFive ? <ChoiceFive handleRuleClick={handleRuleFiveClick} handleClick={handleFiveCompleted} handleCancel={handleCancelFive} /> : null}
                </div>
                <div>
                    {displaySix ? 
                    <button className={`base sixLogo ${toggleSix}`} onClick={handleBaseSixClick}><p className={`${toggleRuleSix}`}>{textSix}</p></button> 
                    : null}
                    {displayChoiceSix ? <ChoiceSix handleRuleClick={handleRuleSixClick} handleClick={handleSixCompleted} handleCancel={handleCancelSix} /> : null}
                </div>
            </div>
            <Link to={`rules`} style={{ textDecoration: 'none' }}><button className="footer">Rules</button></Link>
        </>
    )
}

export default Body