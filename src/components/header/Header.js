import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './Header.css';
import { changeStatusCursor, changeStatusMenu } from '../../common/store/actions'

const Header = () => {

    const dispatch = useDispatch();
    const [statusBtn, setStatusBtn] = useState(false);

    const statusMenu = useSelector(state => state.statusMenu)

    useEffect(() => {
        setStatusBtn(statusMenu)
    }, [statusMenu])

    const handleMouseOver = useCallback(() => {
        dispatch(changeStatusCursor())
    }, [dispatch])
    const handleMouseOut = useCallback(() => {
        dispatch(changeStatusCursor())
    }, [dispatch])

    const handleClickBtn = () => {
        dispatch(changeStatusMenu())
    }

    return (
        <>
            <div className="header">
                <nav className="navbar">
                    <p className="name-logo">
                        <Link 
                            to="/" 
                            className="nav-link"
                            onMouseOver={() => handleMouseOver() }
                            onMouseOut = {() => handleMouseOut() }
                        >PHAM DINH CHINH</Link>
                    </p>
                    <p 
                        className="btn-menu"
                        onMouseOver={() => handleMouseOver() }
                        onMouseOut = {() => handleMouseOut() }
                        onClick={() => handleClickBtn() }
                    >
                        <span className={statusBtn ? 'show1 active' : 'show1'}></span>
                        <span className={statusBtn ? 'show2 active' : 'show2'}></span>
                        <span className={statusBtn ? 'hide1 active' : 'hide1'}></span>
                        <span className={statusBtn ? 'hide2 active' : 'hide2'}></span>
                    </p>
                </nav>
            </div>
            <Navbar />
        </>
    )
}

export default Header;