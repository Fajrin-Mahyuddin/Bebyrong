import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SideProfil from './SideProfil'
import queryString from 'query-string'
import Axios from 'axios'

export default class Post extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		console.log(queryString.parse(location.search));
		let id_kat = '';
		Axios.get(`/api/list/berita?kat=${id_kat}`)
			.then(respon => 
					this.setState({
						data : respon.data.data 
					})
				)
			.catch(err => alert(err))
	}
  render() {
    return (
      <section className="post-content-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 posts-list">
							{this.state.data.map((data, i) => {

							return	<div className="single-post row" key={i}>
												<div className="col-lg-3  col-md-3 meta-details">
													<div className="user-details row">
														<p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Admin</a> <span className="lnr lnr-user"></span></p>
														<p className="date col-lg-12 col-md-12 col-6"><a href="#">{data.waktu}</a> <span className="lnr lnr-calendar-full"></span></p>
														<p className="view col-lg-12 col-md-12 col-6"><a href="#">10 Dilihat</a> <span className="lnr lnr-eye"></span></p>
														<p className="comments col-lg-12 col-md-12 col-6"><a href="#">05 Komentar</a> <span className="lnr lnr-bubble"></span></p>						
													</div>
												</div>
												<div className="col-lg-9 col-md-9 ">
													<div className="feature-img">
														<img className="img-fluid" src={data.gambar} alt="" />
													</div>
													<a className="posts-title" href="blog-single.html"><h3>{data.judul}</h3></a>
													<p className="excert">
													</p>
													<a href={`/berita/detail/${data.id}`} className="primary-btn">Lihat lebih banyak</a>
														<hr />
												</div>
											</div>

							})}
						
						
						
							{/* <div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Admin</a> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><a href="#">18 November, 2019</a> <span className="lnr lnr-calendar-full"></span></p>
										<p className="view col-lg-12 col-md-12 col-6"><a href="#">10 Dilihat</a> <span className="lnr lnr-eye"></span></p>
										<p className="comments col-lg-12 col-md-12 col-6"><a href="#">05 Komentar</a> <span className="lnr lnr-bubble"></span></p>
									</div>
								</div>
								<div className="col-lg-9 col-md-9 ">
									<div className="feature-img">
										<img className="img-fluid" src="/img/blog/feature-img2.jpg" alt="" />
									</div>
									<a className="posts-title" href="blog-single.html"><h3>Mengenalkan Pola Makan B2Sa, Dinas Ketahanan Pangan Kota Makassar Gelar Sosialisasi Bagi Anak Sekolah</h3></a>
									<p className="excert">
											Makassar - Bidang Konsumsi dan Penganekaragaman Pangan Lokal mengadakan Sosialisasi Penganekaragaman Pangan Bagi Anak Sekolah yang bertempat di SD Inpres Antang 1 pada Selasa, 30 Juli 2019 . Kegiatan ini merupakan kegiatan ke-5 (lima) dari 6 (enam) rangkaian kegiatan sosialisasi pada tahun anggaran 2019.
									</p>
									<a href="blog-single.html" className="primary-btn">Lihat lebih banyak</a>
								</div>
							</div>
							<div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Admin</a> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><a href="#">18 November, 2019</a> <span className="lnr lnr-calendar-full"></span></p>
										<p className="view col-lg-12 col-md-12 col-6"><a href="#">10 Dilihat</a> <span className="lnr lnr-eye"></span></p>
										<p className="comments col-lg-12 col-md-12 col-6"><a href="#">05 Komentar</a> <span className="lnr lnr-bubble"></span></p>						
									</div>
								</div>
								<div className="col-lg-9 col-md-9">
									<div className="feature-img">
										<img className="img-fluid" src="/img/blog/feature-img3.jpg" alt="" />
									</div>
									<a className="posts-title" href="blog-single.html"><h3>DKP Gelar Pengembangan Dan Pembinaan Kawasan Rumah Pangan Lestari</h3></a>
									<p className="excert">
											Dinas Ketahanan Pangan Kota Makassar mengadakan Kegiatan Pembinaan dan Pengembangan Kawasan Rumah Pangan Lestari di Kelurahan Bangkala Kecamatan Manggala, Rabu (12/06/2019). Kegiatan ini dihadiri langsung oleh Kepala Dinas Ketahanan Kota Makassar, Ibu Dra. Hj. Sri Sulsilawati, M.Si beserta Kepala Bidang dan Staf. Dalam Kegiatan ini, dihadirkan pula Bapak Rahmansyah Jamal dari PT NASA (Natural Nusantara) sebagai Narasumber dan Produsen pupuk organik.
									</p>
									<a href="blog-single.html" className="primary-btn">Lihat lebih banyak</a>
								</div>
							</div>
							<div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Admin</a> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><a href="#">18 November, 2019</a> <span className="lnr lnr-calendar-full"></span></p>
										<p className="view col-lg-12 col-md-12 col-6"><a href="#">10 Dilihat</a> <span className="lnr lnr-eye"></span></p>
										<p className="comments col-lg-12 col-md-12 col-6"><a href="#">05 Komentar</a> <span className="lnr lnr-bubble"></span></p>						
									</div>
								</div>
								<div className="col-lg-9 col-md-9">
									<div className="feature-img">
										<img className="img-fluid" src="/img/blog/feature-img4.jpg" alt="" />
									</div>
									<a className="posts-title" href="blog-single.html"><h3>Jelang Idul Fitri, DKP Makassar Pantau Stok Ketersediaan Pangan</h3></a>
									<p className="excert">
										Dinas Ketahanan Pangan Kota Makassar melakukan pengecekan terhadap ketersediaan kebutuhan pangan selama bulan ramadhan di pasar modern dan tradisional (Pannampu dan Gelael), Selasa (28/5/2019).
									</p>
									<a href="blog-single.html" className="primary-btn">Lihat lebih banyak</a>
								</div>
							</div>														 */}
                <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Previous">
                                <span aria-hidden="true">
                                    <span className="lnr lnr-chevron-left"></span>
                                </span>
                            </a>
                        </li>
                        <li className="page-item"><a href="#" className="page-link">01</a></li>
                        <li className="page-item active"><a href="#" className="page-link">02</a></li>
                        <li className="page-item"><a href="#" className="page-link">03</a></li>
                        <li className="page-item"><a href="#" className="page-link">04</a></li>
                        <li className="page-item"><a href="#" className="page-link">09</a></li>
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Next">
                                <span aria-hidden="true">
                                    <span className="lnr lnr-chevron-right"></span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
						</div>
            <SideProfil data={this.state.data} />
					</div>
				</div>	
			</section>
    )
  }
}
