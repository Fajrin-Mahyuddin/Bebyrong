import React, { Component } from 'react'

export default class Galery extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}


  render() {
    return (
      <section className="gallery-area section-gap" id="gallery">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-70 col-lg-8">
							<div className="title text-center">
								<h2 className="mb-10">Galeri</h2>
								<p>Dinas Ketahanan Pangan Kota Makassar</p>
							</div>
						</div>
					</div>	
                    
					<ul className="filter-wrap filters col-lg-12">
							<li className="active" data-filter="*">Semua</li>
							<li data-filter=".Ketersediaan">Kegiatan</li>
							<li data-filter=".Kerawanan">Workshop</li>	
							<li data-filter=".Konsumsi">Document</li>
          </ul>

					{/* <ul className="filter-wrap filters col-lg-12 no-padding">
							<li className="active" data-filter="*">Semua Bidang</li>
							<li data-filter=".Ketersediaan">Ketersediaan & Produksi Pangan</li>
							<li data-filter=".Kerawanan">Kerawanan Distribusi & Cadangan Pangan</li>	
							<li data-filter=".Konsumsi">Konsumsi & Penganekaragaman Pangan</li>
							<li data-filter=".Keamanan">Keamanan Pangan</li>
          </ul> */}
     
					<div className="filters-content">
							<div className="row grid">
									<div className="col-lg-4 col-md-6 col-sm-6 all Ketersediaan">
										<div className="single-gallery">
											<img className="img-fluid" src="img/g1.jpg" alt="" />
										</div>	                          
									</div>                           
									<div className="col-lg-4 col-md-6 col-sm-6 all Kerawanan">
										<div className="single-gallery">
											<img className="img-fluid" src="img/g2.jpg" alt="" />
										</div>                            
									</div>                     
							</div>
					</div>
                    
				</div>
			</section>
    )
  }
}
