import { Link } from 'react-router-dom'
import './Footer.css'
import { changeStatusCursor } from '../../common/store/actions'
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

const Footer = () => {

    const dispatch = useDispatch();

    const handleMouseOver = useCallback(() => {
        dispatch(changeStatusCursor())
    }, [dispatch])
    const handleMouseOut = useCallback(() => {
        dispatch(changeStatusCursor())
    }, [dispatch])

    return (
        <div className="footer">
            <p className="copy-right">© 2021 PHAM DINH CHINH</p>
            <ul className="list-icon">
                <li className="icon">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link" 
                        href="https://www.facebook.com/pdc0102/"
                        onMouseOver={() => handleMouseOver() }
                        onMouseOut = {() => handleMouseOut() }
                    ><i className="fab fa-facebook-square"></i></a>
                </li>
                <li className="icon">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link" 
                        href="https://www.instagram.com/chinhfyb12/"
                        onMouseOver={() => handleMouseOver() }
                        onMouseOut = {() => handleMouseOut() }
                    ><i className="fab fa-instagram-square"></i></a>
                </li>
                <li className="icon">
                    <a 
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link" 
                        href="https://github.com/chinhfyb12"
                        onMouseOver={() => handleMouseOver() }
                        onMouseOut = {() => handleMouseOut() }
                    ><i className="fab fa-github-square"></i></a>
                </li>
            </ul>
        </div>
    )
}
export default Footer;