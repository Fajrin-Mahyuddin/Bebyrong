import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Axios from 'axios';
import moment from 'moment';

export default class SideProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
        PopularNews: [],
        dataKategori: [],
    }
  }

  componentDidMount() {
    const PopularNews = Axios.get`/api/list/berita`
    const dataKategori = Axios.get`/api/list/kategori-berita`
    Axios.all([PopularNews, dataKategori])
      .then(res => {
          this.setState({
            PopularNews: res[0].data.data,
            dataKategori: res[1].data.data,
          })
      }).catch(err => alert(err))
  }

  searchBtn = () => {
      
  }

  render() {
    
    return (
      <div className="col-lg-4 sidebar-widgets">
        <div className="widget-wrap">
          <div className="single-sidebar-widget search-widget">
            <form className="search-form">
              <input placeholder="Cari Posting" name="search" type="text" autoComplete="off" />
              <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>

          <div className="single-sidebar-widget popular-post-widget">
            <h4 className="popular-title">Posting Terbaru</h4>
            <div className="popular-post-list">
              {this.state.PopularNews.map((data, i) => {
                if(i < 5) { 
                const kategori = data.kategori.toLowerCase()
                return <div className="single-post-list d-flex flex-row align-items-center" key={i}>
                        <div className="details">
                          <a href={`/berita/${kategori}/detail/${data.slug}`}><h6>{data.judul}</h6></a>
                          <p>{moment(data.updated_at).format('dddd, DD/MM/YYYY')}</p>
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
              {this.state.dataKategori.map((data, i) => {
                  const kategori = data.nama.toLowerCase()
                  return (
                      <li key={i}>
                        <a href={`/berita/${kategori}`} className="d-flex justify-content-between">
                          <p>{data.nama}</p>
                          <p>{data.total_berita}</p>
                        </a>
                      </li>										
                  )
              })}
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