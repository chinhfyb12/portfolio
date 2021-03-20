import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeStatusLoading, changeStatusMenu } from '../../common/store/actions';
import './Navbar.css';

const Navbar = () => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false)

    const statusMenu = useSelector(state => state.statusMenu)

    useEffect(() => {
        setShow(statusMenu)
    }, [statusMenu])

    const handleClick = () => {
        dispatch(changeStatusLoading())
        setTimeout(() => {
            dispatch(changeStatusMenu())
        }, 1300)
    }

    return (
        <ul className={show ? 'navbar-nav active' : 'navbar-nav'}>
            {
                ['home', 'about', 'project', 'contact'].map((menu, index) => {
                    return <li onClick={() => handleClick() }  key={index} className={show ? 'nav-item active' : 'nav-item'}>
                                <Link className="nav-link" to={menu === 'home' ? '/' : `/${menu}`}>{menu}</Link>
                            </li>
                })
            }
        </ul>
    )
}

export default Navbar;