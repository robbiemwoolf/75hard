import { useState } from "react";

function BaseOneHook() {
    const [displayOne, setDisplayOne] = useState(true)
    return {displayOne, setDisplayOne}
}

function ChoiceOneHook() {
    const [displayChoiceOne, setDisplayChoiceOne] = useState(false)
    return {displayChoiceOne, setDisplayChoiceOne}
}

function TextOneHook() {
    const [textOne, setTextOne] = useState("")
    return {textOne, setTextOne}
}

function BaseTwoHook() {
    const [displayTwo, setDisplayTwo] = useState(true)
    return {displayTwo, setDisplayTwo}
}

function ChoiceTwoHook() {
    const [displayChoiceTwo, setDisplayChoiceTwo] = useState(false)
    return {displayChoiceTwo, setDisplayChoiceTwo}
}

function TextTwoHook() {
    const [textTwo, setTextTwo] = useState("")
    return {textTwo, setTextTwo}
}

function BaseThreeHook() {
    const [displayThree, setDisplayThree] = useState(true)
    return {displayThree, setDisplayThree}
}

function ChoiceThreeHook() {
    const [displayChoiceThree, setDisplayChoiceThree] = useState(false)
    return {displayChoiceThree, setDisplayChoiceThree}
}

function TextThreeHook() {
    const [textThree, setTextThree] = useState("")
    return {textThree, setTextThree}
}

function BaseFourHook() {
    const [displayFour, setDisplayFour] = useState(true)
    return {displayFour, setDisplayFour}
}

function ChoiceFourHook() {
    const [displayChoiceFour, setDisplayChoiceFour] = useState(false)
    return {displayChoiceFour, setDisplayChoiceFour}
}

function TextFourHook() {
    const [textFour, setTextFour] = useState("")
    return {textFour, setTextFour}
}

function BaseFiveHook() {
    const [displayFive, setDisplayFive] = useState(true)
    return {displayFive, setDisplayFive}
}

function ChoiceFiveHook() {
    const [displayChoiceFive, setDisplayChoiceFive] = useState(false)
    return {displayChoiceFive, setDisplayChoiceFive}
}

function TextFiveHook() {
    const [textFive, setTextFive] = useState("")
    return {textFive, setTextFive}
}

function BaseSixHook() {
    const [displaySix, setDisplaySix] = useState(true)
    return {displaySix, setDisplaySix}
}

function ChoiceSixHook() {
    const [displayChoiceSix, setDisplayChoiceSix] = useState(false)
    return {displayChoiceSix, setDisplayChoiceSix}
}

function TextSixHook() {
    const [textSix, setTextSix] = useState("")
    return {textSix, setTextSix}
}


function StreakHook() {
    const [streak, setStreak] = useState(() => {
        const saved = window.localStorage.getItem('streak')
        const initial = JSON.parse(saved)
        return initial || 1
    })
    return { streak, setStreak } 
}

function OneHook() {
    const [oneDone, setOneDone] = useState(() => {
        const saved = window.localStorage.getItem('oneDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    return { oneDone, setOneDone }
}

function TwoHook() {
    const [twoDone, setTwoDone] = useState(() => {
        const saved = window.localStorage.getItem('twoDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    return { twoDone, setTwoDone }
}

function ThreeHook() {
    const [threeDone, setThreeDone] = useState(() => {
        const saved = window.localStorage.getItem('threeDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    return { threeDone, setThreeDone }
}

function FourHook() {
    const [fourDone, setFourDone] = useState(() => {
        const saved = window.localStorage.getItem('fourDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    return { fourDone, setFourDone }
}

function FiveHook() {
    const [fiveDone, setFiveDone] = useState(() => {
        const saved = window.localStorage.getItem('fiveDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    return { fiveDone, setFiveDone }
}

function SixHook() {
    const [sixDone, setSixDone] = useState(() => {
        const saved = window.localStorage.getItem('sixDone')
        const initial = JSON.parse(saved)
        return initial || false
    })
    return { sixDone, setSixDone }
}

export {
    StreakHook,
    OneHook,
    TwoHook,
    ThreeHook,
    FourHook,
    FiveHook,
    SixHook,
    BaseOneHook,
    ChoiceOneHook,
    TextOneHook,
    BaseTwoHook,
    ChoiceTwoHook,
    TextTwoHook,
    BaseThreeHook,
    ChoiceThreeHook,
    TextThreeHook,
    BaseFourHook,
    ChoiceFourHook,
    TextFourHook,
    BaseFiveHook,
    ChoiceFiveHook,
    TextFiveHook,
    BaseSixHook,
    ChoiceSixHook,
    TextSixHook
}