import DataDb from "../../../db/loppemarkeder.json"
import { useState } from "react"

export default (props) => {
    const [img, setImg] = useState("")
    const [msg, setMsg] = useState("")

    const socialNames = {
        facebook: "fab fa-facebook-f fa-2x",
        twitter: "fab fa-twitter fa-2x",
        google: "fab fa-google fa-2x",
        instagram: "fab fa-instagram fa-2x",
        linkedin: "fab fa-linkedin-in fa-2x",
        whatsapp: "fab fa-whatsapp fa-2x"
    }

    const addSocial = () => {
        const social = document.getElementById("social")
        const p = document.createElement("p")
        p.textContent = "Hvilket sociale medie: "
        const p2 = document.createElement("p")
        p2.textContent = "link til deres sociale medie: "

        const newElement = document.createElement("INPUT")
        newElement.setAttribute("type", "text")
        newElement.setAttribute("name", "socialImg[]")
        newElement.setAttribute("class", "form-control")

        const newElement2 = document.createElement("INPUT")
        newElement2.setAttribute("type", "text")
        newElement2.setAttribute("name", "socialLink[]")
        newElement2.setAttribute("class", "form-control")

        social.appendChild(p).appendChild(newElement)

        social.appendChild(p2).appendChild(newElement2)
    }

    const image = (e) => {
        setImg(e.target.files[0])
    }

    const handler = async (e) => {
        e.preventDefault()
        const adresse = e.target.adresse.value
        const email = e.target.email.value
        const postnr = e.target.postnr.value
        const tlf = e.target.tlf.value
        const navn = e.target.navn.value
        const om = e.target.om.value
        const mandag = e.target.mandag.value
        const tirsdag = e.target.tirsdag.value
        const onsdag = e.target.onsdag.value
        const torsdag = e.target.torsdag.value
        const fredag = e.target.fredag.value
        const lørdag = e.target.lørdag.value
        const søndag = e.target.søndag.value

        if(adresse == "" || email == "" || postnr == "" || tlf == "" || navn == "" || om == "" || mandag == "" || tirsdag == "" || onsdag == "" || torsdag == "" || fredag == "" || lørdag == "" || søndag == "" || img == ""){
            return setMsg("Udfyld alle felter")
        }

        const socialImg = Array.from(document.getElementsByName("socialImg[]"))
        const socialLink = Array.from(document.getElementsByName("socialLink[]"))   
        
        const link = `/${img.name}`

        const upload = async () => {        
            const body = new FormData()
            body.append("file", img)
            const response = await fetch("/api/upload", {
              method: "POST",
              body
            })
        }

        upload()

        const obj = {
            kontakt: {
                adresse: adresse,
                email: email,
                postnr: postnr,
                tlf: tlf
            },
            link: link,
            navn: navn,
            om: om,
            social: [
                socialImg.map((i, index) => {
                    return {
                        img: socialNames[socialImg[index].value.toLower()],
                        link: socialLink[index].value
                    }
                }) 
            ],
            åbningstider: [
                mandag,
                tirsdag,
                onsdag,
                torsdag,
                fredag,
                lørdag,
                søndag
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
                                <label htmlFor="img" className="form-label">Upload billede: </label>
                                <input onChange={image} name="img" type="file" className="form-control" id="img" aria-describedby="img"/>
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
                            <div className="mb-3" id="social">
                                <label htmlFor="social" className="form-label">Social Medier: </label>
                                <p>Hvilket sociale medie: <i>f.eks. facebook</i><input name="socialImg[]" type="txt" className="form-control" aria-describedby="social"/></p>
                                <p>link til deres sociale medie: <input name="socialLink[]" type="txt" className="form-control" aria-describedby="social"/></p>
                            </div>
                            <button onClick={addSocial} type="button" className="btn btn-primary">Create Social Media</button>
                            <div className="mb-3">
                                <label htmlFor="om" className="form-label">Om:</label>
                                <textarea className="form-control" id="om" name="om" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <p>{msg}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}