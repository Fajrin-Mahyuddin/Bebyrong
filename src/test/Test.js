import React, { Component } from 'react'
import Axios from 'axios';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPage: 1,
      postPerPage: 10
    }
    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res =>  
        this.setState({
          posts: res.data
        })
      )
    .catch(err => alert(err))
  }

  paginate = number => {
    this.setState({
      currentPage: number.target.id
    })
  }
  
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
    const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumber = [];
    
    for(let i = 1; i<= Math.ceil(this.state.posts.length / this.state.postPerPage); i++) {
      pageNumber.push(i);
    }
    
    
    return (
      <div>
        Testing page
        <ul>
          {currentPosts.map((data, i) => {
            return <li key={i} style={{marginLeft:'50px'}}>{data.title}</li>
          })}
        </ul>
          <nav className="blog-pagination justify-content-center d-flex">
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                        <span aria-hidden="true">
                            <span className="lnr lnr-chevron-left"></span>
                        </span>
                    </a>
                </li>
                {pageNumber.map(number => {
                  return  <li className="page-item" key={number}><a href="#" id={number} onClick={this.paginate} className="page-link">{number}</a></li>
                })}
                
                <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                        <span aria-hidden="true">
                            <span className="lnr lnr-chevron-right"></span>
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
      </div>
    )
  }
}
