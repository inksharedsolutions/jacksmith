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
                            <span>Jack</span>
                            <span> </span>
                            <span>Smith</span>
                        </h1>
                        <p>
                            Retired Air Force Major J. Randolph Smith served in the military for twenty-four years
                            as a psychotherapist during the Korean War, the Viet Nam Conflict and during the years of
                            relative peace in Spain, Turkey, Colorado, Texas and France where he met and married his
                            wife of fifty-three years. The couple resides in Austin, Texas where their two grown children
                            also live with their families. Major Smith published Night Train from Manchuria in 2012, a
                            historical novel based on World War II in the Pacific; he is writing his third novel, a historical
                            suspense thriller. Jack has just finished his second novel, COUP D'ETAT, a political thriller and is
                            currently working on his third novel, a historical suspense/thriller.
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