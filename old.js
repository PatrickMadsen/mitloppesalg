import Card from "./butikkerCard"
import Modal from "./butikkerModal"

export default () => {
    const partnere = []
    partnere.push({
        navn: "Genbrugsmarked",
        åbningstider: ["10:00 - 18:00", "10:00 - 18:00", "10:00 - 18:00", "10:00 - 18:00", "10:00 - 18:00", "10:00 - 16:00", "10:00 - 16:00"],
        om: "Danmarks smarteste loppemarkeds løsning. Tjen ekstra penge eller gør et godt genbrugskup. Nemt og bekvemt. Stort som småt, genbrug er godt",
        kontakt: {navn: "Genbrugsmarked", adresse: "Måløv Stationsplads 1", postnr: "2760 Målø", email: "kontakt@genbrugsmarked.com", tlf: "+45 31 10 77 55"},
        social: ["fab fa-facebook-f fa-2x px-2", "fab fa-instagram fa-2x px-2"]
    })


    return(
        <div className="butikker height-100" id="butikker">
            <div className="container">
                <div className="col-12 text-center">
                    <h3 className="fs-1">Vores Partnere</h3>
                    <table className="table">
                        <tbody className="table table-striped">
                            <tr>
                                <th scope="col">Navn</th>
                                <th scope="col">Adresse</th>
                                <th scope="col">Post nr/by</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Tlf</th>
                                <th scope="col">Mere info</th>
                            </tr>
                            <tr>
                                <td>{partnere[0].navn}</td>
                                <td>{partnere[0].kontakt.adresse}</td>
                                <td>{partnere[0].kontakt.postnr}</td>
                                <td>{partnere[0].kontakt.email}</td>
                                <td>{partnere[0].kontakt.tlf}</td>
                                <td><p><a className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#info" type="button" href="#">Se mere</a></p></td>
                            </tr>
                            <tr>
                                <td>{partnere[0].navn}</td>
                                <td>{partnere[0].kontakt.adresse}</td>
                                <td>{partnere[0].kontakt.postnr}</td>
                                <td>{partnere[0].kontakt.email}</td>
                                <td>{partnere[0].kontakt.tlf}</td>
                                <td><p><a className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#info" type="button" href="#">Se mere</a></p></td>
                            </tr>
                            <tr>
                                <td>{partnere[0].navn}</td>
                                <td>{partnere[0].kontakt.adresse}</td>
                                <td>{partnere[0].kontakt.postnr}</td>
                                <td>{partnere[0].kontakt.email}</td>
                                <td>{partnere[0].kontakt.tlf}</td>
                                <td><p><a className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#info" type="button" href="#">Se mere</a></p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}