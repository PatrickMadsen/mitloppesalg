import Modal from "./kontaktModal"
import { useState, useEffect, useRef } from "react"

export default (props) => {
    const [msg, updateMsg] = useState("")
    const [msgColor, setMsgColor] = useState("")

    if(typeof window !== "undefined"){
        'use strict'
        
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    setMsgColor("text-danger")
                    updateMsg("Udfyld alle felter")
                }
                form.classList.add('was-validated')
            }, false)
            })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        document.querySelector(".kontakt-form").classList.remove("was-validated")

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
            setMsgBorder("border border-danger")
            return updateMsg("Udfyld alle felter")
        }
        const result = await response.json()
        setMsgColor("text-success")
        updateMsg("Tak fordi du kontaktet os vi vil vende tilbage snarest muligt")

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
         <Modal msg={msg} msgColor={msgColor} />
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
                <p className={`mt-3 fs-5 ${msgColor}`}>{msg}</p>
                <form onSubmit={handleSubmit} className="needs-validation kontakt-form" noValidate>
                    <div className="mb-3">
                        <label htmlFor="navn" className="form-label">Navn:</label>
                        <input name="navn" placeholder="Navn" id="navn" type="text" className="form-control" aria-describedby="navn" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tlf" className="form-label">Telefon:</label>
                        <input name="tlf" type="tel" className="form-control" id="tlf" aria-describedby="tlf" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail:</label>
                        <input name="email" placeholder="example@website.com" type="email" className="form-control" id="email" aria-describedby="email" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="besked" className="form-label">Besked:</label>
                        <textarea className="form-control" id="txt" name="txt" rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}