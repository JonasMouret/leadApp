import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Lead Manager</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <a className="nav-link active" aria-current="page" href="#"></a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
