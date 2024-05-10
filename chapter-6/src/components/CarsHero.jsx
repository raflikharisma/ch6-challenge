import getAllCars from "../lib/http";

export default function CarsHero() {
  return (
    <section className="mobil">
      <div className="container-xxl">
        <div className="row">
          {/* <div className="col-lg-1 col-xxl-1 col-md-1">
            </div> */}
          <div className="col-lg-5  mx-lg-5 col-xl-5 col-xxl-5 mx-md-0 " style={{ paddingTop: "100px" }}>
            <h2 className="fw-bold" style={{ paddingRight: "10px" }}>
              Sewa & Rental Mobil Terbaik di kawasan Depok
            </h2>
            <p style={{ paddingRight: "40px" }}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <button className="btn btn-utama" onClick={getAllCars()}>Mulai Sewa Mobil</button>
          </div>
          <div className="col-lg-5 col-xl-6 col-xxl-6 mt-lg-3" style={{ paddingTop: "50px" }}>
            <img className="" width="100%" src="/images/img_car (1).png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
