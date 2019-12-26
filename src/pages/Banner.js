import React, { Component } from 'react'

export default class Banner extends Component {

  render() {
    return (
      <section className="relative about-banner">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h2 className="text-white text-uppercase">
								{this.props.judul}			
							</h2>	
							{/* <p className="text-white link-nav"><a href="beranda.html">Beranda </a>  <span className="lnr lnr-arrow-right"></span><a href="berita.html">Berita </a> <span className="lnr lnr-arrow-right"></span> <a href="berita-kegiatan.html">Kegiatan</a></p> */}
						</div>	
					</div>
				</div>
			</section>
    )
  }
}
