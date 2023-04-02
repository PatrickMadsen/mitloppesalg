export default () => {
    return(
        <div className="vejledning">
            <div className="container width">
            <div className="text-center">
                <h3 className="fs-1">Brug for lidt vejledning?</h3>
                <p>Se vores video eller tag et kig på vores guides. </p>
                <p>Du er selvfølig altid velkommen til at skrive til vores support <a className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#support" type="button" href="#">Her</a></p>
            </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-9">
                        <div className="ratio ratio-16x9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/LjrtV5W7-T8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-3 mt-4">
                        <p>Sådan opretter du MitLoppeSalg og inviterer kommissionskunder</p>
                        <a href="https://mitloppesalg.dk/wp-content/uploads/2021/04/Oprettelse-af-Mit-salg.pdf">Oprettelse at Mit salg</a>
                    </div>
                    <div className="col-3 mt-4">
                        <p>Du er kunde hos en loppebutik/ butik og ønsker at lave dine egne labels?</p>
                        <a href="https://mitloppesalg.dk/wp-content/uploads/2021/04/Oprettelse-af-Mit-salg.pdf">Lav egne labels, som kunde i loppebutik</a>
                    </div>
                    <div className="col-3 mt-4">
                        <p>Her kan du som butik gå ind og ændre den måde dine Labels ser ud</p>
                        <a href="https://mitloppesalg.dk/wp-content/uploads/2021/04/Oprettelse-af-Mit-salg.pdf">Ændre dine Labelformer</a>
                    </div>
                </div>
            </div>
        </div>
    )
}