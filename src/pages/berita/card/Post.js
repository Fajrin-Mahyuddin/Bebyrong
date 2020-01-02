import React, { Component } from 'react'
import SideProfil from './SideProfil'
import Axios from 'axios'
import Pagination from './Pagination'
import { withAuth } from '../../../context/AuthContex';


class Post extends Component {
	constructor(props){
		super(props);
		this.state = {
			url: this.props.match.url,
			data: [],
			page: 1,
			meta: {},
			preBtn: 'disable',
			nexBtn: '',
			kategori: {"semua": 0, "kegiatan": 1, "workshop": 2, "dokumen":3},
			isLoading: true
		}
		this.toPage = this.toPage.bind(this);
		this.getBerita = this.getBerita.bind(this);
	}
	componentDidMount() {
		// this.getBerita()
		let arr = this.state.url.split('/');
		let str = arr[arr.length - 1];
		let id_kat = this.state.kategori[str];

		Axios.get(`/api/list/berita?kat=${id_kat}&page=${this.state.page}`)
			.then(respon =>{ 
					this.setState({
						data : respon.data.data, 
						meta : respon.data.meta,
						isLoading: false 
					})
				})
			.catch(err => alert(err))
	}

	getBerita = () => {
		
	}

	toPage = (number) => {
			number.preventDefault();
			// alert(number.target.id)
			this.setState({
				page: number.target.id
			}, () => this.getBerita())
	}

  render() {
		const pageNumber = []
		for(let i = 1; i<= Math.ceil(this.state.meta.total / this.state.meta.per_page); i++) {
			pageNumber.push(i);
		}

		if(this.state.isLoading) {
			return (
			<section className="post-content-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 posts-list">
							Loading Data...
						</div>
					</div>
				</div>
			</section>
			)
		}
		
    return (
      <section className="post-content-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 posts-list">
							{this.state.data.map((data, i) => {
							const kategori = data.kategori.toLowerCase()
							return	<div className="single-post row" key={i}>
												<div className="col-lg-3  col-md-3 meta-details">
													<div className="user-details row">
														<p className="user-name col-lg-12 col-md-12 col-6"><a href="#">Admin</a> <span className="lnr lnr-user"></span></p>
														<p className="date col-lg-12 col-md-12 col-6"><a href="#">{data.waktu}</a> <span className="lnr lnr-calendar-full"></span></p>
														{/* <p className="view col-lg-12 col-md-12 col-6"><a href="#">10 Dilihat</a> <span className="lnr lnr-eye"></span></p> */}
														<p className="comments col-lg-12 col-md-12 col-6"><a href="#">{data.jumlahKomentar} Komentar</a> <span className="lnr lnr-bubble"></span></p>						
													</div>
												</div>
												<div className="col-lg-9 col-md-9 ">
													<div className="feature-img">
														<img className="img-fluid" src={data.gambar} alt={data.judul} />
													</div>
													<a className="posts-title" href={`/berita/${kategori}/detail/${data.slug}`}><h3>{data.judul}</h3></a>
													<p className="excert">
													</p>
													<a href={`/berita/${kategori}/detail/${data.slug}`} className="primary-btn">Lihat lebih banyak</a>
														<hr />
												</div>
											</div>

							})}

							<Pagination 
									pageNumber={pageNumber} 
									current_page={this.state.meta.current_page} 
									toPage={this.toPage} 
							/>

						</div>
            <SideProfil data={this.state.data} />
					</div>
				</div>	
			</section>
    )
  }
}

export default withAuth(Post)