import React from 'react'
import PropTypes from 'prop-types'
import { Link, Router } from "react-router-dom";
export default function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg .text-white bg-primary">
                <div className="container-fluid">
                    <Link className="text-light navbar-brand" to="/">
                        {props.title}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "white" }} to="/About">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex" style={{ height: "40px" }} role="search">
                            <img src="https://www.kindpng.com/picc/m/75-759509_todo-do-list-hd-png-download.png"
                                className="d-flex" alt="Sample image" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title: "Title Here",
    search: true
}

Header.propTypes = {
    title: PropTypes.string,
    search: PropTypes.bool.isRequired               //required to give input for search bar
}
