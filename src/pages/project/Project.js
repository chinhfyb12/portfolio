import './Project.css'
import buddy from '../../images/buddy.png';
import cashop from '../../images/cashop.png';
import clothes from '../../images/clothes.png';
import coffee from '../../images/coffee.png';
import pets from '../../images/pets.png';
import wolf from '../../images/wolf.png';

const Project = () => {

    return (
        <div className="project">
            <div className="title">
                Projects
            </div>
            <ul className="list-project">
                <li className="item">
                    <p className="img">
                        <img src={cashop} alt="" />
                    </p>
                    <div className="box-content">
                        <a href="https://cashopp.herokuapp.com" target="_blank" rel="noreferrer">View</a>
                        <p className="name">Cashop</p>
                    </div>
                </li>
                <li className="item">
                    <p className="img">
                        <img src={clothes} alt=""/>
                    </p>
                    <div className="box-content">
                        <a href="https://clothes-db049.web.app/" target="_blank" rel="noreferrer">View</a>
                        <p className="name">Clothes</p>
                    </div>
                </li>
                <li className="item">
                    <p className="img">
                        <img src={buddy} alt=""/>
                    </p>
                    <div className="box-content">
                        <a href="https://chinhfyb12.github.io/Pets/buddy/home1.html" target="_blank" rel="noreferrer">View</a>
                        <p className="name">Buddy</p>
                    </div>
                </li>
                <li className="item">
                    <p className="img">
                        <img src={coffee} alt=""/>
                    </p>
                    <div className="box-content">
                        <a href="https://coffee-1bd1e.web.app/" target="_blank" rel="noreferrer">View</a>
                        <p className="name">Coffee</p>
                    </div>
                </li>
                <li className="item">
                    <p className="img">
                        <img src={pets} alt=""/>
                    </p>
                    <div className="box-content">
                        <a href="https://chinhfyb12.github.io/Pets/" target="_blank" rel="noreferrer">View</a>
                        <p className="name">Pets</p>
                    </div>
                </li>
                <li className="item">
                    <p className="img">
                        <img src={wolf} alt=""/>
                    </p>
                    <div className="box-content">
                        <a href="https://chinhfyb12.github.io/wolfbadger/" target="_blank" rel="noreferrer">View</a>
                        <p className="name">Wolf</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Project;