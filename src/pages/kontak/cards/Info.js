import React from 'react' 
import FormMsg from './FormMsg'

const Info = () => {
    return (
      <section className="contact-page-area section-gap">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 d-flex flex-column address-wrap">
							<div className="single-contact-address d-flex flex-row">
								<div className="icon">
									<span className="lnr lnr-home"></span>
								</div>
								<div className="contact-details">
									<h5>Kantor Dinas Ketahanan Pangan Kota Makassar</h5>
									<p>
											Jl. Ahmad Yani No.2 Lantai 6, Kota Makassar, Sulawesi Selatan 90171
									</p>
								</div>
							</div>
							<div className="single-contact-address d-flex flex-row">
								<div className="icon">
									<span className="lnr lnr-phone-handset"></span>
								</div>
								<div className="contact-details">
									<h5>0821-9737-8412</h5>
									<p>Senin & Jum'at (07.00 am - 06.00 am)</p>
								</div>
							</div>
							<div className="single-contact-address d-flex flex-row">
								<div className="icon">
									<span className="lnr lnr-envelope"></span>
								</div>
								<div className="contact-details">
									<h5>dkpkotamakassar@gmail.com</h5>
									<p>Saran & masukan bisa dikirim via email</p>
								</div>
							</div>														
						</div>
						<div className="col-lg-8">
								<FormMsg />
						</div>
					</div>
				</div>	
			</section>
    )
}

export default Info