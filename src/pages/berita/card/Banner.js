import React, { Component } from 'react'
import { withAuth } from '../../../context/AuthContex';
import {Helmet} from 'react-helmet'

class Banner extends Component {
	
  render() {
		let url = this.props.match.url;
		let arr = url.split('/');
		let str = arr[arr.length - 1];
    return (
      <section className="banner-area relative blog-home-banner" id="home">	
				<Helmet>
          <title>Berita | { str}</title>
        </Helmet>
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