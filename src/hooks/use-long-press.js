import { useState, useRef } from 'react'

export default function useLongPress({ onClick }={}) {
    
    const [showRule, setShowRule] = useState(false)

    const timerRef = useRef()

    const isLongPress = useRef(false)

    const handleOnClick = () => {
        if (isLongPress.current) {
            setShowRule(true)
            return;
        }
        setShowRule(false)
        if ( typeof onClick === 'function' ) {
            onClick()
        }
    }

    const handleOnMouseDown = () => {startPressTimer()}

    const handleOnMouseUp = () => {clearTimeout(timerRef.current)}

    const handleOnTouchStart = () => {startPressTimer()}

    const handleOnTouchEnd = () => {clearTimeout(timerRef.current)}

    const startPressTimer = () => {
        isLongPress.current = false
        timerRef.current = setTimeout(() => {
            isLongPress.current = true
        }, 500)
    } 
    
    return {
        showRule,
        handlers: {
            onClick : handleOnClick,
            onMouseDown : handleOnMouseDown,
            onMouseUp : handleOnMouseUp,
            onTouchStart : handleOnTouchStart,
            onTouchEnd : handleOnTouchEnd
        }
    }
}