import React from 'react'
import BookLink from '../book-link/book-link'


const BookInfo = (props) => {
    return (
        <>
            <div className="columns book-container-ft">

                <div className="column">
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                    </div>
                </div>

                <div className="column" id={props.data.id}>
                    <section className="contentBook">
                        <h1>
                            {props.data.title}
                        </h1>

                        <p className="sub-heading">
                            {props.data.spanFirst}
                        </p>

                        <span>
                            {props.data.spanTitle}
                        </span>

                        <div className="content-body" dangerouslySetInnerHTML={{ __html: `${props.data.content}` }} />
                    </section>

                    <BookLink
                        data={{
                            ebook: {
                                stratton: 'https://www.stratton-press.com/books/coup-detat-seven-days-in-october/',
                                barnes: 'https://www.barnesandnoble.com/w/coup-detat-j-randolph-smith/1116293484?ean=9781483668147',
                                amazon: 'https://www.amazon.com/Coup-DEtat-Seven-Days-October-ebook/dp/B081PDCMZ3/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1599786299&sr=8-1',
                            },
                            paperback: {
                                amazon: 'https://www.amazon.com/Coup-DEtat-Seven-Days-October/dp/1643456830/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1599786299&sr=8-1',
                                barnes: 'https://www.barnesandnoble.com/w/coup-detat-j-randolph-smith/1116293484?ean=9781643456836',
                                booksamillion: 'https://www.booksamillion.com/p/Coup-DEtat/J-Randolph-Smith/9781643456836?id=7997864620895',
                            },
                            reviews: {},
                            isNonfront: true,
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default BookInfo;