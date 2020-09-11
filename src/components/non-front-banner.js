import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'

const NFB = (props) => {
    return (
        <>
            <section className="web-banner">
                <div className="container">
                    <div className="wrapper-ds">
                        <span>
                            {props.spanFirst}
                        </span>
                        <h1>
                            {props.contextHeading}
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NFB