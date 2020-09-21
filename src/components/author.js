import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/author/dummy.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div id="author-image-container">
                        <img src={AuthorImg} />
                    </div>

                    <div id="author-contents">
                        <span>Author & Writer</span>
                        <h1>
                            <span>J. Randolph</span>
                            <span> </span>
                            <span>Smith</span>
                        </h1>
                        <p>
                            Major Smith grew up in North Carolina in a small family.
                            At the age of 10 Diptheria took his brother, 12, his idol
                            and close companion. Somehow that loss of protection and
                            support left him with an awareness that he must now provide
                            his own strength.
                        </p>

                        <div className="button-container">
                            <Link to="/about-the-author">
                                Read More
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Author;