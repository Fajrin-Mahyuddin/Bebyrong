import React, { Component } from 'react'
import CommentForm from './CommentForm'

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKomen: [],
      isClick: false,
      lengthData: 2
    }
  }

  moreComment = (e) => {
    e.preventDefault();
    let obj = this.props.dataKomen
    let number = Object.keys(obj).length
    this.setState({
      lengthData: (!this.state.isClick) ? number:2 ,
      isClick:!this.state.isClick
    })
  }
  
  render() {
    const dataKomen = this.props.dataKomen;
    return (
      <div className="comments-area">
        <a href="#" onClick={this.moreComment} ><h4>{(this.state.isClick)?'Tutup':'Lihat'} Komentar ({Object.keys(this.props.dataKomen).length})</h4></a>
        {dataKomen.map((komentar, i) => {
          if(i <= this.state.lengthData ) {
            return (
                <div className="comment-list" key={i}>
                  <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                          <div className="thumb">
                              <img src={komentar.gambar || "/img/blog/c1.jpg"} alt=""/>
                          </div>
                          <div className="desc">
                              <h5><a href="#">{komentar.nama}</a></h5>
                              <p className="date">{komentar.waktu} </p>
                              <p className="comment">
                                  {komentar.isi}
                              </p>
                          </div>
                      </div>
                  </div>
                </div>)	
            } 
            return null
        })}
  
        <CommentForm />	                                             				
      </div>
    )
  }
}
