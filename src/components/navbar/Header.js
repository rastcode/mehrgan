const Header =()=>{

    return(
        <header className="p-3 text-bg-light">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-space-around justify-content-lg-start">


                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input
                            type="search"
                            className="form-control form-control-dark text-bg"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">
                            Login
                        </button>
                        <button type="button" className="btn btn-warning">
                            Sign-up
                        </button>

                    </div>
                </div>
            </div>
        </header>

    );


}
export  default Header
