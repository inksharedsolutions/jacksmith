import React from "react"

import Layout from "../components/layout"
import Nav from "../components/nav";
import Banner from "../components/banner";
import UpperMain from "../components/author";
import Book from "../components/book";
import MidMain from "../components/featured";

const IndexPage = (props) => (
    <Layout>
        <Nav pathExt={props.path} />
        <Banner />
        <UpperMain />
        <Book />
        <MidMain />
    </Layout>
)

export default IndexPage
