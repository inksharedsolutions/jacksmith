import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../../static/logo/logo.png'


const Nav = (props) => {

    const refSpan = useRef();
    const [toggled, setToggled] = useState(false);

    const pages = [
        'Home',
        'About-the-Author',
        'About-the-Book',
        'Contact'
    ]

    let Listed = pages.map((e) => {
        var newUrl = ((e).replace(/[ /]/g, "-").trim().toLowerCase());
        let filterUrl = (newUrl === 'home') ? '/' : `/${newUrl}`;

        return (
            <li>
                <Link
                    to={filterUrl}>
                    {e.replace(/[-/]/g, " ").trim()}
                </Link>
            </li>
        )
    })

    const clickEvent = (e) => {
        setToggled(!toggled);
    }

    return (
        <>
            <nav className="navigation">
                <li>
                    {/* <Link to="/blog">
                        Blog
                    </Link> */}
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/about-the-author">
                        Author
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <img alt="author-logo" src={Logo} />
                    </Link>
                </li>

                <li>
                    <Link to="/about-the-book">
                        Book
                    </Link>
                </li>

                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </nav>

            <nav className="burger-nav">
                <h1>
                    <Link
                        style={props.pathExt === '/' || props.pathExt === '' ? { color: 'rgb(255, 202,0)' } : { color: '#000' }} to="/"
                    >
                        <img src={Logo} className="logo-img" />
                    </Link>>
                </h1>

                <h1></h1>

                <ul
                    className="hamburger-ul"
                    onClick={e => clickEvent(e)}
                    ref={refSpan}>
                    <span className="hamburger-span"></span>
                    <span className="humberger-span"></span>
                </ul>

                <section className={toggled ? 'active-nav' : 'non-active-nav'}>
                    <span className="hamburger-x-mark"></span>
                    <span className="hamburger-x-mark"></span>

                    <ul>
                        <p className="list-label">
                            Navigation
                        </p>

                        {Listed}

                    </ul>
                </section>
            </nav>
        </>
    )
}

export default Nav;