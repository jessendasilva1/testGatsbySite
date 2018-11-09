import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../images/icon.png'

export default class Navbar extends Component {
    render() {
        return (
            <nav id='navigationBar' style={{ display: 'flex', backgroundColor: 'green' }}>

                <div id="logoContainer" style={{ flex: 1, margin: "5px" }}>
                    <div id="logoDiv" style={{ display: "flex", backgroundColor: 'red', justifyContent: "center"}}>
                      
                            <img src={logo} style={{}} />

                    </div>
                </div>

                <div id="navLinksContainer" style={{ flex: 1, margin: "5px" }}>
                    <div id="navBarDiv" style={{ display: "flex", height: "100%", backgroundColor: 'yellow' }}>
                        <div id="narBarLinks" style={{ display: "flex", alignItems: "flex-end"}}>
                            <Link style={{ margin: '10px' }} to="/home">
                                Home
                            </Link>
                            <Link style={{ margin: '10px' }} to="/comapny">
                                Company
                            </Link>
                            <Link style={{ margin: '10px' }} to="/solutions">
                                Solutions
                            </Link>
                            <Link style={{ margin: '10px' }} to="/results">
                                Results
                            </Link>
                            <Link style={{ margin: '10px' }} to="/resources">
                                Resources
                            </Link>
                            <Link style={{ margin: '10px' }} to="/blog">
                                Blog
                            </Link>
                            <Link style={{ margin: '10px' }} to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

            </nav>
        );
    }
}