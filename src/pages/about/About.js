import './About.css'
import about from '../../images/about.jpg'

const About = () => {
    return (
        <div className="about-container">
            <div className="container">
                <div className="box-title">
                    <div className="img">
                        <img src={about} alt=""/>
                    </div>
                    <h3 className="title">About me</h3>
                </div>
                <p className="intro">Hi there! My name is <span>Pham Dinh Chinh</span>, a third-year student at Hanoi University of Industy (HaUI). My major is Information Technology. Now I live in Hanoi city, the capital of Vietnam.</p>
                <p className="more-info">
                    <span>Age: </span> 21
                </p>
                <p className="more-info">
                    <span>Address: </span> Bac Tu Liem district, Ha Noi
                </p>
                <p className="more-info">
                    <span>Phone: </span> 0326918863
                </p>
                <p className="more-info">
                    <span>Email: </span> dinhchinh1220@gmail.com
                </p>
                <div className="box-skills">
                    <h4 className="title-skills">My Skills</h4>
                    <div className="box">
                        <h5 className="skill">Languages</h5>
                        <ul className="list">
                            <li className="item">JavaScript</li>
                            <li className="item">HTML/HTML5, CSS/CSS3/SCSS</li>
                            <li className="item">C/C++</li>
                            <li className="item">C# (based)</li>
                            <li className="item">Java (based)</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h5 className="skill">Frameworks & Libraries</h5>
                        <ul className="list">
                            <li className="item">ReactJS/Redux</li>
                            <li className="item">NodeJS (based)</li>
                            <li className="item">Bootstrap 4</li>
                            <li className="item">Material UI</li>
                            <li className="item">Ant design</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h5 className="skill">Database</h5>
                        <ul className="list">
                            <li className="item">MongoDB</li>
                            <li className="item">Firebase</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;