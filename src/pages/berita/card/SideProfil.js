import React, { Component } from 'react'

export default class SideProfil extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  }
  render() {
    console.log(this.props.data)  

    return (
      <div className="col-lg-4 sidebar-widgets">
        <div className="widget-wrap">
          <div className="single-sidebar-widget search-widget">
            <form className="search-form" action="#">
                <input placeholder="Cari Posting" name="search" type="text" autoComplete="off" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
          <div className="single-sidebar-widget user-info-widget">
            <img src="/img/blog/user-info.png" alt="" />
            <a href="#"><h4>Admin</h4></a>
            <p>
              Admin
            </p>
          </div>

          <div className="single-sidebar-widget popular-post-widget">
            <h4 className="popular-title">Posting Terbaru</h4>
            <div className="popular-post-list">
              {this.props.data.map((data, i) => {
                if(i < 4) { 
                return <div className="single-post-list d-flex flex-row align-items-center" key={i}>
                        <div className="details">
                          <a href="blog-single.html"><h6>{data.judul}</h6></a>
                          <p>2 Jam Lalu</p>
                        </div>
                      </div>
                }
                return null
              })}
            </div>
          </div>

          <div className="single-sidebar-widget ads-widget">
            <a href="#"><img className="img-fluid" src="/img/blog/ads-banner.jpg" alt=""/></a>
          </div>

          <div className="single-sidebar-widget post-category-widget">
            <h4 className="category-title">Kategori Berita</h4>
            <ul className="cat-list">
              <li>
                <a href="#" className="d-flex justify-content-between">
                  <p>Kegiatan</p>
                  <p>37</p>
                </a>
              </li>
              <li>
                <a href="#" className="d-flex justify-content-between">
                  <p>Workshop</p>
                  <p>24</p>
                </a>
              </li>
              <li>
                <a href="#" className="d-flex justify-content-between">
                  <p>Dokumen</p>
                  <p>59</p>
                </a>
              </li>											
            </ul>
          </div>	

          <div className="single-sidebar-widget tag-cloud-widget">
            <h4 className="tagcloud-title">Tag</h4>
            <ul>
              <li><a href="#">Pangan</a></li>
              <li><a href="#">Pasar</a></li>
              <li><a href="#">Petani</a></li>
              <li><a href="#">Komoditas</a></li>
              <li><a href="#">Makassar</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
