
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <a>
            <img className="navbar-brand" src="\images\logo.svg" alt="" style={{ width: '100px', height: '34px' }} />
          </a>
          <button className="btn btn-white navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title fw-bold" style={{ marginLeft: '20px' }} id="offcanvasRightLabel">BCR</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body justify-content-end">
              <ul className="navbar-nav mr-2 mb-lg-0">
                <li className="nav-item mx-3 my-1"><a className="nav-link" href="#ourservices">Our Services</a></li>
                <li className="nav-item mx-3 my-1"><a className="nav-link" href="#whyus">Why Us</a></li>
                <li className="nav-item mx-3 my-1"><a className="nav-link" href="#testimonial">Testimonial</a></li>
                <li className="nav-item mx-3 my-1"><a className="nav-link" href="#faq">FAQ</a></li>
              </ul>
              <button className="btn btn-register mx-3 my-1">Register</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
