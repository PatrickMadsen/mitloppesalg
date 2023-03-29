export default () => {
    return(
        <div className="container height-100">
            <div className="row pa-top-5 d-flex justify-content-center text-center">
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
                </div>
            </div>
            <form>
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
                    <label htmlFor="navn" className="form-label"></label>
                    <textarea className="form-control" id="txt" name="txt" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}