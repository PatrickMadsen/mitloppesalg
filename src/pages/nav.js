import { useState, } from "react"

export default (props) => {
    const [active, setActive] = useState("")

    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h1 className="fs-5">Mitloppesalg</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link ${(props.om == true) ? "active" : ""}`} href="#om">Hvem er vi? <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${(props.butik == true) ? "active" : ""}`} href="#partnere">Partnere</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${(props.vejled == true) ? "active" : ""}`} href="#vejledning">Vejledning</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${(props.system == true) ? "active" : ""}`} href="#system">Vores system</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${(props.kontakt == true) ? "active" : ""}`} href="#kontakt">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}