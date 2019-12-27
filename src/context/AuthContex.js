import React, { Component } from 'react'

const AuthContex = React.createContext()

export class AuthContexProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_kat : null
    }

    this.getKategori = this.getKategori.bind(this);
    // this.makeSLug = this.makeSLug.bind(this);
  }

  getKategori = (event) => {
    
   this.setState({
      id_kat: event
    })

    return event
  } 

  makeSLug = (str) => {
    let slug = str.replace(/[^a-z0-9 -]/g, '')
              .replace(/\s+/g, '-') 
              .replace(/-+/g, '-'); 
    return slug
  } 

  render() {
    return (
      <AuthContex.Provider value={{
        getKategori: this.getKategori,
        makeSLug: this.makeSLug,
        ...this.state
      }}>
      {this.props.children}
      </AuthContex.Provider>
    )
  }
}

export const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
          <AuthContex.Consumer>
            {context => (
              <WrappedComponent {...this.props} {...context} />
            )}
        </AuthContex.Consumer>
      )
    }
  }
}
