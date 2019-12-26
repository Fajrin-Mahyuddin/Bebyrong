import React, { Component } from 'react'
import Axios from 'axios'

export default class CommentForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      nama: '',
      email: '',
      komentar: '',
      alert: ''
    }
  }

  onInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    let id = this.props.idBerita;
    Axios.post(`/api/berita/${id}/komentar`, null, {
      headers: {
        Accept: 'application/json',
        nama: this.state.nama,
        email: this.state.email,
        komentar: this.state.komentar,
      }
    })
    .then(respons => {
      this.setState({
        nama: '',
        email: '',
        komentar: '',
        alert: respons.data.diagnostic.message
      })
    })
      .catch(err => console.log(err))
  }

  render() {
    
    return (
      <div className="comment-form">
        <h4>{this.state.alert || 'Tinggalkan komentar'}</h4>
        <form >
          <div className="form-group form-inline">
            <div className="form-group col-lg-6 col-md-12 name">
              <input type="text" className="form-control" onChange={this.onInput} autoComplete="off" name="nama" value={this.state.nama} placeholder="Masukkan Nama" />
            </div>
            <div className="form-group col-lg-6 col-md-12 email">
              <input type="email" onChange={this.onInput} className="form-control" autoComplete="off" name="email" value={this.state.email} placeholder="Masukkan Alamat" />
            </div>										
          </div>
          <div className="form-group">
            <textarea className="form-control mb-10" onChange={this.onInput} rows="5" name="komentar" placeholder="Komentar" required="" value={this.state.komentar}></textarea>
          </div>
          <a href="#" onClick={this.submitForm} className="primary-btn text-uppercase">Kirim Komentar</a>	
        </form>
      </div>
    )
  }
}
