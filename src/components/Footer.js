import React from 'react'
import  './styles/Footer.css';
const Footer = () => {
  return (
    <>

    
    <footer id="footer" className="footer">
      <div className="container-fluid">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-3 col-6 footer-links text-center text-md-start">
            <h4>ShopFrieger</h4>
            <ul>
              <li><a href="#">Tentang ShopFrieger</a></li>
              <li><a href="#">Hak Kekayaan Intelektual</a></li>
              <li><a href="#">Karir</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Bridestory</a></li>
              <li><a href="#">ShopFrieger Parents</a></li>
              <li><a href="#">Mitra Blog</a></li>
              <li><a href="#">ShopFrieger Affiliate Program</a></li>
            </ul>
            <h4>ShopFrieger</h4>
            <ul>
              <li><a href="#">Tagihan & Top Up</a></li>
              <li><a href="#">Tukar Tambah Handphone</a></li>
              <li><a href="#">ShopFrieger COD</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-links footer-contact text-center text-md-start">
            <h4>Jual</h4>
            <ul>
              <li><a href="#">Pusat Edukasi Seller</a></li>
              <li><a href="#">Mitra Toppers</a></li>
              <li><a href="#">Daftar Official Store</a></li>
            </ul>
            <h4>Bantuan dan Panduan</h4>
            <ul>
              <li><a href="#">ShopFrieger Care</a></li>
              <li><a href="#">Syarat & Ketentuan</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Mitra</a></li>
            </ul>
            <h4>Ikuti Kami</h4>
            <div className="social-links d-flex mt-4">
              <a target="_blank" style={{background: '#0d6efd'}} href="https://www.facebook.com/profile.php?id=100078030621794&mibextid=ZbWKwL" className="facebook"><i className="bi bi-facebook text-white"></i></a>
              <a target="_blank" style={{background: '#0dcaf0'}} href="https://twitter.com/WajuBerru?s=20&t=MSbSYrXF0x--NmeToTSJwA" className="linkedin"><i className="bi bi-twitter text-white"></i></a>

              <a target="_blank" style={{background: '#dc3545'}} href="https://wa.link/8am4je" className="linkedin"><i className="bi bi-pinterest text-white"></i></a>

              <a target="_blank" style={{background: '#d63384'}} href="http://instagram.com/wajuberru" className="instagram"><i className="bi bi-instagram text-white"></i></a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 footer-info">
            <a href="https://goo.gl/maps/3A48iE5czVWgNMoB9" className="logo d-flex align-items-center">
              <img src="../asset/img/img-homePage/section-home/footer.png" width="100%" alt="" />
            </a>
            <h2 className="text-center">© 2009 - 2023, PT. ShopFrieger.</h2>
          </div>
        </div>
      </div>

      <p className="m-1"></p>
      <p className="mb-1"></p>
    </footer>
    </>
  )
}

export default Footer