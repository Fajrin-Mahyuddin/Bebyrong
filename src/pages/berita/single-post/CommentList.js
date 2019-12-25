import React, { Component } from 'react'
import CommentForm from './CommentForm'

export default class CommentList extends Component {
  render() {
    return (
      <div className="comments-area">
        <a href="#"><h4>05 Komentar</h4></a>
        <div className="comment-list">
          <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                  <div className="thumb">
                      <img src="/img/blog/c1.jpg" alt=""/>
                  </div>
                  <div className="desc">
                      <h5><a href="#">Annisa</a></h5>
                      <p className="date">November 24, 2019 at 3:12 pm </p>
                      <p className="comment">
                          Mantap!
                      </p>
                  </div>
              </div>
          </div>
        </div>	
        
        <div className="comment-list">
          <div className="single-comment justify-content-between d-flex">
              <div className="user justify-content-between d-flex">
                  <div className="thumb">
                      <img src="/img/blog/c4.jpg" alt=""/>
                  </div>
                  <div className="desc">
                      <h5><a href="#">Baso</a></h5>
                      <p className="date">November 20, 2017 at 3:12 pm </p>
                      <p className="comment">
                          Oke, lanjutkan.
                      </p>
                  </div>
              </div>
          </div>
        </div>	
        <CommentForm />	                                             				
      </div>
    )
  }
}
