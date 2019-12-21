import React, { Component } from 'react'

export default class WidgetMenu extends Component {
  render() {
    return (
      <section className="top-category-widget-area pt-90 pb-90 ">
        <div className="container">
          <div className="row">	

            <div className="col-lg-4">
              <div className="single-cat-widget">
                <div className="content relative">
                  <div className="overlay overlay-bg"></div>
                    <a href="#" target="_blank">
                      <div className="thumb">
                      <img className="content-image img-fluid d-block mx-auto" src="img/blog/cat-widget1.jpg" alt="" />
                      </div>
                      <div className="content-details">
                        <h4 className="content-title mx-auto text-uppercase">Kegiatan</h4>
                        <span></span>								        
                        <p>Berita Kegiatan</p>
                      </div>
                    </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-cat-widget">
                <div className="content relative">
                  <div className="overlay overlay-bg"></div>
                    <a href="#" target="_blank">
                      <div className="thumb">
                      <img className="content-image img-fluid d-block mx-auto" src="img/blog/cat-widget2.jpg" alt="" />
                      </div>
                      <div className="content-details">
                        <h4 className="content-title mx-auto text-uppercase">Workshop</h4>
                        <span></span>								        
                        <p>Berita Workshop</p>
                      </div>
                    </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-cat-widget">
                <div className="content relative">
                  <div className="overlay overlay-bg"></div>
                    <a href="#" target="_blank">
                      <div className="thumb">
                      <img className="content-image img-fluid d-block mx-auto" src="img/blog/cat-widget3.jpg" alt="" />
                      </div>
                      <div className="content-details">
                        <h4 className="content-title mx-auto text-uppercase">Dokumen</h4>
                        <span></span>
                        <p>Berita Document</p>
                      </div>
                    </a>
                </div>
              </div>
            </div>	

          </div>
        </div>	
      </section>
    )
  }
}
