import React, { Component } from 'react'

export default class Video extends Component {
  render() {
    return (
      <section className="home-about-area section-gap">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 home-about-left">
							<h1>Aplikasi Mr. Beby Rong</h1>
								<br />Inovasi Program Dinas Ketahanan Pangan Kota Makassar. 
								Aplikasi beli bayar produksi petani lorong ini dapat diunduh di Playstore anda.   
							<p><a href="https://play.google.com/store/apps/details?id=ps.bebyrong&hl=in"><img src="/img/playstore.png" alt="Bebyrong" /></a></p>
						</div>

						<div className="col-lg-6 home-about-right">
							<iframe width="550" height="360"
							src="https://www.youtube.com/embed/KSxIjHufPB8">
							</iframe>
						</div>
					</div>
				</div>	
			</section>
    )
  }
}
