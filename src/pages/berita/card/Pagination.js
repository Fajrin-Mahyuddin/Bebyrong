import React from 'react'

const Pagination = ({pageNumber, current_page, toPage}) => {
  
  return (
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
              return <li key={number} className={(current_page === number) ? 'page-item active' : 'page-item'}><a href="#" id={number} onClick={toPage} className="page-link">{number}</a></li>
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
  )
}

export default Pagination;