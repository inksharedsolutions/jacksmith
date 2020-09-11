import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.jpg'

const ATA = (props) => {
    return (
        <>
            <Layout>
                <Nav pathExt={props.path} />

                <Banner spanFirst={`About The`} contextHeading={`Author`} />

                <div className="container">
                    <section className="body-autor-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    Dreams have been realized on this day.
                                    And other dreams may have been fulfilled before this day.
                                    Other dreams may not have even been born yet. Ther is just one
                                    thinks to keep in mind: whatever dream you have... keep the faith!
                                </h4>

                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
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

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer</span>
                                    <span className="ata-name">Jack Smith</span>
                                </span>
                            </p>
                        </article>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default ATA;