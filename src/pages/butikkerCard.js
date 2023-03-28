export default () => {
    return(
        <>
        <div className="col-3 card">
            <img className="rounded-circle card-img-top" src="/genbrugsmarked-1.jpg" alt="Genbrugs marked" />
            <div className="card-body">
                <h5 className="card-title">Genbrugsmarked</h5>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary">Se mere</button>
            </div>
        </div>
            <div className="col-3 card">
            <img className="rounded-circle card-img-top" src="/genbrugsmarked-1.jpg" alt="Genbrugs marked" />
            <div className="card-body">
                <h5 className="card-title">Genbrugsmarked</h5>
                <button type="button" className="btn btn-primary">Se mere</button>
            </div>
        </div>
        <div className="col-3 card">
            <img className="rounded-circle card-img-top" src="/genbrugsmarked-1.jpg" alt="Genbrugs marked" />
            <div className="card-body">
                <h5 className="card-title">Genbrugsmarked</h5>
                <button type="button" className="btn btn-primary">Se mere</button>
            </div>
        </div>
    </>
    )
}