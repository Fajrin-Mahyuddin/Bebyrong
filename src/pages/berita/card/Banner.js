import React, { Component } from 'react'
import { withAuth } from '../../../context/AuthContex';

class Banner extends Component {
	constructor(props){
		super(props);
		this.state = {
			kategori: {"semua": 0, "kegiatan": 1, "workshop": 2, "dokumen":3},
			str: ''
		}

		this.getUrl = this.getUrl.bind(this);
	}

	componentDidMount() {
		this.getUrl()
	}

	getUrl = () => {
		console.log(this.props.match);

	}
	
	
  render() {
		let url = this.props.match.url;
		let arr = url.split('/');
		let str = arr[arr.length - 1];
    return (
      <section className="banner-area relative blog-home-banner" id="home">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content blog-header-content col-lg-12">
							<h1 className="text-white text-uppercase">
								{str}
							</h1>	
							<br />
							<h3 className="text-white">
								Dinas Ketahanan Pangan Kota Makassar</h3>
						</div>	
					</div>
				</div>
			</section>
    )
  }
}

export default withAuth(Banner)