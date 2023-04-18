import {useRef, useEffect} from "react"

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
        <div className="system"  id="system">
            <div className="container width" ref={domRef}>
                <div className="row">
                    <h2 className="text-center fs-1 pb-5">Vores system</h2>
                    <div className="col-sm-4 col-12 mt-5">
                        <img src="/computer-ipad.png" className="img-fluid" />
                    </div>
                    <div className="col-sm-1 string"><div className="vr vr-blurry hr-size"></div></div>
                    <div className="col-sm-7 col-12 mt-5">
                        <h3>Kassesystem til kommissions-loppemarked</h3>
                        <p className="text-muted fst-italic">–Systemet kan også bruges til alm. butik, restauranter, café, bar og loppemarked samt loppebutik.</p>
                        <p>Med knap 20 års erfaring i branchen kan din butik komme trykt i gang med
                            Loppesalget, problemfrit og nemt. Vi har ca. 2 ugers leveringstid fra aftalen er på
                            plads, fri support & hjælp til tilpasninger og rettelser i systemet.
                        </p>
                    </div>
                    <div className="col-sm-4 col-12 pa-top-10">
                        <img src="/kasse.jpg" className="img-fluid" />
                    </div>
                    <div className="col-sm-1 pa-top-10 string"><div className="vr vr-blurry hr-size"></div></div>
                    <div className="col-sm-7 col-12 pa-top-5">
                        <h3>Kasseudstyr</h3>
                        <p>Vi leverer komplet kassesystem og kasseapparater, som kan være med til at opfylde dine behov, om en effektiv forretning, hvor du kan fokusere på dine kunder. Vi har et nemt og overskueligt kassesystem, der også indeholder et komplet regnskabsprogram der tillader bogføring, fakturering og lagerstyring.</p>
                        <p>Hos MitLoppeSalg.dk tilbyder vi et moderne touch kassesystem. Vores system kan tilpasses til forskellige brancher og det kører i en webbrowser på en Touch PC, på jeres egen PC eller Mac, på en iPad eller tablet – alt efter hvad I ønsker at benytte. Systemet er leveret af Saldi.dk og lever op til alle forventninger.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}