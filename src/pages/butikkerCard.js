export default () => {
    return(
      <>
        <div className="col-lg-1 hide-sm"></div>

        <div className="col-6 col-lg-3 text-center mb-2">
        <img className="rounded-circle img-fluid" src="/genbrugsmarked-1.png" alt="Genbrugs marked" />
          <div className="pt-3">
            <h3>Genbrugsmarked</h3>
            <p>Danmarks smarteste loppemarkeds løsning.
                Tjen ekstra penge eller gør et godt genbrugskup.
                Nemt og bekvemt.
                Stort som småt, genbrug er godt
            </p>
          </div>
          <p><a className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#info" type="button" href="#">Se mere</a></p>      
        </div>

        <div className="col-lg-1 hide-sm"></div>

        <div className="col-6 col-lg-3 text-center mb-2">
          <img className="rounded-circle img-fluid" src="/fundoglund.jpg" alt="Genbrugs marked" />
            <div className="pt-3">
              <h3>Fund og Lund</h3>
              <p>Fund & Lund er et hyldemarked, reolloppemarked samt indendørs loppemarked. Vi har åbent hver dag.
              </p>
              <p><a className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#info" type="button" href="#">Se mere</a></p>
            </div>
        </div>

        <div className="col-lg-1 hide-sm"></div>

        <div className="col-6 col-lg-3 text-center mb-2">
          <img className="rounded-circle img-fluid" src="/shopiloppen.jpg" alt="Genbrugs marked" />
            <div className="pt-3">
              <h3>Shop i Loppen</h3>
              <p>Ligger du inde med en masse brugte eller nyere ting og sager, og er du helt vild med at gøre et godt køb, samt gå på jagt i de mange gode fund er Shop i Loppen lige et sted for dig.
              </p>
              <p><a className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#info" type="button" href="#">Se mere</a></p>
            </div>
        </div>
      </>
    )
}