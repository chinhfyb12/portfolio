import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact">
                <h2>Contact me</h2>
                <div>
                    <form className="form">
                        <div className="box">
                            <div className="name">
                                <label>NAME</label>
                                <input type="text"/>
                            </div>
                            <div className="email">
                                <label>EMAIL</label>
                                <input type="email"/>
                            </div>
                        </div>
                        <div className="message">
                            <label>MESSAGE</label>
                            <textarea type="text"/>
                        </div>
                        <div className="btn">SEND</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;