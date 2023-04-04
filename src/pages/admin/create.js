import DataDb from "../../../db/loppemarkeder.json"

export default (props) => {

    const handler = async (e) => {
        e.preventDefault()

        const obj = {
            kontakt: {
                adresse: e.target.adresse.value,
                email: e.target.email.value,
                postnr: e.target.postnr.value,
                tlf: e.target.tlf.value
            },
            link: e.target.link.value,
            navn: e.target.navn.value,
            om: e.target.om.value,
            social: [
                DataDb.loppemarkeder.map((i, index) => {
                    if(index === props.index){
                        return {
                            img: i.img,
                            link: i.link
                        }
                    }
                })
            ],
            åbningstider: [
                e.target.mandag.value,
                e.target.tirsdag.value,
                e.target.onsdag.value,
                e.target.torsdag.value,
                e.target.fredag.value,
                e.target.lørdag.value,
                e.target.søndag.value
            ]
        }

        DataDb.loppemarkeder.push(obj)

        const JSONdata = JSON.stringify(DataDb)
        const endpoint = '/api/writeFile'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSONdata
        }
    
        const response = await fetch(endpoint, options)
        if(response.status == 400){
            console.log(response.data)
            return ""
        }
    }

    return(
        <div className="modal fade" id="create" tabIndex="-1" aria-labelledby="create" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-4" id="exampleModalLabel">Support</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handler}>
                            <div className="mb-3">
                                <label htmlFor="navn" className="form-label">Navn:</label>
                                <input name="navn" id="navn" type="text" className="form-control" aria-describedby="navn"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tlf" className="form-label">Telefon:</label>
                                <input name="tlf" type="tel" className="form-control" id="tlf" aria-describedby="tlf" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">E-mail:</label>
                                <input name="email" type="email" className="form-control" id="email" aria-describedby="email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="adresse" className="form-label">Adresse:</label>
                                <input name="adresse" type="txt" className="form-control" id="adresse" aria-describedby="adresse"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="postnr" className="form-label">Post nr:</label>
                                <input name="postnr" type="txt" className="form-control" id="postnr" aria-describedby="postnr"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="link" className="form-label">navn på billede fil: <i>eksempel: /billede.jpg</i></label>
                                <input name="link" type="txt" className="form-control" id="link" aria-describedby="link"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="open" className="form-label">Åningstider:</label>
                                <p>Mandag: <input name="mandag" type="txt" className="form-control" id="mandag" aria-describedby="mandag"/></p>
                                <p>Tirsdag: <input name="tirsdag" type="txt" className="form-control" id="tirsdag" aria-describedby="tirsdag"/></p>
                                <p>Onsdag: <input name="onsdag" type="txt" className="form-control" id="onsdag" aria-describedby="onsdag"/></p>
                                <p>Torsdag: <input name="torsdag" type="txt" className="form-control" id="torsdag" aria-describedby="torsdag"/></p>
                                <p>Fredag: <input name="fredag" type="txt" className="form-control" id="fredag" aria-describedby="fredag"/></p>
                                <p>Lørdag: <input name="lørdag" type="txt" className="form-control" id="lørdag" aria-describedby="lørdag"/></p>
                                <p>Søndag: <input name="søndag" type="txt" className="form-control" id="søndag" aria-describedby="søndag"/></p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="om" className="form-label">Om:</label>
                                <textarea className="form-control" id="om" name="om" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}