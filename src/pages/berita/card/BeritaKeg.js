import React, { Component } from 'react'
import Axios from 'axios'

export default class BeritaKeg extends Component {
  componentDidMount() {
    Axios.get(`/api/list/berita?kat=1`)
      .then(respon =>
          console.log(respon)
      ).catch(err => alert(err))
  }
  render() {
    return (
      <div>
        ini berita kegiatan
      </div>
    )
  }
}
