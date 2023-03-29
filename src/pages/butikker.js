import Card from "./butikkerCard"
import Modal from "./butikkerModal"

export default () => {
    return(
        <div className="butikker height-100">
            <div className="container">
                <Modal />
                <div className="col-12 text-center">
                    <h3 className="fs-1">Vores Partnere</h3>
                </div>
                <div className="row mt-5">
                    <Card />
                </div>
            </div>
        </div>
    )
}