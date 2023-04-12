import Data from "../../../db/loppemarkeder.json"

export default (props) => {
    let navn, tlf, email, adresse, postnr, om, link, mandag, tirsdag, onsdag, torsdag, fredag, lørdag, søndag

    Data.loppemarkeder.map((i, index) => {
        if(index === props.id){
            navn = i.navn
            tlf = i.kontakt.tlf
            email = i.kontakt.email
            adresse = i.kontakt.adresse
            postnr = i.kontakt.postnr
            link = i.link
            om = i.om
            mandag = i.åbningstider[0]
            tirsdag = i.åbningstider[1]
            onsdag = i.åbningstider[2]
            torsdag = i.åbningstider[3]
            fredag = i.åbningstider[4]
            lørdag = i.åbningstider[5]
            søndag = i.åbningstider[6]
        }
    })



    return(
        <div className="modal fade" id="info" tabIndex="-1" aria-labelledby="info" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-4" id="exampleModalLabel">{}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p><b>Her kan du logge ind og følge med i dit salg -samt udskrive labels</b></p>
                        <a className="btn btn-secondary">Logind</a>
                        <div className="row mt-3">
                            <div className="col-12 col-lg-6">
                                <h3 className="fs-3">Om {navn}</h3>
                                {om}
                            </div>
                            <div className="col-12 col-lg-6">
                                <h3 className="fs-3">Åbningstider</h3>
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <th scope="col">Dag</th>
                                            <th scope="col">Tid</th>
                                        </tr>
                                        <tr>
                                            <th scope="row">Mandag</th>
                                            <td>{mandag}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Tirsdag</th>
                                            <td>{tirsdag}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Onsdag</th>
                                            <td>{onsdag}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Torsdag</th>
                                            <td>{torsdag}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Fredag</th>
                                            <td>{fredag}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Lørdag</th>
                                            <td>{lørdag}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Søndag</th>
                                            <td>{søndag}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h3 className="fs-3">Kontakinformation</h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th  scope="row">Navn</th>
                                            <td>{navn}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Adresse</th>
                                            <td>{adresse}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Post nr/by</th>
                                            <td>{postnr}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">E-mail</th>
                                            <td>{email}</td>
                                        </tr>   
                                        <tr>
                                            <th scope="row">Tlf</th>
                                            <td>{tlf}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="me-auto p-2">
                            {Data.loppemarkeder.map((i, index) => {
                                if(index === props.id){
                                    return i.social.map((i, index) => {
                                        return <a href={i.link} key={index}><i className={i.img} style={{color: "#3b5998"}}></i></a>
                                    })
                                }
                            })}
                        </div>
                        <div className="p-2">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}