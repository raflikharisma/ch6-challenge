export default function Faq() {
  return (
    <>
      <section id="sixth">
        <div className="container-fluid">
          <div className="faq row bg-light">
            <div className="faq-header col text-start">
              <h1>Frequently Asked Question</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            </div>
            <div className="col">
              <div className="accordion" id="accordionFlushExample">
                <div className="accordion-item border-2 border-2">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-2 border-2">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-2 border-2">
                  <h2 className="accordion-header border-2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but
                      just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-2 border border-2-2">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourth" aria-expanded="false" aria-controls="flush-collapseFourth">
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div id="flush-collapseFourth" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but
                      just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-2 border-2">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifth" aria-expanded="false" aria-controls="flush-collapseFifth">
                      Bagaimana jika terjadi kecelakaan
                    </button>
                  </h2>
                  <div id="flush-collapseFifth" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but
                      just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
