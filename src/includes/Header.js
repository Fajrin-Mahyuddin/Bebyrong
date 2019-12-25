import React, { Component } from 'react'
import { withAuth } from '../context/AuthContex'

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <header id="header">
				<div className="header-top">
					<div className="container">
				  		<div className="row justify-content-center">
						      <div id="logo">
						        <a href="/"><img src="/img/logo.png" alt="" title="" /></a>
						      </div>
				  		</div>			  					
					</div>
				</div>

				<div className="container main-menu">
					<div className="row align-items-center justify-content-center d-flex">			
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li><a href="/">Beranda</a></li>
                <li className="menu-has-children"><a href="">Profil</a>
                  <ul>
                    <li><a href="profil-organisasi.html">Profil Organisasi</a></li>
                    <li><a href="tugas-pokok-fungsi.html">Tugas Pokok & Fungsi</a></li>
                    <li><a href="visi-misi-nilai.html">Visi, Misi & Nilai</a></li>
                    <li><a href="struktur-organisasi.html">Struktur Organisasi</a></li>
                  </ul>
                </li>
                <li className="menu-has-children"><a href="/berita">Berita</a>
                  <ul>
                    <li><a href="/berita/semua">Semua</a></li>
                    <li><a href="/berita/kegiatan">Kegiatan</a></li>
                    <li><a href="/berita/workshop">Workshop</a></li>
                    <li><a href="/berita/dokumen">Dokumen</a></li>
                  </ul>
                </li>
                <li><a href="tentang-aplikasi.html">Tentang Aplikasi</a></li>	          					          		          
                <li><a href="kontak.html">Kontak</a></li>
              </ul>
            </nav>  		  
					</div>
				</div>
			</header>
    )
  }
}

export default withAuth(Header)