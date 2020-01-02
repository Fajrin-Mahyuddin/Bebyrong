import React, { Component } from 'react'
import SideProfil from '../card/SideProfil'

export default class Content extends Component {
  state = {
    data: [],
    search: true
  }
  render() {
    return (
      <section className="post-content-area single-post-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 posts-list">
              <h1>Hasil Pencarian</h1>
              <p>Dinas ketahanan pangan</p>
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

						</div>
            <SideProfil data={this.state.data} />
					</div>
				</div>	
			</section>
    )
  }
}
