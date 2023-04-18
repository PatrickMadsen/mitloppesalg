import FadeLeft from "./fadeInLeft"
import FadeRight from "./fadeInRight"
import { useRef, useEffect } from "react"

export default (props) => {
    const domRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => props.set(entry.isIntersecting))
        })
        observer.observe(domRef.current)
        return () => observer.unobserve(domRef.current)
      }, [])

    return( 
        <div className="om"  id="om">
            <div className="container width" ref={domRef}>
                <FadeLeft>
                    <div className="row">
                        <div className="col-sm-5 col-12">
                            <img src="/aboutus.jpg" className="img-fluid"/>
                        </div>
                        <div className="col-sm-7 col-12 align-items-center">
                            <h3 className="fs-1 pb-5">Hvem er vi?</h3>
                            <p>MitLoppeSalg er en del af Saldi.dk, en dansk virksomhed der har udviklet
                                butiksløsninger i samarbejde med vores kunder siden 2008.
                            </p>
                            <p>Her på Mitloppesalg.dk skabes der overblik over loppemarkeds-butikker med
                                kommissionssalg/udlejning af stande. I systemet kan butikken oprette og registrere
                                nye standlejere. I oversigten har butikken det fulde overblik over hvilke stande er
                                lejet ud og hvor længe. 
                            </p>
                        </div>
                    </div>
                </FadeLeft>
                <div className="ma-top-5">
                    <FadeRight>
                        <div className="row">
                            <div className="col-sm-7 col-12 align-items-center">
                                <h3 className="fs-1 pb-5">Følg med hjemmefra</h3>
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
                            <div className="col-sm-5 col-12">
                                <img src="/fromhome.jpg" className="img-fluid float-end"/>
                            </div>
                        </div>
                    </FadeRight>
                </div>
            </div>
        </div>
    )
}