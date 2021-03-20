import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Cursor.css';

const Cursor = () => {

    const [status, setStatus] = useState(false)
    const [statusMenu, setStatusMenu] = useState(false)

    const statusMenuState = useSelector(state => state.statusMenu)

    const statusState = useSelector(state => state.statusCursor);
    useEffect(() => {
        setStatus(statusState)
        return () => {
            setStatusMenu(false)
        }
    }, [statusState])

    useEffect(() => {
        setStatusMenu(statusMenuState)
        return () => {
            setStatusMenu(false)
        }
    }, [statusMenuState])

    const renderBtn = () => {
        if(status && statusMenu) {
            return (
                <div id="mouse-circle" className="mouse-circle-active click"></div>
            )
        } else if (status && !statusMenu) {
            return (
                <div id="mouse-circle" className="mouse-circle-active"></div>
            )
        } else {
            return (
                <div onClick={() => handleClick()} id="mouse-circle" className=""></div>
            )
        }
    }
    const handleClick = () => {
        console.log('test')
    }

    return (
        <>
            { renderBtn() }
            <div onClick={() => handleClick()} id="mouse-dot" className={status ? 'mouse-dot-active' : ''}></div>
        </>
    )
}

export default Cursor;