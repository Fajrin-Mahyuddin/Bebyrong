import React, { Component } from 'react'

export default class CommentForm extends Component {
  render() {
    return (
      <div className="comment-form">
        <h4>Tinggalkan komentar</h4>
        <form>
          <div className="form-group form-inline">
            <div className="form-group col-lg-6 col-md-12 name">
              <input type="text" className="form-control" id="name" placeholder="Masukkan Nama" />
            </div>
            <div className="form-group col-lg-6 col-md-12 email">
              <input type="email" className="form-control" id="email" placeholder="Masukkan Alamat" />
            </div>										
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="subject" placeholder="Subjek" />
          </div>
          <div className="form-group">
            <textarea className="form-control mb-10" rows="5" name="message" placeholder="Pesan" required=""></textarea>
          </div>
          <a href="#" className="primary-btn text-uppercase">Komentar Pos</a>	
        </form>
      </div>
    )
  }
}
