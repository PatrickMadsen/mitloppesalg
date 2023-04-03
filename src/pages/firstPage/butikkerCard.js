import Data from "../../../db/loppemarkeder.json"

export default (props) => {
    return(
      <>
        {Data.loppemarkeder.map((i, index)=> {
          if(index >= 8){
            return ""
          }
          return(
            <div className="col-6 col-lg-3 text-center mb-5" key={index}>
              <a className="bounce-ball" key={index} data-bs-toggle="modal" data-bs-target="#info" type="button" href="#"><img className="rounded-circle img-fluid" src={i.link} title={i.navn} alt="Genbrugs marked" /></a>
              <p>{i.navn}</p>
            </div>
          )
        })}
        <div className="collapse row .d-flex justify-content-center" id="collapse">
          {Data.loppemarkeder.map((i, index)=> {
            if(index >= 8){
              return(
                <div className="col-6 col-lg-3 text-center mb-5" key={index}>
                  <a className="bounce-ball" key={index} data-bs-toggle="modal" data-bs-target="#info" type="button" href="#"><img className="rounded-circle img-fluid" src={i.link} title={i.navn} alt="Genbrugs marked" /></a>
                  <p>{i.navn}</p>
                </div>
              )
            }
          })}
        </div>
      </>
    )
}