import React, { Component } from 'react'

export default class BeritaTerkini extends Component {
  render() {
    return (
      <section className="blog-area section-gap" id="blog">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-70 col-lg-8">
							<div className="title text-center">
								<h1 className="mb-10">Berita Terkini</h1>
								<p>Dinas Ketahanan Pangan Kota Makassar</p>
							</div>
						</div>
					</div>					
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6 single-blog">
							<div className="thumb">
								<img className="img-fluid" src="img/b1.jpg" alt=""/>								
							</div>
							<p className="date">18 Nov 2019</p>
							<a href="blog-single.html"><h4>Menghelat Lomba Cipta Menu Antar Kwt Se Kota Makassar</h4></a>
							<p>
								Makassar – Pemerintah Kota Makassar melalui Dinas Ketahanan Pangan menghelat Lomba Cipta Menu Pangan Lokal 2019.
							</p>									
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 single-blog">
							<div className="thumb">
								<img className="img-fluid" src="img/b2.jpg" alt=""/>								
							</div>
							<p className="date">19 Nov 2019</p>
							<a href="blog-single.html"><h4>Mengenalkan Pola Makan B2Sa</h4></a>
							<p>
								Makassar - Bidang Konsumsi dan Penganekaragaman Pangan Lokal mengadakan Sosialisasi Penganekaragaman Pangan Bagi Anak Sekolah.
							</p>			
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 single-blog">
							<div className="thumb">
								<img className="img-fluid" src="img/b3.jpg" alt=""/>								
							</div>
							<p className="date">20 Nov 2019</p>
							<a href="blog-single.html"><h4>DKP Gelar Pengembangan Dan Pembinaan Kawasan Rumah Pangan Lestari</h4></a>
							<p>
								Dinas Ketahanan Pangan Kota Makassar mengadakan Kegiatan Pembinaan dan Pengembangan Kawasan Rumah Pangan Lestari di Kelurahan Bangkala Kecamatan Manggala.
							</p>							
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 single-blog">
							<div className="thumb">
								<img className="img-fluid" src="img/b4.jpg" alt=""/>								
							</div>
							<p className="date">21 Nov 2019</p>
							<a href="blog-single.html"><h4>Harga Cabai Naik Rp. 35.000/Kg Di Pasar Tradisional.</h4></a>
							<p>
									Masyarakat Perum. Villa Mutiara Asri V Kel. Bulorokeng mengadakan Panen Cabai bersama dengan Dinas Ketahanan Pangan Kota Makassar pada Selasa 21 Mei 2019.
							</p>									
						</div>							
					</div>
				</div>	
			</section>
    )
  }
}
