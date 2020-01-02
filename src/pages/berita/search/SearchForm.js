import React, { Component } from 'react'

export default class SearchForm extends Component {
  render() {
    return (
        <form className="search-form">
            <input placeholder="Cari Posting" name="search" type="text" autoComplete="off" />
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    )
  }
}
