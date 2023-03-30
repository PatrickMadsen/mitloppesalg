export default (props) => {

  const partnere = [
    "/genbrugsmarked-1.png",
    "/fundoglund.jpg",
    "/shopiloppen.jpg",
    "/genbrugsmarked-1.png",
    "/fundoglund.jpg",
    "/shopiloppen.jpg",
    "/genbrugsmarked-1.png",
    "/fundoglund.jpg",
    "/shopiloppen.jpg",
    "/genbrugsmarked-1.png",
    "/fundoglund.jpg",
    "/shopiloppen.jpg",
    "/shopiloppen.jpg",
    "/genbrugsmarked-1.png",
    "/fundoglund.jpg",
    "/shopiloppen.jpg",
    "/shopiloppen.jpg",
    "/genbrugsmarked-1.png",
    "/fundoglund.jpg",
    "/shopiloppen.jpg",
  ]
  console.log(props)
    return(
      <>
        {partnere.map((i, index)=> {
          if(index >= 8){
            return ""
          }
          return(
            <div className="col-6 col-lg-3 text-center mb-5" key={index}>
              <a className="bounce-ball" data-bs-toggle="modal" data-bs-target="#info" type="button" href="#"><img className="rounded-circle img-fluid" src={i} alt="Genbrugs marked" /></a>
            </div>
          )
        })}
        <div className="collapse row .d-flex justify-content-center" id="collapse">
          {partnere.map((i, index)=> {
            if(index >= 8){
              return(
                <div className="col-6 col-lg-3 text-center mb-5" key={index}>
                  <a className="bounce-ball" data-bs-toggle="modal" data-bs-target="#info" type="button" href="#"><img className="rounded-circle img-fluid" src={i} alt="Genbrugs marked" /></a>
                </div>
              )
            }
          })}
        </div>
      </>
    )
}