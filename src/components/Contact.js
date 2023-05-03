export function Contact() {
    return (
        <div className="">
            <aside className="sidebar">
                <div className="header-container">
                    <div className="header-text">
                        <h1 className="firstname">Ivanna<br /><span>Melnyk</span></h1>
                    </div>
                    <h3 className="position">Junior Frontend Developer</h3>
                </div>
                <div className="contacts-container">
                    <h3 className="contacts-title decorator">Contacts</h3>
                    <div>
                        <h4 className="contacts-link-type">Adress</h4>
                        <a className="contacts-link">Kyiv, Europe</a>
                    </div>
                    <div>
                        <h4 className="contacts-link-type">Phone</h4>
                        <a className="contacts-link">+380995501333</a>
                    </div>
                    <div>
                        <h4 className="contacts-link-type">E-mail</h4>
                        <a className="contacts-link" href="mailto:givmiller@gmail.com"
                        >givmiller@gmail.com</a
                        >
                    </div>
                    <div>
                        <h4 className="contacts-link-type">LinkedIn</h4>
                        <a
                            className="network-link"
                            href="https://linkedin.com/in/ivanna-melnyk-5479531bb"
                        >LinkedIn</a
                        >
                    </div>
                    <div className="language-container">
                        <h3 className="language-title decorator">Languages:</h3>
                        <ul className="language">
                            <li className="language-item">
                                <span className="language-text">English - intermediate(B2)</span>
                            </li>
                            <li className="language-item">
                                <span className="language-text">Ukrainian - native</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    )
}
