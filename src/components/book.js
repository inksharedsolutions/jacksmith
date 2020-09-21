import React from 'react'
import { Link } from 'gatsby'
import frontBook from '../../static/books/book2.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured </span>
                                <span>Book</span>
                            </h1>

                            <p>
                                Using current historical political background of a
                                dysfunctional government and a persistent increase in
                                global terrorism, Coup D’Etat weaves a tale of powerful
                                political and military figures conspiring to place a man of
                                their choosing at the pinnacle of power in America.
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>
                        </div>

                        <div className="book-wraps">
                            <img src={frontBook} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook;