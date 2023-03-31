export default () => {
    return(
        <div className="modal fade" id="info" tabIndex="-1" aria-labelledby="info" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-4" id="exampleModalLabel">Genbrugsmarked</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p><b>Her kan du logge ind og følge med i dit salg -samt udskrive labels</b></p>
                        <a className="btn btn-secondary">Logind</a>
                        <div className="row mt-3">
                            <div className="col-12 col-lg-6">
                                <h3 className="fs-3">Om Genbrugsmarked</h3>
                                <p>Danmarks smarteste loppemarkeds løsning.</p>
                                <p>Tjen ekstra penge eller gør et godt genbrugskup.</p>
                                <p>Nemt og bekvemt.</p>
                                <p>Stort som småt, genbrug er godt</p>
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
                                            <td>10:00 - 18:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Tirsdag</th>
                                            <td>10:00 - 18:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Onsdag</th>
                                            <td>10:00 - 18:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Torsdag</th>
                                            <td>10:00 - 18:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Fredag</th>
                                            <td>10:00 - 18:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Lørdag</th>
                                            <td>10:00 - 16:00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Søndag</th>
                                            <td>10:00 - 16:00</td>
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
                                            <td>Genbrugsmarked</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Adresse</th>
                                            <td>Måløv Stationsplads 1</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Post nr/by</th>
                                            <td>2760 Måløv</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">E-mail</th>
                                            <td>kontakt@genbrugsmarked.com</td>
                                        </tr>   
                                        <tr>
                                            <th scope="row">Tlf</th>
                                            <td>+45 31 10 77 55</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="me-auto p-2">
                            <a href="#"><i className="fab fa-facebook-f fa-2x px-2" style={{color: "#3b5998"}}></i></a>
                            <a href="#"><i className="fab fa-instagram fa-2x px-2" style={{color: "#ac2bac"}}></i></a>
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