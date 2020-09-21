import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from 'disqus-react'
import FrontBook from '../../static/books/book2.png'


const ATB = (props) => {


    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'j-randolph-smith',
        config: { identifier: 12, slug }
    }

    return (
        <>
            <Layout>
                <Nav pathExt={props.path} blogNav={true} />

                <Banner spanFirst={`About The`} contextHeading={`Book`} />

                <main className="wrapperMain">
                    <div className="container" id="book-containers">

                        <BookInfo
                            data={{
                                title: `Coup d'etat`,
                                spanFirst: `SEVEN DAYS IN OCTOBER`,
                                imgSrc: FrontBook,
                                id: 'the_gifted_one',
                                content:
                                    `
                                <p>
                                    Using current historical political background of a dysfunctional government and a persistent increase in global terrorism, Coup D’Etat weaves a tale of powerful political and military figures conspiring to place a man of their choosing at the pinnacle of power in America.
                                </p> 
                                <p>
                                    Newly assigned Secret Service Agent Alex Coulter joins forces with an American Embassy secretary in Madrid who turns up with evidence of a coup d’état in progress after the assassination of the American ambassador to Spain and the murder of an admiral at Rota Naval Station in Spain. The couple, pursued by rogue Secret Service agents, fight for their lives across Madrid and Segovia, Spain, Washington, DC, and Virginia.
                                </p>

                                <p>
                                The plot surprises; not everything is what it seems. The sense of reality, drama, intrigue, and suspense will hold your attention and keep your pulse pounding until the last page. 
                                </p>
                                `,

                                ebook: {
                                    stratton: 'https://www.stratton-press.com/books/coup-detat-seven-days-in-october/',
                                    barnes: 'https://www.barnesandnoble.com/w/coup-detat-j-randolph-smith/1116293484?ean=9781483668147',
                                    amazon: 'https://www.amazon.com/Coup-DEtat-Seven-Days-October-ebook/dp/B081PDCMZ3/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1599786299&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Coup-DEtat-Seven-Days-October/dp/1643456830/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1599786299&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/coup-detat-j-randolph-smith/1116293484?ean=9781643456836',
                                    booksamillion: 'https://www.booksamillion.com/p/Coup-DEtat/J-Randolph-Smith/9781643456836?id=7997864620895',
                                }
                            }}
                        />
                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default ATB;