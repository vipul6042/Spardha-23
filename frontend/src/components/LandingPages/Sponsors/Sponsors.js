import React from 'react';
import './Sponsors.css';
import Carousel from '../Home/Carousel/Carouselhp';
// const Sponsors = () => {
//   return (
//     <>
//     <div>

//             <div className="col-lg-4 col-md-4 col-4 row_one">
//               <a href="https://myrankers.com/">
//                 <img
//                   src="/images/sponsors/2022/rankers.png"
//                   className="img-fluid_sponsors img-sponsor_top"
//                   width='0'
//                   alt="image_alt"
//                 />
//               </a>
//             </div>
//             <div className="col-lg-4 col-md-4 col-4  row_one">
//             <a href="https://iitiantrader.in/">
//                 <img
//                   src="/images/sponsors/2022/iitianTrader.png"
//                   className="img-fluid_sponsors img-sponsor_top"
//                   alt="image_alt"
//                 />
//               </a>
//             </div>
//           </div>

//           <div className="row_sponsors align-items-center justify-content-center div-sponsor ">
//             <div className="col-lg-3 col-md-3 col-4  ">
//               <a href="https://amul.com/">
//                 <img
//                   src="/images/sponsors/2022/amul.png"
//                   className="img-fluid_sponsors img-sponsor"
//                   alt="image_alt"
//                 />
//               </a>
//             </div>
//             <div className="col-lg-3 col-md-3 col-4 ">
//               <a href="https://www.ktmindia.com/">
//                 <img
//                   src="/images/sponsors/2022/KTM_Logo.png
//                   "
//                   className="img-fluid_sponsors img-sponsor"
//                   alt="image_alt"
//                 />
//               </a>
//             </div>
//             <div className="col-lg-3 col-md-3 col-4 ">
//               <a href="https://www.toyotabharat.com/">
//                 <img
//                   src="/images/sponsors/2022/toyota.png"
//                   className="img-fluid_sponsors img-sponsor"
//                   alt="image_alt"
//                 />
//               </a>
//             </div>
//           </div>
//           <div className="row_sponsors align-items-center justify-content-center pb-5 div-sponsor">
//             <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.amarujala.com/">
//                   <img
//                     src="/images/sponsors/2022/AmarUjala.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsors" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/ipsator.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.ballebaazi.com/">
//                   <img
//                     src="/images/sponsors/2022/ballebaazi_logo.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://hotelcastillo.in/">
//                   <img
//                     src="/images/sponsors/2022/castillo.jpeg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.paramountdealz.com/">
//                   <img
//                     src="/images/sponsors/2022/paramountdealz.jpeg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsorus" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/cut-&-looks-.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsorus" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/DGPcafe.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://pahuna-kitchen.business.site/">
//                   <img
//                     src="/images/sponsors/2022/NamahPahuna.jpeg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://terracottacafe.in/">
//                   <img
//                     src="/images/sponsors/2022/TERRACOTTA.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://sumangaljewellers.business.site/">
//                   <img
//                     src="/images/sponsors/2022/sumangaljewellers.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsorus" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/Shri_rajbandhu.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsorus" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/VishalBakers.jpeg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsoru" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/sandeep_sports.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsoru" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/Sankalan.jpeg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>

//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsoru" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/laxmi_cycle.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsoru" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/englishmasala.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsoru" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/cafeDeCoop.jpeg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://spardha.org.in/sponsoru" class="disabled">
//                   <img
//                     src="/images/sponsors/2022/aao_ji.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//           </div>
//           {/* <div className="row_sponsors justify-content-center pt-5">
//               <div className="col-md-7 heading-section_sponsors text-center ftco-animate_sponsors">
//                 <h2 className="mb-1">Our Past Sponsors</h2>
//               </div>
//           </div> */}
//             {/* <hr style="margin-left: 30px; margin-right: 30px;"/> */}
//           <div className="row_sponsors align-items-center justify-content-center pb-5 div-sponsor">
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.jkcement.com/">
//                   <img
//                     src="/images/sponsors/2018/jkcement.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://paytm.com/">
//                   <img
//                     src="/images/sponsors/others/paytm.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.pepsico.com/">
//                   <img
//                     src="/images/sponsors/others/pepsi.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://in.puma.com/">
//                   <img
//                   src="/images/sponsors/others/redbull.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.redbull.com/">
//                   <img
//                     src="/images/sponsors/others/redbull.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.reebok.com/us">
//                   <img
//                     src="/images/sponsors/others/reebok.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.mahindra.com/">
//                   <img
//                     src="/images/sponsors/others/mahindra.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.heromotocorp.com/en-in/">
//                   <img
//                     src="/images/sponsors/others/hero.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.fastrack.in/">
//                   <img
//                     src="/images/sponsors/2018/fastrack.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.ntpc.co.in/">
//                   <img
//                     src="/images/sponsors/2018/ntpc.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.sail.co.in/">
//                   <img
//                     src="/images/sponsors/2018/sail.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.iocl.com/">
//                   <img
//                     src="/images/sponsors/2018/iocl.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.hindustanpetroleum.com/">
//                   <img
//                     src="/images/sponsors/2018/hpcl.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.obcindia.co.in/">
//                   <img
//                     src="/images/sponsors/2018/orientalbank.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>

//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.adityabirla.com/">
//                   <img
//                     src="/images/sponsors/others/adityabirla.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.swiggy.com/">
//                   <img
//                     src="/images/sponsors/2018/swiggy.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://amul.com/">
//                   <img
//                     src="/images/sponsors/others/amul.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.bankofindia.co.in/">
//                   <img
//                     src="/images/sponsors/2018/boi.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.ucobank.com/">
//                   <img
//                     src="/images/sponsors/2018/ucobank.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.facebook.com/patna95bigfm/">
//                   <img
//                     src="/images/sponsors/2018/bigfm.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.vlccwellness.com/India/">
//                   <img
//                     src="/images/sponsors/2018/vlcc.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://zebronics.com/">
//                   <img
//                     src="/images/sponsors/2018/zebronics.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://heinisports.com/">
//                   <img
//                     src="/images/sponsors/2018/heini.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="http://www.aquvio.com/">
//                   <img
//                     src="/images/sponsors/others/aquvio.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.bankofbaroda.com/">
//                   <img
//                     src="/images/sponsors/others/bankofbaroda.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://bsa.in/">
//                   <img
//                     src="/images/sponsors/others/bsa.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>

//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.cafecoffeeday.com/">
//                   <img
//                     src="/images/sponsors/others/ccd.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.cosco.in/">
//                   <img
//                     src="/images/sponsors/others/cosco.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.hindustantimes.com/">
//                   <img
//                     src="/images/sponsors/others/hindustantimes.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://timesofindia.indiatimes.com/">
//                   <img
//                     src="/images/sponsors/others/toi.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.sbi.co.in/">
//                   <img
//                     src="/images/sponsors/others/sbi.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://hercules.in/">
//                   <img
//                     src="/images/sponsors/others/hercules.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://in.linkedin.com/company/geosenz">
//                   <img
//                     src="/images/sponsors/others/geosenz.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.godrej.com/">
//                   <img
//                     src="/images/sponsors/others/godrej.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.dominos.co.in/">
//                   <img
//                     src="/images/sponsors/others/dominos.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www8.hp.com/in/en/home.html">
//                   <img
//                     src="/images/sponsors/others/hp.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="http://inextepaper.jagran.com/">
//                   <img
//                     src="/images/sponsors/others/inext.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.intel.in/">
//                   <img
//                     src="/images/sponsors/others/intel.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.itcportal.com/">
//                   <img
//                     src="/images/sponsors/others/itc.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.jabong.com/">
//                   <img
//                     src="/images/sponsors/others/jabong.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>

//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.microsoft.com/en-in">
//                   <img
//                     src="/images/sponsors/others/microsoft.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.grabon.in/">
//                   <img
//                     src="/images/sponsors/others/grabon.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>

//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.pizzahut.com/">
//                   <img
//                     src="/images/sponsors/others/pizza.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.uspolo.org/">
//                   <img
//                     src="/images/sponsors/others/uspolo.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.smilefoundationindia.org/">
//                   <img
//                     src="/images/sponsors/others/smilefoundation.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="http://www.upsacs.in/">
//                   <img
//                     src="/images/sponsors/others/upsacs.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://toniguy.com/">
//                   <img
//                     src="/images/sponsors/others/toniguy.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://fistosports.com/">
//                   <img
//                     src="/images/sponsors/2018/fisto.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://ntdin.tv/">
//                   <img
//                     src="/images/sponsors/2018/ntd.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="http://www.unitefoundation.co.uk/">
//                   <img
//                     src="/images/sponsors/others/unitefoundation.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.petaindia.com/">
//                   <img
//                     src="/images/sponsors/others/peta.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="http://www.newstimes.co.in/">
//                   <img
//                     src="/images/sponsors/others/newstimes.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.facebook.com/Indian-Idol-Academy-Patna-807443452643835/">
//                   <img
//                     src="/images/sponsors/2018/indian-idol.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.geetjewels.in/">
//                   <img
//                     src="/images/sponsors/2018/geet.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.jagran.com/">
//                   <img
//                     src="/images/sponsors/others/dainikjagran.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.amarujala.com/">
//                   <img
//                     src="/images/sponsors/2018/amarujala.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://manpasand.co.in/">
//                   <img
//                     src="/images/sponsors/2018/manpasand.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://byjus.com/">
//                   <img
//                     src="/images/sponsors/2018/byjus.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.ambitiongurukul.com/">
//                   <img
//                     src="/images/sponsors/2018/ambition-gurukul.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.imsindia.com/">
//                   <img
//                     src="/images/sponsors/2018/ims.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.extramarks.com/">
//                   <img
//                     src="/images/sponsors/2018/extramarks.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://iesmaster.org/">
//                   <img
//                     src="/images/sponsors/2018/ies-master.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.aakash.ac.in/">
//                   <img
//                     src="/images/sponsors/others/aakash.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://whataftercollege.com/">
//                   <img
//                     src="/images/sponsors/2018/wac.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="http://www.doorpix.in/">
//                   <img
//                     src="/images/sponsors/others/doorpix.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.heritagehospitals.com/">
//                   <img
//                     src="/images/sponsors/2018/heritage.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.diamondhotel.co.in/">
//                   <img
//                     src="/images/sponsors/2018/diamond.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://hotelgrapevine.in/">
//                   <img
//                     src="/images/sponsors/2018/grapevine.jpeg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://chetmani.com/">
//                   <img
//                     src="/images/sponsors/2018/chetmani.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://in.linkedin.com/company/the-education-tree">
//                   <img
//                     src="/images/sponsors/2018/the-education-tree.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.baskinrobbinsindia.com/">
//                   <img
//                     src="/images/sponsors/others/br.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="http://www.btwindia.com/">
//                   <img
//                     src="/images/sponsors/others/btw.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.thebelgianwaffle.co/">
//                   <img
//                     src="/images/sponsors/2018/belgian.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://gopaljee.com">
//                   <img
//                     src="/images/sponsors/others/gopaljee.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://knockoutvns.com/">
//                   <img
//                     src="/images/sponsors/2018/knockout.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.prestogifts.com/">
//                   <img
//                     src="/images/sponsors/2018/presto.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.doodhbooth.com/">
//                   <img
//                     src="/images/sponsors/2018/doodh-booth.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.zomato.com/varanasi/ming-garden-lanka/menu">
//                   <img
//                     src="/images/sponsors/2018/ming-garden.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.facebook.com/basantbahardelight/">
//                   <img
//                     src="/images/sponsors/2018/basant-bahar.jpg"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.shriinfotec.com/">
//                   <img
//                     src="/images/sponsors/others/infotec.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.facebook.com/OranzBodySpaSalon/">
//                   <img
//                     src="/images/sponsors/others/oranz.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.redfmindia.in/">
//                   <img
//                     src="/images/sponsors/others/redfm.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://sapphirewatches.com/">
//                   <img
//                     src="/images/sponsors/others/sapphire.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>

//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.seedinfotech.com/">
//                   <img
//                     src="/images/sponsors/others/seed.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.indiamart.com/she-creations-varanasi/">
//                   <img
//                     src="/images/sponsors/others/shecreations.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>

//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://webcomsystem.net/">
//                   <img
//                     src="/images/sponsors/others/webcom.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>

//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.sitinetworks.com/">
//                   <img
//                     src="/images/sponsors/others/siti.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>

//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="https://www.thesouledstore.com/">
//                   <img
//                     src="/images/sponsors/others/souledstore.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>

//               <div className="col-lg-3 col-md-3 col-4 pt-5 ">
//                 <a href="http://www.vmart.co.in/">
//                   <img
//                     src="/images/sponsors/others/vmart.png"
//                     className="img-fluid_sponsors img-sponsor"
//                     alt="image_alt"
//                   />
//                 </a>
//               </div>
//           </div>
//         </div>
     
//     </>
//   );
// };

import styles from './Events.module.css';


const Sponsors = () => {

  return (
    <section id="events" className={`${styles.ftco_section} ${styles.events}`}>
      <div className='bg'>
        <Carousel />
      </div>
      <div className={`${styles.container} ${styles.pb_1}`}>
        <div
          className={`${styles.row} ${styles.justify_content_center} ${styles.mb_5}`}
        >
          <div
            className={`${styles.col_md_7} ${styles.heading_section} ${styles.text_center}`}
          >
            
           
          </div>
        </div>
      <div className={styles.maindiv}>
       <h2 className={`${styles.mb_1} ${styles.H2}`} >
            Our Past Sponsors
            </h2>


            <div className={styles.scrollablediv}>




        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.jkcement.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/jkcement.png"
              alt=""
    
            />
          </a>
             <p>JK Cement</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
           <a href="https://spardha.org.in/sponsoru">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/aao_ji.png"
              alt=""
           
            />
           </a>
             <p>Aao ji</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://spardha.org.in/sponsoru">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/cafeDeCoop.jpeg"
              alt=""
            />
          </a>
             <p>cafeDeCoop</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://spardha.org.in/sponsoru">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/englishmasala.jpg"
              alt=""
            />
          </a>
             <p>English Masala</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://spardha.org.in/sponsoru">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/laxmi_cycle.png"
              alt=""
    
            />
          </a>
             <p>Laxmi Cycles</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://spardha.org.in/sponsoru">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/Sankalan.jpeg"
              alt=""
           
            />
           </a>
             <p>Sankalan</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://spardha.org.in/sponsorus">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/sandeep_sports.png"
              alt=""
            />
          </a>
             <p>Sandeep Sports</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://spardha.org.in/sponsorus">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/VishalBakers.jpeg"
              alt=""
            />
          </a>
             <p>Vishal Bakers</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://spardha.org.in/sponsorus">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/Shri_rajbandhu.png"
              alt=""
    
            />
          </a>
             <p>Shri Raj Bandhu</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://sumangaljewellers.business.site/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/sumangaljewellers.jpg"
              alt=""
           
            />
           </a>
             <p>Sumangal Jewelers</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://terracottacafe.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/TERRACOTTA.png"
              alt=""
            />
          </a>
             <p>Terra Cotta Cafe</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://pahuna-kitchen.business.site/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/NamahPahuna.jpeg"
              alt=""
            />
          </a>
             <p>Pahuna Kitchen</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://spardha.org.in/sponsorus">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/DGPcafe.png"
              alt=""
    
            />
          </a>
             <p>DGP Cafe</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://spardha.org.in/sponsorus">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/cut-&-looks-.png"
              alt=""
           
            />
           </a>
             <p>Cuts & Looks</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://www.paramountdealz.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/paramountdealz.jpeg"
              alt=""
            />
          </a>
             <p>Paramount Dealz</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://hotelcastillo.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/castillo.jpeg"
              alt=""
            />
          </a>
             <p>Hotel Castillo</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.toyotabharat.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/toyota.png"
              alt=""
    
            />
          </a>
             <p>Toyota</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://www.amarujala.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/amarujala.png"
              alt=""
           
            />  </a>
             <p>Amar Ujala</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://myrankers.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/rankers.png"
              alt=""
            />
               </a>
             <p>My Rankers</p>

          </div>
          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://www.ballebaazi.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/ipsator.png"
              alt=""
            />
               </a>
             <p>Ipsator</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://www.ballebaazi.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/ballebaazi_logo.png"
              alt=""
            />
          </a>
             <p>Balle Baazi</p>

          </div>          

        </div>
       
       
       
       
       
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
       <a href="https://paytm.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/paytm.png"
              alt=""
    
            />
          </a>
             <p>PayTM</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://www.pepsico.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/pepsi.png"
              alt=""
           
            />
           </a>
             <p>Pepsi</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://in.puma.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/puma.png"
              alt=""
            />
          </a>
             <p>Puma</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
           <a href="https://www.redbull.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/redbull.png"
              alt=""
            />
          </a>
             <p>Red Bull</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.reebok.com/us">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/reebok.png"
              alt=""
    
            />
          </a>
             <p>Reebok</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
      <a href="https://www.mahindra.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/mahindra.png"
              alt=""
           
            />  </a>
             <p>Mahindra</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
            <a href="https://www.heromotocorp.com/en-in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/hero.png"
              alt=""
            />
               </a>
             <p>Hero Motocorp.</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://www.fastrack.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/fastrack.jpg"
              alt=""
            />
          </a>
             <p>Fasttrack</p>

          </div>          

        </div>


          

          
       
       
       
       
       
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
       <a href="https://www.ntpc.co.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/ntpc.png"
              
              alt=""
    
            />
          </a>
             <p>NTPC</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://www.sail.co.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/sail.png"
              alt=""
           
            />
           </a>
             <p>Sail</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://www.iocl.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/iocl.png"
              alt=""
            />
          </a>
             <p>IOCL</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://www.hindustanpetroleum.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/hpcl.png"
              alt=""
            />
          </a>
             <p>HPCL</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
      <a href="https://www.obcindia.co.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/orientalbank.jpg"
              alt=""
    
            />
          </a>
             <p>Oriental Bank</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://www.adityabirla.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/adityabirla.png"
              alt=""
           
            />  </a>
             <p>Aditya Birla </p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
             <a href="https://www.swiggy.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/swiggy.jpg"
              alt=""
            />
               </a>
             <p>Swiggy</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://www.bankofindia.co.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/boi.png"
              alt=""
            />
          </a>
             <p>Bank of India</p>

          </div>          

        </div>


          

          
       
       
       
       
       
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.ucobank.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/ucobank.png"
              alt=""
    
            />
          </a>
             <p>UCO Bank</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://www.facebook.com/patna95bigfm/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/bigfm.png"
              alt=""
           
            />
           </a>
             <p>BIG FM</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://www.vlccwellness.com/India/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/vlcc.jpg"
              alt=""
            />
          </a>
             <p>VLCC</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
           <a href="https://zebronics.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/zebronics.png"
              alt=""
            />
          </a>
             <p>Zebronics</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://heinisports.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/heini.png"
              alt=""
    
            />
          </a>
             <p>Heini Sports</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="http://www.aquvio.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/aquvio.png"
              alt=""
           
            />  </a>
             <p>Aquivo</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://www.bankofbaroda.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/bankofbaroda.png"
              alt=""
            />
               </a>
             <p>Bank of Baroda</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
           <a href="https://bsa.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/bsa.png"
              alt=""
            />
          </a>
             <p>BSA</p>

          </div>          

        </div>


          

          
       
       
       
       
       
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
         <a href="https://www.cafecoffeeday.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/ccd.png"
              alt=""
    
            />
          </a>
             <p>Cafe Coffee Day</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
           <a href="https://www.cosco.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/cosco.png"
              alt=""
           
            />
           </a>
             <p>Cosco</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
          <a href="https://www.hindustantimes.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/hindustantimes.png"
              alt=""
            />
          </a>
             <p>Hindustan Times</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
           <a href="https://timesofindia.indiatimes.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/toi.png"
              alt=""
            />
          </a>
             <p>Times Of India</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.sbi.co.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/sbi.png"
              alt=""
    
            />
          </a>
             <p>SBI</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
           <a href="https://hercules.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/hercules.png"
              alt=""
           
            />  </a>
             <p>Hercules</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://in.linkedin.com/company/geosenz">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/geosenz.png"
              alt=""
            />
               </a>
             <p>GeoSenz</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://www.godrej.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/godrej.png"
              alt=""
            />
          </a>
             <p>Godrej</p>

          </div>          

        </div>


          

          
       
       
       
       
       
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.dominos.co.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/dominos.png"
              alt=""
    
            />
          </a>
             <p>Dominos</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
           <a href="https://www8.hp.com/in/en/home.html">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/hp.png"
              alt=""
           
            />
           </a>
             <p>HP</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
            <a href="http://inextepaper.jagran.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/inext.png"
              alt=""
            />
          </a>
             <p>iNext</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://www.intel.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/intel.png"
              alt=""
            />
          </a>
             <p>Intel</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.itcportal.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/itc.png"
              alt=""
    
            />
          </a>
             <p>ITC</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
           <a href="https://www.jabong.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/jabong.png"
              alt=""
           
            />  </a>
             <p>Jabong</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
          <a href="https://www.microsoft.com/en-in">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/microsoft.png"
              alt=""
            />
               </a>
             <p>Microsoft</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
           <a href="https://www.grabon.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/grabon.png"
              alt=""
            />
          </a>
             <p>GrabOn</p>

          </div>          

        </div>


          

          
       
       
       
       
       
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.pizzahut.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/pizza.png"
              alt=""
    
            />
          </a>
             <p>Pizza Hut</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
           <a href="https://www.uspolo.org/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/uspolo.png"
              alt=""
           
            />
           </a>
             <p>US Polo</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://www.smilefoundationindia.org/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/smilefoundation.png"
              alt=""
            />
          </a>
             <p>Smile Foundation</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
         <a href="http://www.upsacs.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/upsacs.png"
              alt=""
            />
          </a>
             <p>UPSACS</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://toniguy.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/toniguy.png"
              alt=""
    
            />
          </a>
             <p>Toni & Guy</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
           <a href="https://fistosports.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/fisto.png"
              alt=""
           
            />  </a>
             <p>Fisto</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://ntdin.tv/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/ntd.png"
              alt=""
            />
               </a>
             <p>NTD IN</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="http://www.unitefoundation.co.uk/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/unitefoundation.png"
              alt=""
            />
          </a>
             <p>Unite Foundation</p>

          </div>          

        </div>


          

          
       
       
       
       
       
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.petaindia.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/peta.png"
              alt=""
    
            />
          </a>
             <p>Peta India</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="http://www.newstimes.co.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/newstimes.png"
              alt=""
           
            />
           </a>
             <p>News Times</p>
          </div>


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
             <a href="https://www.facebook.com/Indian-Idol-Academy-Patna-807443452643835/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/indian-idol.jpg"
              alt=""
            />
          </a>
             <p>Indian Idol</p>

          </div>




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://www.geetjewels.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/geet.png"
              alt=""
            />
          </a>
             <p>Geet Jewels</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.jagran.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/dainikjagran.png"
              alt=""
    
            />
          </a>
             <p>Dainik Jagran</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://www.amarujala.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2022/AmarUjala.jpg"
              alt=""
           
            />  </a>
             <p>Amar Ujala</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://manpasand.co.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/manpasand.jpg"
              alt=""
            />
               </a>
             <p>Manpasand</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://byjus.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/byjus.jpg"
              alt=""
            />
          </a>
             <p>BYJU's</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.ambitiongurukul.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/ambition-gurukul.jpg"
              alt=""
    
            />
          </a>
             <p>Ambition Gurukul</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
           <a href="https://www.imsindia.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/ims.jpg"
              alt=""
           
            />  </a>
             <p>IMS</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="https://www.extramarks.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/extramarks.png"
              alt=""
            />
               </a>
             <p>Extramarks</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://iesmaster.org/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/ies-master.jpg"
              alt=""
            />
          </a>
             <p>IES Master</p>

          </div>          

        </div>


          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.aakash.ac.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/aakash.png"
              alt=""
    
            />
          </a>
             <p>Aakash</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://whataftercollege.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/wac.png"
              alt=""
           
            />  </a>
             <p>What After College</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
           <a href="http://www.doorpix.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/doorpix.png"
              alt=""
            />
               </a>
             <p>Doorpix</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
         <a href="https://www.heritagehospitals.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/heritage.png"
              alt=""
            />
          </a>
             <p>Heritage</p>

          </div>          

        </div>

          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
         <a href="https://www.diamondhotel.co.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/diamond.png"
              alt=""
    
            />
          </a>
             <p>Diamond</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
          <a href="https://hotelgrapevine.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/grapevine.jpeg"
              alt=""
           
            />  </a>
             <p>Grapevine</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
          <a href="https://chetmani.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/chetmani.jpg"
              alt=""
            />
               </a>
             <p>Chetmani</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://in.linkedin.com/company/the-education-tree">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/the-education-tree.jpg"
              alt=""
            />
          </a>
             <p>The Education Tree</p>

          </div>          

        </div>

          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://knockoutvns.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/knockout.png"
              alt=""
    
            />
          </a>
             <p>Knockout</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
           <a href="https://www.prestogifts.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/presto.png"
              alt=""
           
            />  </a>
             <p>Presto</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
             <a href="https://www.doodhbooth.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/doodh-booth.png"
              alt=""
            />
               </a>
             <p>Doodh Booth</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
           <a href="https://www.zomato.com/varanasi/ming-garden-lanka/menu">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/ming-garden.jpg"
              alt=""
            />
          </a>
             <p>Ming Garden</p>

          </div>          

        </div>

          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
        <a href="https://www.facebook.com/basantbahardelight/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/2018/basant-bahar.jpg"
              alt=""
    
            />
          </a>
             <p>Basant Bahar</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
         <a href="https://www.shriinfotec.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/infotec.png"
              alt=""
           
            />  </a>
             <p>Shri Infotec</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
             <a href="https://www.facebook.com/OranzBodySpaSalon/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/oranz.png"
              alt=""
            />
               </a>
             <p>Oranz Body Spa Salon</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
         <a href="https://www.redfmindia.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/redfm.png"
              alt=""
            />
          </a>
             <p>Red FM</p>

          </div>          

        </div>

          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
          <a href="https://sapphirewatches.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/sapphire.png"
              alt=""
    
            />
          </a>
             <p>Sapphire Watches</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
         <a href="https://www.seedinfotech.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/seed.png"
              alt=""
           
            />  </a>
             <p>Seed Infotech</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
              <a href="https://www.indiamart.com/she-creations-varanasi/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/shecreations.png"
              alt=""
            />
               </a>
             <p>She Creations</p>

          </div>
       




          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="3"
          >
          <a href="https://webcomsystem.net/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/webcom.png"
              alt=""
            />
          </a>
             <p>Web Com System</p>

          </div>          

        </div>

          

          
        <div className={`${styles.row}`}>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="0"
          >
         <a href="https://www.sitinetworks.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/siti.png"
              alt=""
    
            />
          </a>
             <p>Siti Networks</p>
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="1"
          >
           <a href="https://www.thesouledstore.com/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/souledstore.png"
              alt=""
           
            />  </a>
             <p>The Souled Store</p>
          </div>
         


          <div
            className={`${styles.col_2} ${styles.padding} `}
            id="2"
         
          >
             <a href="http://www.vmart.co.in/">
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src="/images/sponsors/others/vmart.png"
              alt=""sors
            />
               </a>
             <p>VMart</p>

          </div>
      
        </div>


          

          

          
         
        

        

          

          
          

          
        </div>   </div>
      </div>
      
    </section>
  );
};

export default Sponsors;
