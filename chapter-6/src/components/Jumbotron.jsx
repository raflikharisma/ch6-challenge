export default function Jumbotron() {
  return (
    <>
      <section id="jumbotron">
        <div className="container-fluid my-5">
          <div className="hero row align-items-center">
            <div className="col-lg-7 pt-lg-3 z-1">
              <h1 id="header" className="display-4 fw-bold text-body-emphasis">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <p id="hero-description" className="lead">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam..
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button id="mulai-sewa-btn" type="button" className="btn btn-lg text-light px-4 me-md-2 fw-bold">
                  <a href="/cars" className="text-light">
                    Mulai Sewa Mobil
                  </a>
                </button>
              </div>
            </div>
            <div id="img-car" className="col-lg-4 p-0 overflow-visible end-0 end-0">
              <img className="rounded-lg-3 img-fluid mt-5" src="/images/img_car (1).png" alt="" width="700" height="407" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
