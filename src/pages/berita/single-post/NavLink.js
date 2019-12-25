import React, { Component } from 'react'

export default class Navigate extends Component {
  render() {
    return (
      <div className="navigation-area">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
            <div className="detials">
              <a href="#"><h4>Posting Sebelumnya</h4></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
            <div className="detials">
              <a href="#"><h4>Posting Selanjutnya</h4></a>
            </div>		
          </div>									
        </div>
      </div>
    )
  }
}
