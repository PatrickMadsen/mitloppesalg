import Card from "./butikkerCard"
import Modal from "./butikkerModal"
import { useState } from "react"

export default () => {
    const [open, changeOpen] = useState("VIS FLERE")

    const change = () => {
        (open == "VIS FLERE")? changeOpen("VIS MINDRE") : changeOpen("VIS FLERE")
    }

    return(
        <div className="butikker height-100" id="butikker">
            <div className="container">
                <Modal />
                <div className="col-12 text-center">
                    <h3 className="fs-1">Vores Partnere</h3>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <Card/>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <button onClick={change} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false" aria-controls="collapse">{open}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}