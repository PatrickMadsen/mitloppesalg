export default () => {
    return(
        <div className="forside container-fluid height-100">
        <div>
            <div className="text-center pa-top-10"> 
                <p>Kom godt i gang med</p>
                <h1>LOPPESALG</h1>
            </div>
            <div className="space"></div>
        </div>
        <div className="d-flex justify-content-center">
            <a href="#section1">
                <button type="button" className="btn btn-lg btn-primary ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"></path>
                    </svg>
                    Læs mere
                </button>
            </a>
        </div>
        </div>
    )
}