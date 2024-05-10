export default function Testimoni() {
  return (
    <>
      <section id="fourth" className="bg-light">
        <div className="container bg-light mx-auto bg-light">
          <div className="text-center">
            <h4 className="display-5 mb-3 pt-5 text-body-emphasis">Testimonial</h4>
            <div className="col-lg-8 mx-auto justify-content-center d-flex">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner w-100">
                  <div className="carousel-item active">
                    <div className="carousel-card justify-content-center align-items-center d-flex flex-column rounded-4">
                      <div className="carousel-row row align-items-center text-lg-end text-md-center text-sm-center">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                          <img className="img-testi" src="images/testi-image.png" alt="" width="70.22px" height="80px" />
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12 text-lg-start text-sm-center">
                          <img className="rate-testi" src="/images/Rate.png" alt="" width="80px" height="16px" />
                          <p className="pt-1 pb-1 testi-paragraph mb-0">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod”
                          </p>
                          <p className="testi-author fw-semibold">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-card justify-content-center align-items-center d-flex flex-column">
                      <div className="carousel-row row align-items-center text-lg-end text-md-center text-sm-center">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                          <img className="img-testi" src="/images/testi-image.png" alt="" width="70.22px" height="80px" />
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12 text-lg-start text-sm-center">
                          <img className="rate-testi" src="/images/Rate.png" alt="" width="80px" height="16px" />
                          <p className="pt-1 pb-1 testi-paragraph mb-0">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod”
                          </p>
                          <p className="fw-semibold">John Dee 32, Bromo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="carousel-control-prev mx-0 px-0" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <svg width="57" height="68" viewBox="0 0 57 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.4836 51L21.2902 34L35.4836 17" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next mx-0 px-0" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <svg className="" width="57" height="68" viewBox="0 0 57 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5164 51L35.7098 34L21.5164 17" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
