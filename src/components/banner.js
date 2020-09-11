import React from 'react'
import { Link } from 'gatsby'

const Banner = () => {
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-layout" id="banner-layout-responsive">

                        <div className="right-col banner-img">
                            <div className="banner-text">
                                <span className="first-title">COUP D'ETAT</span>
                                <h2>
                                    <span className="second-title">SEVEN DAYS IN OCTOBER</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;