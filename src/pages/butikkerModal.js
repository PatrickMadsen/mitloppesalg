export default () => {
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-4" id="exampleModalLabel">Genbrugsmarked</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Her kan du logge ind og følge med i dit salg -samt udskrive labels ud hjemmefra</p>
                        <div className="row">
                            <div className="col-6">
                                <h3 className="fs-5">Om Genbrugsmarked</h3>
                                <p>Danmarks smarteste loppemarkeds løsning.</p>
                                <p>Tjen ekstra penge eller gør et godt genbrugskup.</p>
                                <p>Nemt og bekvemt.</p>
                                <p>Stort som småt, genbrug er godt</p>
                            </div>
                            <div className="col-6">
                                <h3 className="fs-5">Åbningstider</h3>
                                <table class="table table-striped">
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
                            <div className="col-6">
                                <h3 className="fs-5">Kontakinformation</h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td scope="row">Genbrugsmarked</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Måløv Stationsplads 1</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">2760 Måløv</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">kontakt@genbrugsmarked.com</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">+45 31 10 77 55</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-6">
                                <h3 className="fs-5">Sociale medier</h3>
                                <a href="#"><i className="fab fa-facebook-f fa-2x" style={{color: "#3b5998"}}></i></a>
                                <a href="#"><i className="fab fa-instagram fa-2x" style={{color: "#ac2bac"}}></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}