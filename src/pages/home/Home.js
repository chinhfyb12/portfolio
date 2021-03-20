import './Home.css'
import avt from '../../images/avt.JPG';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Home  = () => {

    const [hide, setHide] = useState(false)
    const statusMenu = useSelector(state => state.statusMenu)

    useEffect(() => {
        if(hide === false) {
            setTimeout(() => {
                setHide(statusMenu)
            }, 500)
        } else {
            setHide(statusMenu)
        }
    }, [statusMenu])

    return (
        <div className={hide ? 'home active' : 'home'}>
            <div className="col-info">
                <div className="avt">
                    <p className="box">
                        <img src={avt} alt=""/>
                    </p>
                </div>
                <div className="text">
                    <p className="text-animation">Welcome...</p>
                    Hi, I'm <span>Pham Dinh Chinh</span>, I'm currently a third-year student at the Hanoi University of Industry. <br/>
                    <p>I'm currently learning more about React-Redux and C#.</p>
                    <div className="cv">Download CV</div>
                </div>
            </div>
        </div>
    )
}

export default Home;