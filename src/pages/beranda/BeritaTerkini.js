import React, { Component } from 'react'
import Axios from 'axios'
import moment from 'moment';

export default class BeritaTerkini extends Component {
		constructor(props) {
			super(props);
			this.state = {
				data_berita : [],
				isLoading: true
			}
		}

	componentDidMount() {
		
		Axios.get(`/api/list/berita`)
		.then((respons) => 
				this.setState({
					data_berita: respons.data.data,
					isLoading:false
				})
				
		 ).catch(err => alert(err))
	}


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
					{(this.state.isLoading) ? 'Loading Data....':
						this.state.data_berita.map((dataLoop, i) => {
							if(i >= 4) { 
							const kategori = dataLoop.kategori.toLowerCase()
							return <div className="col-lg-3 col-md-6 col-sm-6 single-blog" key={i}>
											<div className="thumb">
												<img className="img-fluid" src={dataLoop.gambar} alt=""/>								
											</div>
											<p className="date">{moment(dataLoop.updated_at).format('LL')}</p>
											<a href={`/berita/${kategori}/detail/${dataLoop.slug}`}><h4>{dataLoop.judul}</h4></a>
										</div>
							}
							return null
						})
					}

					</div>
				</div>	
			</section>
    )
  }
}
