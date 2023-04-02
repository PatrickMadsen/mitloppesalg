import {useState} from "react"

export default () => {
    const [msg, updateMsg] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
          navn: event.target.navn.value,
          tlf: event.target.tlf.value,
          email: event.target.email.value,
          type: event.target.type.value,
          txt: event.target.txt.value
        }
    
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/support'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }
    
        const response = await fetch(endpoint, options)
        if(response.status == 400){
            console.log(response.data)
            return updateMsg("Udfyld alle felter")
        }
        const result = await response.json()
        
        updateMsg("Tak fordi du kontaktet os vi vil vende tilbage snarest")

        event.target.navn.value = ""
        event.target.tlf.value = ""
        event.target.email.value = ""
        event.target.txt.value = ""

    }

    return(
        <div className="modal fade" id="support" tabIndex="-1" aria-labelledby="support" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-4" id="exampleModalLabel">Support</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h3>Er du standlejer i en butik?</h3>
                                <p>Hvis du er standlejer i en butik bedes du henvende dig direkte til butikken.
                                Har du problemer med at bruge MitLoppesalg.dk udfyldes formularen.
                                </p>
                                <div className="space"></div>
                                <h3>Benytter din butik
                                MitLoppeSalg?</h3>
                                <p>Hvis din butik benytter MitLoppeSalg.dk
                                og der er spørgsmål eller udfordringer
                                er du velkommen til at ringe os op
                                eller udfylde oplysninger, så
                                vil vi kontakte jer hurtigst
                                muligt.</p>
                            </div>
                            <form className="col-12 col-lg-6" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="navn" className="form-label">Navn:</label>
                                    <input name="navn" placeholder="Navn" id="navn" type="text" className="form-control" aria-describedby="navn"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tlf" className="form-label">Telefon:</label>
                                    <input name="tlf" type="tel" className="form-control" id="tlf" aria-describedby="tlf" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">E-mail:</label>
                                    <input name="email" placeholder="example@website.com" type="email" className="form-control" id="email" aria-describedby="email"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input className="form-check-input" type="radio" name="type" id="radio1" value="Jeg er standlejer i en butik og har brug for hjælp" />
                                    <label className="form-check-label" htmlFor="radio1">Jeg er standlejer i en butik og har brug for hjælp</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <input className="form-check-input" type="radio" name="type" id="radio2" value="Butikken bruger MitLoppeSalg og ønsker hjælp" />
                                    <label className="form-check-label" htmlFor="radio2">Butikken bruger MitLoppeSalg og ønsker hjælp</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <input className="form-check-input" type="radio" name="type" id="radio3" value="Jeg er interesseret i et tilbud eller mere information om MitLoppesalg" />
                                    <label className="form-check-label" htmlFor="radio3">Jeg er interesseret i et tilbud eller mere information om MitLoppesalg</label>
                                </div>
                                <div className="mb-3">
                                    <p className="text-muted fst-italic small">Hvis du er Standlejer i en butik bedes du henvende dig til butikken før du kontakter os</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="besked" className="form-label">Besked:</label>
                                    <textarea className="form-control" id="txt" name="txt" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            <p>{msg}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}