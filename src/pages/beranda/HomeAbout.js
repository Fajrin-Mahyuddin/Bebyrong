import React, { Component } from 'react'

export default class HomeAbout extends Component {
  render() {
    return (
      <section className="home-about-area section-gap">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 home-about-left">
							<h4>Kepala Dinas Ketahanan Pangan Kota Makassar</h4>
							<p>
								Dra.Hj. SRI SULSILAWATI, M.Si
							</p>
							<a href="#" className="primary-btn">Informasi Lebih Lanjut</a>
						</div>
						<div className="col-lg-6 home-about-right">
							<img className="img-fluid" src="img/about-img.jpg" alt="" />
						</div>
					</div>
				</div>	
			</section>
    )
  }
}
