import Card from "./butikkerCard"
import Modal from "./butikkerModal"

export default () => {
    return(
        <div className="container-fluid">
            <Modal />
            <h2 className="center-text">Lej en stand hos en af vores partnere!</h2>
            <div className="mt-5"></div>
            <div className="row justify-content-around">
                <Card />
            </div>
        </div>
    )
}