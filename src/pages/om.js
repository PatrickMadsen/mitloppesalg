export default () => {
    return(
        <div className="height-100" id="section1">
            <div className="container pa-top-5">
                <div className="row">
                    <img src="/aboutus.jpg" className="col-6"/>
                    <div className="col-6 align-items-center">
                        <h3 className="fs-1 col-12 pb-5">Hvem er vi?</h3>
                        <p>MitLoppeSalg.dk er en portal der bruges i loppemarkeds-butikker 
                            med kommissionssalg/udlejning af stande. Udviklet af Saldi.dk.

                            I systemet kan butikken oprette, registrere nye standlejere og i
                            oversigten har butikken det fulde overblik over hvilke stande
                            der er lejet ud og hvor længe de er lejet ud.
                        </p>
                    </div>
                </div>
                <div className="ma-top-5">
                    <div className="row">
                        <div className="col-6 align-items-center">
                            <h3 className="fs-1 col-12 pb-5">Følg med hjemmefra</h3>
                            <p>
                                I MitLoppeSalg kan den enkelte stand-lejer selv, via et login,
                                komme ind at se hvornår og hvilke varer der er solgt fra egen stand.
                            </p>
                            <p>

                                MitLoppeSalg giver stand-lejere mulighed for hjemmefra
                                at skrive deres egne labels med tekster, priser og stregkode,
                                som derefter udskrives i butikken.

                                På MitLoppeSalg.dk kan Loppebutikken få vist
                                logo, billeder samt informationer om butikken.
                            </p>
                        </div>
                        <div className="col-6">
                            <img src="/fromhome.jpg" className="img-fluid float-end"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}