import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
      <section className="services-area pb-120">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-70 col-lg-8">
							<div className="title text-center">
								<h1 className="mb-10">Fitur Aplikasi Mr. Bebyrong</h1>
								<p>Inovasi Program Dinas Ketahanan Pangan Kota Makassar.</p>
							</div>
						</div>
					</div>						
					<div className="row">
						<div className="col-lg-4">
							<div className="single-service">
								<div className="thumb">
									<img src="img/about/s1.jpg" alt="" />
								</div>
								<a href="#">
									<h4>Pilih Komoditas</h4>
								</a>
								<p>
									Beli produk komoditas petani lorong.
								</p>								
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-service">
								<div className="thumb">
									<img src="img/about/s2.jpg" alt="" />
								</div>
								<a href="#">
									<h4>Berita Ketahanan Pangan</h4>
								</a>	
								<p>
									Dapatkan informasi dan berita ketahanan pangan terbaru.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-service">
								<div className="thumb">
									<img src="img/about/s3.jpg" alt="" />
								</div>
								<a href="#">
									<h4>Lokasi Pasar</h4>
								</a>	
								<p>
									Tersedia informasi stok seluruh pasar Kota Makassar.
								</p>
							</div>
						</div>												
					</div>
				</div>	
			</section>
    )
  }
}
