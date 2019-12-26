import React, { Component } from 'react'

export default class FormMsg extends Component {
  render() {
    return (
      <div>
        <form className="form-area contact-form text-right" id="myForm" method="post">
          <div className="row">	
            <div className="col-lg-6 form-group">
              <input name="name" placeholder="Nama Anda" className="common-input mb-20 form-control" required="" type="text"></input>
              <input name="email" placeholder="Alamat Email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" className="common-input mb-20 form-control" required="" type="email"></input>
              <input name="subject" placeholder="Subjek" className="common-input mb-20 form-control" required="" type="text"></input>
            </div>
            <div className="col-lg-6 form-group">
              <textarea className="common-textarea form-control" name="message" placeholder="Pesan" required=""></textarea>				
            </div>
            <div className="col-lg-12">
              <div className="alert-msg" style={{textAlign: 'left'}}></div>
              <button className="genric-btn primary" style={{float: 'right'}}>Kirim Pesan</button>											
            </div>
          </div>
        </form>
      </div>
    )
  }
}
