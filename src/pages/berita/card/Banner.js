import React, { Component } from 'react'
import queryString from 'query-string'

export default class Banner extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
		
	}
  render() {
    return (
      <section className="banner-area relative blog-home-banner" id="home">	
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content blog-header-content col-lg-12">
							<h1 className="text-white">
								Semua
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
