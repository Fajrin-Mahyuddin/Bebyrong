import React, { Component } from 'react'
import axios from 'axios'
// const axiosReq = axios.create

const AuthContex = React.createContext()

export class AuthContexProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_kat : null
    }

    this.getKategori = this.getKategori.bind(this);
  }

  getKategori = (event) => {
    
   this.setState({
      id_kat: event
    })

    return event
  } 

  render() {
    return (
      <AuthContex.Provider value={{
        getKategori: this.getKategori,
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
