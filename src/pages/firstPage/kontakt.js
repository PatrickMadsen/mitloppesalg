import Modal from "./kontaktModal"
import { useState, useEffect, useRef } from "react"

export default (props) => {
    const [msg, updateMsg] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
          navn: event.target.navn.value,
          tlf: event.target.tlf.value,
          email: event.target.email.value,
          txt: event.target.txt.value
        }
    
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/form'
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

    const domRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => props.set(entry.isIntersecting))
        })
        observer.observe(domRef.current)
        return () => observer.unobserve(domRef.current)
      }, [])

    return(
        <>
         <Modal />
        <div className="kontakt"  id="kontakt">
            <div className="container width" id="kontakt" ref={domRef}>
               
                <div className="row d-flex justify-content-center text-center">
                    <h3 className="col-12 fs-1">Kontakt os</h3>
                    <div className="col-8 pa-top-5">
                        <p> Er du ved at starte Loppemarked med
                            kommissionssalg op, eller allerede er i gang, men
                            søger et nyt system med det hele i en løsning?

                            Så er det muligt hos SALDI.DK.
                        </p>
                        <p>
                            Saldi-regnskab, Saldi-POS og MitLoppeSalg
                            ”under samme tag” som en samlet butiks-løsning
                            med både software og hardware.

                            For kontakt og yderlig information, brug venligst kontaktformularen.
                        </p>
                        <p>Vis du har brug for support <a className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#support" type="button" href="#">KLIK HER</a></p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
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
                    <div className="mb-3">
                        <label htmlFor="besked" className="form-label">Besked:</label>
                        <textarea className="form-control" id="txt" name="txt" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p className="mt-3">{msg}</p>
            </div>
        </div>
        </>
    )
}