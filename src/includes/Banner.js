import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <section className="banner-area">		
				<div className="container">
					<div className="row fullscreen align-items-center justify-content-between">
						<div className="col-lg-12 banner-content">
							<h1 className="text-white">Selamat Datang</h1>
							<h6 className="text-white">
                <p>
								Dinas Ketahanan Pangan Kota Makassar
                </p>
							</h6>
							<a href="#" className="primary-btn text-uppercase">Informasi Lebih Lanjut</a>
						</div>
					</div>
				</div>					
			</section>
    )
  }
}
