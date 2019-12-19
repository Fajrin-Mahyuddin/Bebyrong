import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-area">
					<div className="footer-widget-wrap">
						<div className="container">
							<div className="row section-gap">
								<div className="col-lg-4  col-md-4 col-sm-4">
									<div className="single-footer-widget">
										<h4>Jam Buka</h4>
										<ul className="hr-list">
											<li className="d-flex justify-content-between">
												<span>Senin - Kamis</span> <span>07.00 am - 06.00 pm</span>
											</li>
											<li className="d-flex justify-content-between">
												<span>Jum'at</span> <span>07.00 am - 05.00 pm</span>
											</li>																			
										</ul>
									</div>
								</div>
								<div className="col-lg-4  col-md-4 col-sm-4">
									<div className="single-footer-widget">
										<h4>Alamat Kantor</h4>
										<p>
											Jl. Ahmad Yani No.2 Lantai 6, Bulo Gading, Kec. Ujung Pandang, Kota Makassar, Sulawesi Selatan 90171
										</p>
										<p className="number">
											0821-9737-8412
										</p>
									</div>
								</div>		
								<div className="col-lg-4  col-md-4 col-sm-4">
									<div className="single-footer-widget">
										<h4>Google Maps</h4>
										<div className="footer_area_three">
											<section id="custom_html-4" className="widget_text widget widget_custom_html">
												<div className="textwidget custom-html-widget">
													<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15895.25925938263!2d119.4082024!3d-5.133504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3dabe01dae6ec980!2sKantor+Walikota+Makassar!5e0!3m2!1sid!2sid!4v1558405137907!5m2!1sid!2sid" width="400" height="300" frameBorder="0" style={{border:0}} allowFullScreen="">
													</iframe>
												</div>
											</section>                
										</div>
									</div>
								</div>	
							</div>					
						</div>					
					</div>

				<div className="footer-bottom-wrap">
					<div className="container">
						<div className="row footer-bottom d-flex justify-content-between align-items-center">
							<p className="col-lg-8 col-mdcol-sm-6 -6 footer-text m-0">
        Copyright &copy; {new Date().getFullYear()} Dinas Ketahanan Pangan Kota Makassar
							</p>
							<ul className="col-lg-4 col-mdcol-sm-6 -6 social-icons text-right">
									<li><a href="#"><i className="fa fa-google"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="https://www.instagram.com/explore/locations/287921884583106/kantor-ketahanan-pangan-kota-makassar/"><i className="fa fa-instagram"></i></a>
								</li>          
	                        </ul>
						</div>						
					</div>
				</div>
			</footer>
    )
  }
}
