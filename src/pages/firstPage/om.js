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
                        <div className="col-5">
                            <img src="/aboutus.jpg" className="img-fluid"/>
                        </div>
                        <div className="col-7 align-items-center">
                            <h3 className="fs-1 pb-5">Hvem er vi?</h3>
                            <p>MitLoppeSalg.dk er en portal der bruges i loppemarkeds-butikker  med kommissionssalg/udlejning af stande. Udviklet af Saldi.dk.I systemet kan butikken oprette og registrere nye standlejere. I oversigten har butikken det fulde overblik over hvilke stande er lejet ud og hvor længe.</p>
                        </div>
                    </div>
                </FadeLeft>
                <div className="ma-top-5">
                    <FadeRight>
                        <div className="row">
                            <div className="col-7 align-items-center">
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
                            <div className="col-5">
                                <img src="/fromhome.jpg" className="img-fluid float-end"/>
                            </div>
                        </div>
                    </FadeRight>
                </div>
            </div>
        </div>
    )
}