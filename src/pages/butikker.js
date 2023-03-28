import Card from "./butikkerCard"
import Modal from "./butikkerModal"

export default () => {
    return(
        <div className="butikker height-100" id="section1">
            <div className="container-fluid">
                <Modal />
                <div className="row row-cols-auto">
                    <Card />
                </div>
            </div>
        </div>
    )
}