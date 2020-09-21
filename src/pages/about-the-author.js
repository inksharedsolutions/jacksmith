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
                                    COULD  IT HAPPEN? I THINK IT COULD
                                </h4>

                                <span className="ata-span-fx">

                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Major Smith grew up in North Carolina in a small family.
                                At the age of 10 Diptheria took his brother, 12, his idol and
                                close companion.  Somehow that loss of protection and support left
                                him with an awareness that he must now provide his own strength.
                                That awareness grew and ended with his choosing first a very strong
                                French bride (leading to a marriage of 60 years) military career,
                                then education for a helping profession. In a 25-year career he served the
                                military daily as a psychotherapist devoted to finding strengths in his patients.
                                After retirement from the US Air Force he has written three books, all three focused
                                on strengths of individuals.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer</span>
                                    <span className="ata-name">J. Randolph Smith</span>
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